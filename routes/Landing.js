const express = require('express')
const landing = express.Router()
const cors = require('cors')


landing.get('/',function(req,res){
    res.render('landing_section/index.ejs');
})
landing.get('/training',function(req,res){
    res.render('landing_section/Training.ejs')
})
landing.get('/events',function(req,res){
    res.render('landing_section/Event.ejs')
})

landing.get('/home',function(req,res){
    res.render('student_landing/Home.ejs')
})
landing.get('/absence',function(req,res){
    res.render('student_landing/Absence.ejs')
})
landing.get('/rating',function(req,res){
    res.render('student_landing/RatingTeachers.ejs')
})
landing.get('/result',function(req,res){
    res.render('student_landing/Result.ejs')
})
landing.get('/usefullinks',function(req,res){
    res.render('student_landing/UsefulLinks.ejs')
})


module.exports = landing