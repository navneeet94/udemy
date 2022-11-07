const express = require('express');
const productController = require('../controllers/products');
const routes = express.Router();

routes.get('/add-product', productController.getAddProduct);

routes.post('/add-product', productController.postAddProduct);

module.exports = routes;