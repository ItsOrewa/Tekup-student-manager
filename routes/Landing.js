const express = require('express')
const landing = express.Router()
const cors = require('cors')
const auth = require('../middlewares/auth');


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
    res.render('student_landing/Home.ejs')
})
landing.get('/absence',auth,async (req,res)=>{
    res.render('student_landing/Absence.ejs')
})
landing.get('/rating',auth,async (req,res)=>{
    res.render('student_landing/RatingTeachers.ejs')
})
landing.get('/result',auth,async (req,res)=>{
    res.render('student_landing/Result.ejs')
})
landing.get('/usefullinks',auth,async (req,res)=>{
    res.render('student_landing/UsefulLinks.ejs')
})


module.exports = landing