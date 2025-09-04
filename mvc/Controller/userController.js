const userModel = require("../models/userModel");

const signup= async(req,res)=>{
    const userData=req.body;

    const newUser= new userModel({
    Name:userData.name,
    Email:userData.email,
    MobileNo:userData.mobileNo,
    Password:userData.password,
    })

    const savedata=await newUser.save()

    res.status(200).json({
        message:"user created successfully",
        data:savedata
    })
    

}

module.exports=signup;