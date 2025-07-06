<h1 align="center">Backend Python do Botinho.</h1>

<p align="center">Servidor Backend desenvolvido em Python e Flask. Realiza integração com a Api da OpenAI, gerenciando o modelo do LLM. Mapea e trata as resposta da OpenAI.</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Instalação](#instalacao)  <!-- Link correto para seção de instalação -->
   * [Como usar](#como-usar)
   * [Tecnologias](#tecnologias)
<!--te-->

<h4 align="center"> 
	 Status: Finalizado  🚀 
</h4>

### Features

- [x] Conexão com a Api da OpenAI.
- [x] Gerenciar gpt-4.
- [x] Enviar mensagem para o assitente.
- [x] Mapear e tratar respostas.

<a id="instalacao"></a>
### Instalação
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Python](https://www.python.org/downloads/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<a id="como-usar"></a>
### 🎲 Rodando o backend Python

```bash
# Clone este repositório
$ git clone <https://github.com/CaioPereir4/openai-bothealth.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd openai-bothealth/

# Instale as dependências
$ pip install

#Ajuste as variáveis de ambiente

- Crie o arquivo ".env" na raíz da aplicação.
- Adicione a variável "OPENAI_API_KEY", passe como valor sua Api-Key da OpenAI.
- Adicione a variável "ASSISTENT_ID", passe como valor o Id do Assistente criado no PlayGround da OpenAI.


# Execute a aplicação
$ python app.py

# O servidor inciará na porta:5000 - acesse <http://localhost:5000/opeani-bothealth>
```
<a id="tecnologias"></a>
### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Python](https://www.python.org/downloads/)
- [Flask](https://flask.palletsprojects.com/en/stable/)
