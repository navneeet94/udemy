const path = require('path');
const express = require('express');
const baseUrl = require('../util/path')
const router = express.Router();

router.get('/login', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views', 'login.html'));
    // res.sendFile(path.join(baseUrl, 'views', 'login.html'));
});

router.post('/login', (req, res) => {
    getReq = req.body;
    username = req.body.userid
    pwd = req.body.pwd
    console.log(`user id = ${req.body.userid} , pwd = ${req.body.pwd}`);
    if(username == 'admin' && pwd == 'admin@123'){
        console.log('Login Successfull');
        res.redirect('/');
    }
    else{
        console.log('Login failed user name & paswword not match');
        console.log('Hint type user name => admin and password => admin@123')
        res.redirect('/admin/login');
    }
})


module.exports = router