var express= require('express');
var app= new express();
var path= require('path');


app.get('/',function (req,res) {

    res.sendFile(path.join(__dirname+'/index.html'));
});


app.get('/text',function (req,res) {
    res.sendFile(path.join(__dirname+'/text.txt'));
});

app.listen(7777);
