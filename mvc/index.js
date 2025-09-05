const express=require('express');
const database = require('./config/database');
const app=express()
const cors=require('cors');
const userRouter = require('./routes/userRouter');
const courseRouter = require('./routes/courseRoutes');
const dotenv=require('dotenv')
const cookieparser=require('cookie-parser')
dotenv.config()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
database()

app.use(cookieparser())

app.use('/user',userRouter)
app.use('/course',courseRouter)

app.listen(process.env.PORT,()=>{
    console.log("server is running" ,process.env.PORT);
})