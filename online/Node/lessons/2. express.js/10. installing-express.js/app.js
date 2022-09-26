const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware here!');
    next(); // Allows the req to continue to the next below middleware
});

app.use((req, res, next) => {
    console.log('In another  middleware!');
    res.send('<h1>Hello from Express.js!</h1>');
});

app.listen(3000)