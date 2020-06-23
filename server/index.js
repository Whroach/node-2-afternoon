//require express or import express

const express = require('express');
const messCtrl = require('./Controllers/messages_controller')

//then create a variable called app and set it equal to express invoked

const app = express()

//3rd piece is to add Middleware, which will parses JSON into JavaScript

app.use(express.json()) 
app.use(express.static(__dirname + '/../public/build'));

//Endpoints

const messageBaseUrl = "/api/messages"

app.post(messageBaseUrl, messCtrl.create);
app.get(messageBaseUrl, messCtrl.read);
app.put(`${messageBaseUrl}/:id`, messCtrl.update); //adding on a url paramter of id
app.delete(`${messageBaseUrl}/:id`, messCtrl.delete); //adding on a url paramter of id






//Finally, add app.listen(), that accepts 2 arguments: port number and console.log

app.listen(3001, () => console.log('Server running on 3001'))
