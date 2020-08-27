const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ClassSchema = new Schema({
  class_name:{
    type: String,
    required: true

  },
  courses :{
      first_semestre : [{type: mongoose.Schema.Types.ObjectId, ref: 'Course', autopopulate: true}],
      second_semestre : [{type: mongoose.Schema.Types.ObjectId, ref: 'Course', autopopulate: true}]
      
  }
})

module.exports = Class = mongoose.model('Class', ClassSchema)