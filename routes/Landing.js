const express = require('express')
const landing = express.Router()
const cors = require('cors')
const auth = require('../middlewares/auth');
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
    res.render('student_landing/Home.ejs')
})
landing.get('/absence',auth,async (req,res)=>{
    res.render('student_landing/Absence.ejs')
})
landing.get('/rating',auth,async (req,res)=>{
    res.render('student_landing/RatingTeachers.ejs')
})
landing.get('/result',auth,async (req,res)=>{
    const cookies = req.headers.cookie.split(' ')
    var token = ""
    for(let i = 0;i<cookies.length;i++){
      var wa = cookies[i].split('=');
      if(wa[0] === 'token'){
        token = wa[1];
      }
    }
    const decoded = jwt_decode(token);
    console.log(decoded);
    res.render('student_landing/Result.ejs')
})
landing.get('/usefullinks',auth,async (req,res)=>{
    res.render('student_landing/UsefulLinks.ejs')
})

landing.get('/schedule',auth,async (req,res)=>{
    res.render('student_landing/Schedule.ejs')
})

module.exports = landing