const path = require('path');
const express = require('express');
const baseDir = require('../util/path')
const router = express.Router();

router.get('/users', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
    // res.sendFile(path.join(baseDir, 'views', 'users.html'));
});

router.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    // res.sendFile(path.join(baseDir, 'views', 'index.html'));
});



module.exports = router