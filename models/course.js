const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Course Schema
const CourseSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  teacher : {
    type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', autopopulate: true
  },
  class:{
    type: mongoose.Schema.Types.ObjectId, ref: 'Class', autopopulate: true
  }
})

module.exports = Course = mongoose.model('Course', CourseSchema)