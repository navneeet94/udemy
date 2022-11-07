const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
res.render('add-product',
    {
        pageTitle: 'Add Product',
        path: '/add-product'
    });
};

exports.postAddProduct = (req, res) =>{
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
}

exports.fetchProducts = (req, res, next) => {
    const product = Product.fetchAll();
    res.render("shop",
        {
            pageTitle: 'Shop',
            path:'/',
            prods: product
        });
}