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


module.exports = landing