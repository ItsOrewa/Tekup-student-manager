const express = require('express')
const landing = express.Router()
const cors = require('cors')
const auth = require('../middlewares/auth');
const getmarks = require('../middlewares/getmarks');
const getcourses = require('../middlewares/getcourses');

const jwt_decode = require('jwt-decode');
const getabsence = require('../middlewares/getabsence');

landing.get('/',auth,async (req, res) =>{
    res.render('student_landing/Home.ejs');
})

landing.get('/home',auth,async (req,res)=>{
    res.render('student_landing/Home.ejs',{user:req.user})
})
landing.get('/absence',auth,getcourses,getabsence,async (req,res)=>{
    coursesAbsence = req.coursesAbsence
    res.render('student_landing/Absence.ejs',{coursesAbsence:coursesAbsence})
})
landing.get('/rating',auth,async (req,res)=>{
    res.render('student_landing/RatingTeachers.ejs')
})
landing.get('/result',auth,getcourses,getmarks,async (req,res)=>{
    const coursesMarks = req.coursesMarks
    res.render('student_landing/Result.ejs',{coursesMarks:coursesMarks})
})
landing.get('/complain',auth,async (req,res)=>{
    res.render('student_landing/Complain.ejs')
})

landing.get('/schedule',auth,async (req,res)=>{
    res.render('student_landing/Schedule.ejs')
})

module.exports = landing