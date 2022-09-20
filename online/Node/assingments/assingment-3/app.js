const path = require('path');

const bodyParser = require('body-parser');

const express = require('express');
const admin = require('./routes/admin');
const front = require('./routes/front');
// const front = require('./routes/admin');

const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',admin);
app.use(front);

app.use((re,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000);