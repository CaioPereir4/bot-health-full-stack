#imports 
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def create_thread():
    return client.beta.threads.create()

def delete_thread_by_id(thread_id):
    try:
        response = client.beta.threads.delete(thread_id=thread_id)
        return True
    except Exception as error: 
        print(f"Error to delete thread: {error} ")
        return False