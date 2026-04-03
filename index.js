const express = require('express'); //importa o express para aplicacao, atribuindo ele na const 'express'
const app = express(); //para construir uma aplicacao, criamos uma instancia do app express que atribuimos a const app

/*parametros req, res => funçao callback que é chamada quando a rota '/' e acessada.
req => contem as informaçoes sobre a req HTTP.
res => usado para responder o cliente, sendo utilizado pelo metodo res.send(), para enviar resposta ao cliente.*/
app.get('/', function (req,res){ //app.get => usado para definir a rota da req HTTP GET, onde a rota '/' é o caminho principal do site (a rota).
    res.send('Hello World'); //endpoint prinicipal com a msg 'hello world'
});

app.listen();
