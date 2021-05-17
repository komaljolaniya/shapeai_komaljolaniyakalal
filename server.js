const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var mass=Number(req.body.num1);
  var height=Number(req.body.num2);
  console.log(req.body.num1);
  var result=mass/(height*height);
  res.send("The BMI is "+result);
});
app.listen(3000,function(){
  console.log("Server has started  on port 3000");
});
