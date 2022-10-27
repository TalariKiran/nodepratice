const express= require('express');
const app=express();
const querystring=require('querystring')

app.get("/",(req, res)=>{

res.send({
    name:"kiran",
    cars:["bmw","audi","benz",'rolls']
})
res.end()


}); 
 


app.get("/api/user",(req, res)=>{

    res.send(`<html>
    <body style="color:red" >
    helllo bro hellpelr
    <body></html>`)
})

app.get("/api/:user/:id",(req, res)=>{
    let user=req.params.user;
      let id= req.params.id
    res.send(`this is the id searchung ${id} the iiseer is ${user}`)
})
app.get("/api/car",(req, res)=>{
let brand=req.query.brand;
let year=req.query.year;
res.send([
    brand,
    year
]
)


})
app.listen(5050);
console.log('hello123')