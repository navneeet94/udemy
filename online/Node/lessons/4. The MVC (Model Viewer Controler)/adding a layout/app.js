const path = require('path');
const express = require('express');

const errorsController = require('./controllers/errors')

const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorsController.getfront404)

app.listen(3001)