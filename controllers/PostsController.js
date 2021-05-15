const Posts = require('../models/Posts')

class PostsController {
  static async list (req, res, next) {
    try {
      console.log("Hello post")
      const posts = await Posts.find({})
      console.log("Hello post")
      return res.send('index', { title: 'Posts Title'})
    } catch (error) {
      console.log(error)
      console.log('error')
    }
  }
}

module.exports = PostsController
