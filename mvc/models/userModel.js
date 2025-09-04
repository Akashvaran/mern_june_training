const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    MobileNo:Number,
    Password:String,
})

const userModel=mongoose.model("userData",userSchema)

module.exports=userModel;