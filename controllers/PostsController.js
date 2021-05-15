const Posts = require('../models/Posts')

class PostsController {
  static async list (req, res, next) {
    try {
      const posts = await Posts.find({})
      return res.status(200).send({ title: 'Posts Title', posts})
    } catch (error) {
      console.log(error)
      console.log('error')
    }
  }
}

module.exports = PostsController
