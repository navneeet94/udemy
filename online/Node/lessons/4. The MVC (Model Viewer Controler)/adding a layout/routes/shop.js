const express = require('express');
const productController = require('../controllers/products');
const routes = express.Router();
routes.get('/', productController.fetchProducts)

module.exports = routes