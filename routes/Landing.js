const express = require('express')
const landing = express.Router()
const cors = require('cors')
const auth = require('../middlewares/auth');
const getmarks = require('../middlewares/getmarks');
const getcourses = require('../middlewares/getcourses');

const jwt_decode = require('jwt-decode')

landing.get('/',auth,async (req, res) =>{
    res.render('student_landing/Home.ejs');
})
landing.get('/training',function(req,res){
    res.render('landing_section/Training.ejs')
})
landing.get('/events',function(req,res){
    res.render('landing_section/Event.ejs')
})

landing.get('/home',auth,async (req,res)=>{
    res.render('student_landing/Home.ejs',{user:req.user})
})
landing.get('/absence',auth,async (req,res)=>{
    res.render('student_landing/Absence.ejs')
})
landing.get('/rating',auth,async (req,res)=>{
    res.render('student_landing/RatingTeachers.ejs')
})
landing.get('/result',auth,getcourses,getmarks,async (req,res)=>{
    const coursesMarks = req.coursesMarks
    res.render('student_landing/Result.ejs',{coursesMarks:coursesMarks})
})
landing.get('/usefullinks',auth,async (req,res)=>{
    res.render('student_landing/UsefulLinks.ejs')
})

landing.get('/schedule',auth,async (req,res)=>{
    res.render('student_landing/Schedule.ejs')
})

module.exports = landing