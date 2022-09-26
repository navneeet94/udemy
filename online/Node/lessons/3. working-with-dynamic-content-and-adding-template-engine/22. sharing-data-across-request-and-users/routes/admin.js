const path = require('path');

const baseDir = require('../util/path');

const express = require('express');

const router = express.Router();

const product = [];

router.get('/add-product', (req, res, next) => {
    console.log('add product');
    res.sendFile(path.join(baseDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    // console.log(req.body);
    product.push({title: req.body.title});
    res.redirect('/');
})

// router.use();

module.exports.routes = router;
module.exports.products = product;