const path = require('path');

const express = require('express');

const router = express.Router();

const product = [];

router.get('/add-product', (req, res, next) => {
    // console.log('add product');
    res.render('add-product', {docTitle:"Add Product", path: '/add-product', activeAddProduct:true});
});

router.post('/add-product', (req, res) => {
    // console.log(req.body);
    product.push({title: req.body.title});
    res.redirect('/');
})

// router.use();

module.exports.routes = router;
module.exports.products = product;