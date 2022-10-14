const express = require('express');
const app = express();

app.use('/admin',(req,res)=>{
    res.send('This is a admin page');
})

app.use((req,res) => {
    res.send('This is a index page');
})

app.listen(3000)