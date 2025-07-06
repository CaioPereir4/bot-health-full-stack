#imports 
from time import sleep
from openai import OpenAI
import os
from select_persona import select_persona
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
assistent_id = os.getenv("ASSISTENT_ID")
STATUS_COMPLETED = "completed"

def send_message(user_prompt, thread_id):
    attempts = 0
    max_attempts = 1

    while True:
        try:
            persona = select_persona(user_prompt=user_prompt)

            client.beta.threads.messages.create(
                thread_id=thread_id,
                role="user",
                content =  f"""
                                Assuma, de agora em diante, a personalidade abaixo. 
                                Ignore as personalidades anteriores.
                                
                                # Persona
                                {persona}
                """,
            )

            client.beta.threads.messages.create(
                thread_id=thread_id,
                role="user",
                content=user_prompt
            )

            run = client.beta.threads.runs.create(
                thread_id=thread_id,
                assistant_id=assistent_id
            )

            while run.status != STATUS_COMPLETED:
                run = client.beta.threads.runs.retrieve(
                    thread_id=thread_id,
                    run_id=run.id
                )

                print(f"Status: {run.status}")

            history = list(client.beta.threads.messages.list(thread_id=thread_id).data)

            return history[0].content[0].text.value

        except Exception as error:
            attempts += 1
            if attempts >= max_attempts:
                return "Perdão não consigo te ajudar agora, tente novamente mais tarde."    
            print(f"Connectior error with OpenAI: {error}")
            sleep(1)


