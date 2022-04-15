const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine","ejs");
const Abhidata=require("./connect");
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render(__dirname+"/views/login");

})
app.post("/",(req,res)=>{
    const abhi11=new Abhidata({
        name:req.body.text,
        class:req.body.number
    });
    abhi11.save();
})
app.listen(3000);





