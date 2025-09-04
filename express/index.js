const express=require('express')
const mongoose=require('mongoose')

const app=express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/training")
.then(()=>console.log("database is connected"))
.catch((err)=>console.log("database is not connect",err))


const userSchema=new mongoose.Schema({
    Name:String,
    Password:String

})

const user=mongoose.model("userDetails",userSchema)



app.get('/',(req,res)=>{
    res.send("hello welcome mu name is alasjjs")
})

// app.post('/user',(req,res)=>{
//     // const userName=req.body.Name;
//     // const userPassword=req.body.Password;
//     // console.log(userName,userPassword)
//     // const {Name,Password}=req.body
//     const userdata=req.body
//     console.log(userdata.Name,userdata.Password)
//     res.status(200).json({
//         message:"data received successfully",
//         data:userdata
//     })
// })



app.post('/user',async(req,res)=>{
   
   const userdata=req.body;

    const newuser=new user({
        Name:userdata.Name,
        Password:userdata.Password
    })

    const savedata=await newuser.save();


    res.status(200).json({
        message:"data received successfully",
        data:savedata
    })
})

app.put('/user/:id',async(req,res)=>{

    const {id}=req.params;

    const{Name,Password}=req.body

    const updateData=await user.findByIdAndUpdate(
        id,
        {Name,Password},
        {new:true}
    )

    if(!updateData){
        return res.status(404).json({message:"user data not found"})
    }

    res.status(200).json({
        message:"updated successfully",
        data:updateData
    })

})

app.delete('/user/:id',async(req,res)=>{
    const {id}=req.params

    const deletedata=await user.findByIdAndDelete(id)

    if(!deletedata){
        return res.status(404).json({
            message:"data not found"
        })
    }
    res.status(200).json({
        message:"data deleted successfully",
        data:deletedata
    })

})




app.listen(2000,()=>{
    console.log("server is running")
})