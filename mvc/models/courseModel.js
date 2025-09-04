const mongoose = require("mongoose");

const courseSchema=new mongoose.Schema({
    Name:String,
    Duration:Number,
    Fees:Number

})

const courseModel=mongoose.model("courseData",courseSchema)

module.exports=courseModel;