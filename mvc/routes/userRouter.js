const express=require('express')
const signup = require('../Controller/userController')

const userRouter=express.Router()

userRouter.post('/signup',signup)

module.exports=userRouter
