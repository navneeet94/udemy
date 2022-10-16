const path = require('path');
const express = require('express');

const productData = require('../routes/admin');

const routes = express.Router();

routes.get('/',(req,res) => {
    prodList = productData.product
    console.log(prodList)
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop.pug',{pageTitle: 'Products',prods:prodList,path:'/'});
})

module.exports = routes;