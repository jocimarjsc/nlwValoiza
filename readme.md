<div align="center">
    <img src="./github/nlw.svg" alt="Logo">
    <br />
</div><br />
<br>
<h1 align="left">NextLevelWeek 6.0</h1>
<h2>🙇🏻‍♂️ O que é a Next Level Week?</h2>

<p>A NLW ou Next Level Week, é um evento online, totalmente gratuito, oferecido pela Rocketseat, que consiste, em uma semana com muito conteúdo prático, cheios de desafios e com um projeto que nos ajudará a avançar e atingir o próximo nível.</p>

<a href="https://rocketseat.com.br/">Rocketseat 🚀</a>

<h2>🌍 Dias</h2>

<ul>
    <li>Dia 1: Liftoff 20/06 ✔️</li>
    <li>Dia 2: Maximum Speed 21/06 ✔️</li>
    <li>Dia 3: In Orbit 22/06 ✔️</li>
    <li>Dia 4: Landing 23/06 ✔️</li>
    <li>Dia 5: Surface Exploration 24/06 ✔️</li>
</ul>

<h2>💻 Projeto - NLW Valoriza</h2>

<p>NLW Valozira, é uma API desenvolvida com NodeJS, com o objetivo de conectar e valorizar as pessoas através de elogios.</p>

<h2>⛏️ Tecnologias</h2>

<ul>
    <li>Node JS</li>
    <li>Typescript</li>
    <li>Express</li>
    <li>Typeorm</li>
    <li>express-async-errors</li>
    <li>reflect-metadata</li>
    <li>class-transformer</li>
    <li>PostgreSql</li>
    <li>bcryptjs</li>
    <li>JWT</li>
    <li>uuid</li>
    <li>cors</li>
    <li>dotenv</li>
</ul>

<h2>💻 Como Executar</h2>

```bash
# Clone
$ git clone https://github.com/jocimarjsc/nlwValoiza.git

# Install Dependencies 
$ cd NLW-Together && yarn install

# Rename file ".env.example" to ".env"
$ mv .env.example .env

# Instale o banco PostgreSql e configure um banco de dados, mude todo o conteúdo de ormconfig.json utilizando o techo de código abaixo.
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "usuário do seu banco",
    "password": "senha do seu banco",
    "database": "nome do seu banco",
    "entities": [
       "src/entities/**.ts"
    ],
    "migrations": [
       "src/database/migrations/**.ts"
    ],
    "cli": {
       "migrationsDir": "src/database/migrations",
       "entitiesDir": "src/entities"
    }
 }

# Execute
$ yarn dev

```

<h2>🔥 Como Utilizar</h2>

<p>Abaixo é exibido a forma de utilização da API.</p>

```js
/*
* Add a new User
* @Route("http://localhost:3333/users, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: "Admin",
      email: "admin@admin.com.br",
      password: "admin",
      admin: true // true or false
	}),
    headers: {
    	"Content-type": "application/json; charset=UTF-8"
    }
})
```

```js
/*
* Create a session to receive a token
* @Route("http://localhost:3333/login, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: "admin@admin.com.br",
      password: "admin"
	}),
    headers: {
    	"Content-type": "application/json; charset=UTF-8"
    }
})
```

```js
/*
* List Tags
* @Route("http://localhost:3333/tags, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type" : "application/json",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Add a new tag if you are an administrator
* @Route("http://localhost:3333/tags, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: "Inspiration"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Baerer {token}"
    }
})
```

```js
/*
* List Users
* @Route("http://localhost:3333/users, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Baerer {token}"
    }
})
```

```js
/*
* Add a new compliment
* @Route("http://localhost:3333/compliment, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        tag_id: "{tag_id}",
        user_receiver: "{receiver_user_id}",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Baerer {token}"
    }
})
```

```js
/*
* List of compliments sent by user
* @Route("http://localhost:3333/users/compliments/send, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Baerer {token}"
    }
})
```

```js
/*
* List of compliments received 
* @Route("http://localhost:3333/users/compliments/receive, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Baerer {token}"
    }
})
```
Feito por [Jocimar Costa](https://github.com/jocimarjsc) 😊