const path = require('path');
const express = require('express');
const routes = express.Router();

routes.get('/login', (req,res) => {
    // console.log('login-page');
    res.sendFile(path.join(__dirname,'../','views','login.html'));
})

routes.post('/login', (req,res) => {
    console.log(req.body)
    res.redirect('/')
});

module.exports = routes;