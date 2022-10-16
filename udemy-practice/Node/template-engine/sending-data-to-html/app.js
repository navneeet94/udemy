const path = require('path');
const express = require('express');
const app = express();

const admin = require('./routes/admin');
const products = require('./routes/shop');

const bodyParser = require('body-parser');

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));



app.use(admin.route);
app.use(products);

app.use((req,res)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
    res.status(404).render('not-found.pug',{pageTitle: 'Page Not Found'});
})

app.listen(3000)