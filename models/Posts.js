const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  publish: {
    type: Date,
    required: 'Please fill From Date'
  },
  image: String,
}, { timestamps: true })

// PostsSchema.statics.protectedFields = [
//   '_id',
//   '__v'
// ]

const Posts = mongoose.model('Posts', PostsSchema)

module.exports = Posts
