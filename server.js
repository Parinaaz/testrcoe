const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send("Something");

})

app.listen(process.env.PORT || 3000);