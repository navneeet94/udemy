const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('home page');
    res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));
});

'/views/shop.html'

module.exports = router