const express = require('express')
const router = express.Router()
const middlewares = require('../middlewares')

const PostsController = require('../controllers/PostsController')

router.get('/', PostsController.list)
//router.get('/', middlewares.isAuthenticated, ProductController.index)

module.exports = router
