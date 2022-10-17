const path = require('path');

const express = require('express');

const router = express.Router();



router.get('/add-product', (req, res, next) => {
    // console.log('add product');
    res.render('add-product', {docTitle:"Add Product"});
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

// router.use();

module.exports.routes = router;