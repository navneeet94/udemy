const path = require('path');
const express = require('express');

const baseDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('home page');
    res.sendFile(path.join(baseDir , 'views', 'shop.html'));
});

'/views/shop.html'

module.exports = router