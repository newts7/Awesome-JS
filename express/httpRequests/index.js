var express= require('express');
var app= new express();
var path= require('path');
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (req,res) {

    var id = req.param('id');
    var userName = req.param('userName');
    res.send(id+" "+userName);
});


app.param('variable',function (req,res,next,variable) {

    req.variable=variable+" is my name";
    next();
});

app.get('/:variable',function (req,res) {
    res.send(req.variable);
});

app.post('/',function (req,res) {
    var id=req.body.id;
    var user=req.body.user;
    res.json({"id":id,"user":user});
});



app.listen(7777);
console.log("Server is running !");