#imports
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from assistent_bot_health import create_thread, delete_thread_by_id
from send_message import send_message

load_dotenv()

app = Flask(__name__)

@app.route("/opeani-bothealth", methods=["GET"])
def check_route():
    return "the route is up and running", 200

@app.route("/opeani-bothealth/thread", methods=["GET"])
def generate_thread_id():
    thread_id = create_thread()
    request_response = { "thread_id" : thread_id.id }
    return  jsonify(request_response), 200

@app.route("/opeani-bothealth/thread/<thread_id>", methods=["DELETE"])
def delete_thread(thread_id):
    response = delete_thread_by_id(thread_id=thread_id)
    request_response = {
        "ok": response,
        "message": "Tentativa de deletar thread enviada com sucesso"
    }

    return jsonify(request_response)

@app.route("/opeani-bothealth/chat", methods=["POST"])
def chat():
    try:
        user_prompt = request.json["message"]
        thread_id = request.json["thread_id"]
    except KeyError as error:
        request_response = { 
            "message": "Request without expected fields [message, thread_id]",
            "ok": False,
            "code": 400
        }
        return jsonify(request_response), 400

    response = send_message(user_prompt=user_prompt, thread_id=thread_id)

    request_response = {
        "message": response,
        "ok": True, 
        "code": 200
    }

    return jsonify(request_response), 200
    


if __name__ == "__main__":
    app.run(debug = True)


