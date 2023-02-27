const express = require('express');
const app=express();
app.use(express.json())
app.use(require('./router/auth'));
app.get('/',(req,res)=>{
    res.send("hemlo");
})
const PORT=4000
app.listen(PORT);