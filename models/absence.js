const mongoose = require('mongoose')
const Schema = mongoose.Schema

const   AbsenceSchema = new Schema({
    Idstudent:{
      type:  mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true
    },
    CourseId:{
        type : mongoose.Schema.Types.ObjectId, ref: 'Course', autopopulate: true
    },

    AbsenceHours:{
        type : Number,
        default : 0
    }
  })

  
  module.exports = Absence = mongoose.model('Absence', AbsenceSchema) 