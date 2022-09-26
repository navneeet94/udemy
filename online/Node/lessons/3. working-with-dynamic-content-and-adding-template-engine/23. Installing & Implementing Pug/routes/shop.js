const path = require('path');
const express = require('express');

const baseDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    products = adminData.products
    res.render('shop' , {prods:products, docTitle: 'Shop'});
});

'/views/shop.html'

module.exports = router