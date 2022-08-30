var express=require("express");
var bodyParser=require("body-parser");
var MongoClient=require('mongodb').MongoClient;
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
extended: true
}));
var url="mongodb://localhost:27017/";
var dbo;
MongoClient.connect(url,function(err,database) {
if(err) 
throw err;
dbo=database.db("signup1");
});
app.post('/success',function(req,res) {
var name=req.body.fn;
var email=req.body.email;
var pass=req.body.password;
var phone=req.body.phno;
var data={
"name":name,
"email":email,
"password":pass,
"phone":phone
}
dbo.collection('users').insertOne(data,function(err,collection){
if(err) 
throw err;
console.log("Record inserted Successfully");
});
return res.redirect('success.html');
})
app.get('/',function(req,res){
return res.redirect('index.html');
}).listen(3000)
console.log("server listening at port 3000")