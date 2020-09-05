const express = require('express')
const User = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { user } = require("../models");

User.use(cors())

process.env.SECRET_KEY = 'secret'

User.post('/logout',(req,res) => {
  res.clearCookie('token')
  res.redirect('/')
})

User.post('/login', (req, res) => {
  user.findOne({
    where : {email: req.body.username}
  })
    .then(user => {
      if (user) {
        console.log(user);
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          
          res.cookie('token', token);
          
          res.redirect('/home')
          
        } else {
          console.log('wrong password ??');
            res.redirect('/')
          
        }
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = User