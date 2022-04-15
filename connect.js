const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/abhidata",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>
    console.log("successfull beta")).catch((err)=>console.log(err));
const dataschema=new mongoose.Schema({
    name:String,
    class:Number
});
const Abhidata=new mongoose.model("Table",dataschema);
module.exports=Abhidata;