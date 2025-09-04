const express=require('express')
const createCourse = require('../Controller/courseController')


const courseRouter=express.Router()

courseRouter.post('/createCourse',createCourse)

module.exports=courseRouter
