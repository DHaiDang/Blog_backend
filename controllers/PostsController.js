const Posts = require('../models/Posts')

class PostsController {
  static async list (req, res, next) {
    try {
      console.log("Hello post")
      const posts = await Posts.find({})
      console.log(posts)
      return res.status(200).send({ title: 'Posts Title', posts})
    } catch (error) {
      console.log(error)
      console.log('error')
    }
  }
}

module.exports = PostsController
