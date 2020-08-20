const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    default: 'Not provided'
  },
  password: {
    type: String,
    required: true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Class', autopopulate: true,
    default : 'Not provided'
  }
})

module.exports = User = mongoose.model('User', UserSchema)