const http = require('http');
const express = require('express');

const app = express();


app.use('/party', (req, res, next) => {
    console.log('This always runs');
    next();
});

app.use('/add-products', (req, res, next) => {
    console.log('add product');
    res.send('<h1>Add Product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('home page');
    res.send('<h1>Home Page</h1>');
});

app.listen(3000)