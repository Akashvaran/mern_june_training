const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userModel = require("../models/userModel");


const generateToken=(id,email,mobile)=>{
   return jwt.sign({id,email,mobile},process.env.PERSONAL_KEY,{expiresIn:"1h"})
}
const signup= async(req,res)=>{
    const {Name,Email,MobileNo,Password}=req.body;

   let emailUser=await userModel.findOne({Email})

   if(emailUser){
    return res.status(400).json({
        message:"user already exist"
    })}

   let hashpassword= await bcrypt.hash(Password,10)
   const createUser= new userModel({Name,Email,MobileNo,Password:hashpassword})
   const savedata=await createUser.save()

   const token=generateToken(savedata._id,savedata.Email)
   console.log(token)

   res.cookie("jwt",token,{maxAge:3600000,httpOnly:true}) 

    res.status(200).json({
        message:"user created successfully",
        data:savedata, // or{ id: emailUser._id, name: emailUser.name,role:emailUser.role}
        token
    })
    

}

const login=async(req,res)=>{
    const {Email,Password}=req.body

    const existUser= await userModel.findOne({Email})

    if(!existUser){
        return res.status(404).json({
            message:"invalid email or password"
        })
    }

    const passwordValid=await bcrypt.compare(Password,existUser.Password)

    if(!passwordValid){
        return res.status(401).json({
            message:"invalid email or password"
        })
    }

    const token=generateToken(existUser._id,existUser.Email)
    console.log(token)

    res.cookie("jwt",token,{maxAge:3600000,httpOnly:true}) 

    res.status(200).json({
         message:"Login successfully",
         data:existUser,  // or{ id: existUser._id, name: existUser.name,role:existUser.role}
         token
    })

}

const logout=(req,res)=>{
    res.cookie("jwt","",{httpOnly:true})
    res.status(200).json({
        message:"logout successfully"
    })
}

module.exports={signup,login,logout};