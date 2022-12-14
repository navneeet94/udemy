const path = require('path');
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    products = adminData.products
    res.render('shop' , {prods:products, docTitle: 'Shop', path: '/' , hasProducts: adminData.products.length > 0, activeShop: true});
});



module.exports = router