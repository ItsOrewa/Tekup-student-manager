var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )
app.use(express.static("public"));
const safe = 'mongodb://localhost:27017/DataBase'
const mongoURI = 'mongodb+srv://admin-amer:amer25515807@cluster0-iuzbm.mongodb.net/DataBase'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

  var Users = require('./routes/Users')
  var Landing = require('./routes/Landing');
  app.use('/users', Users);
  app.use('/',Landing);

  app.listen(port, function() {
    console.log('Server is running on port: ' + port)
  })