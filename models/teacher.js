const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Teacher Schema
const TeacherSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
      type : String,
      default : 'Not provided'
  },
  score:{
      type : Number,
      default : 0
  }
})

module.exports = Teacher = mongoose.model('Teacher', TeacherSchema)