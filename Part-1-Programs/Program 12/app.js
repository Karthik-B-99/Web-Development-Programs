const express=require('express')
const app=express()
const request=require('request')
const path=require('path')
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
app.get("/search",(req,res)=>{
res.render('search') 
});
app.get("/results",(req,res)=>{
let query=req.query.search;
console.log(query) //avengers
request("https://api.themoviedb.org/3/search/movie?api_key=0cccd42ad449233dbb
72cbda986ffc4a&query="+query,(error,response,body)=>{
if(error){
console.log(error);
}
let data=JSON.parse(body)
res.render('results',{data:d,searchQuery:query})
});
});
app.listen(5757,()=>{
console.log("server listening to port no 5757");
})