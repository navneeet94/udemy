const express = require('express');
const routes = express.Router();
const adminData = require('./admin');

routes.get('/', (req, res, next) => {
    const productList = adminData.products
    console.log(productList);
    res.render("shop",
        {
            pageTitle: 'Shop',
            path:'/',
            prods: productList
        });
})

module.exports = routes