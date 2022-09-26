const path = require('path');
const express = require('express');
const loginView = require('./routes/login');
const homeView = require('./routes/home-view');

const bodyParser = require('body-parser');


const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',loginView);
app.use(homeView);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
})



app.listen(3000)