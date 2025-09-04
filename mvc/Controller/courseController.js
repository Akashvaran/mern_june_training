const courseModel = require("../models/courseModel");

const createCourse= async(req,res)=>{
    const courseData=req.body;

    const newCourse= new courseModel({
    Name:courseData.name,
    Duration:courseData.duration,
    Fees:courseData.fees
    })

    const savedcourse=await newCourse.save()

    res.status(200).json({
        message:"course created successfully",
        data:savedcourse
    })
    

}

module.exports=createCourse;