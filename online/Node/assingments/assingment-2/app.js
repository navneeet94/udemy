const http = require('http');

const express = require('express');

const app = express();



app.use('/home', (req,res,next) => {
    console.log('Home Page middleware running')
    res.send("<h1>'Home Page' call through Express</h1>")
});

app.use('/users', (req,res,next) => {
    console.log('Users Page middleware running')
    res.send("<h1>'Users Page' call through Express</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>")
});

app.use('/', (req,res,next) => {
    console.log('Empty Page middleware running');
    res.send("<h1>'Empty Page' call through Express</h1>");
});

app.listen(3000);