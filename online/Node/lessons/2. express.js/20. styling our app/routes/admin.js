const path = require('path');

const baseDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('add product');
    res.sendFile(path.join(baseDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

// router.use();

module.exports = router;