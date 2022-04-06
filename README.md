# exercise-tracker-microservice

<h1>EM DESENVOLVIMENTO</h1>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>Express</li>
  <p><code>npm install express</code></p>
  <br>
  <li>CORS</li>
  <p><code>npm install cors</code></p>
  <br>
  <li>dotenv</li>
  <p><code>npm install dotenv</code></p>
  <br>
  <li>mongoose</li>
  <p><code>npm install mongoose</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>Sistema de Micro serviço para cadastro de usuario e registro de exercicios, feito em NodeJS utilizando express</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>
<hr>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git@github.com:joaov1ct0r/exercise-tracker-microservice.git</code></p>

<h3>DEPENDENCIAS</h3>
<hr>

<p>INSTALE TODAS AS DEPENDENCIAS NECESSARIAS COM O COMANDO<code>npm install</code></p>

<h3>VARIAVEIS DE AMBIENTE</h3>
<hr>

<p>ABRA O ARQUIVO .env E ALTERE AS VARIAVEIS DE AMBIENTE COM SEUS DADOS</p>

<ul>
  <li>SERVER_PORT = PORTA QUE VOCÊ QUEIRA RODAR O SERVIDOR</li>
  <li>MONGO_URI = ROTA PARA SEU MONGODB ATLAS</li>
</ul>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>npm start</code></p>

<p>APOS ISSO AS ROTAS:<br><code>localhost:3000/api/users</code>
  <br><code>localhost:3000/api/users/:_id/logs</code>
  <br><code>localhost:3000/api/users/:_id/exercises</code>
  <br>ESTARÃO DISPONIVEIS PARA FAZER AS REQUISIÇÕES</p>
