const path = require('path');
const express = require('express');

const routes = express.Router();

const products = [];

routes.get('/add-product',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render('add-product.pug',{pageTitle: 'Add Products',path:'/add-product'})
})

routes.post('/add-product', (req,res) => {
    //console.log(req.body)
    products.push({title:req.body.title})
    // console.log(products)
    res.redirect('/')
})

module.exports.route = routes;
module.exports.product = products;