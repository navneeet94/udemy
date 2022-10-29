const express = require('express');
const routes = express.Router();

const product = []

routes.get('/add-product', (req, res) => {
    res.render('add-product',
        {
            pageTitle: 'Add Product',
            path:'/add-product'
        });
})

routes.post('/add-product', (req, res) =>{
    currentProd = req.body
    product.push({title:currentProd.title});
    res.redirect('/');
})

module.exports.route = routes
module.exports.products = product