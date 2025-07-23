<h1 align="center">Botinho's Python Backend.</h1>

<p align="center">Backend server developed in Python and Flask. It integrates with the OpenAI API, managing the LLM model. It maps and handles OpenAI's responses.</p>

Table of Contents
=================
<!--ts-->
   * [Installation](#installation)  <!-- Correct link to installation section -->
   * [How to Use](#how-to-use)
   * [Technologies](#technologies)
<!--te-->

<h4 align="center"> 
	 Status: Completed 🚀 
</h4>

### Features

- [x] Connection with the OpenAI API.
- [x] Manage GPT-4.
- [x] Send messages to the assistant.
- [x] Map and handle responses.

<a id="installation"></a>
### Installation
Before starting, you need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Python](https://www.python.org/downloads/).  
It's also recommended to use a code editor such as [VSCode](https://code.visualstudio.com/)

<a id="how-to-use"></a>
### 🎲 Running the Python Backend

```bash
# Clone this repository
$ git clone <https://github.com/CaioPereir4/openai-bothealth.git>

# Navigate to the project folder in the terminal/cmd
$ cd openai-bothealth/

# Install dependencies
$ pip install

# Set environment variables

- Create a ".env" file in the root of the application.
- Add the variable "OPENAI_API_KEY" and set your OpenAI API key as the value.
- Add the variable "ASSISTENT_ID" and set the ID of the Assistant created in OpenAI's Playground as the value.

# Run the application
$ python app.py

# The server will start on port:5000 - access <http://localhost:5000/openai-bothealth>
