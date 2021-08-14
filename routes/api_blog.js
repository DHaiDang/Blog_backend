const express = require('express')
const router = express.Router()
const middlewares = require('../middlewares')

const api_blog_controller = require('../controllers/api_blog_controller')

router.get('/', api_blog_controller.form)

router.get('/list', api_blog_controller.list)
router.post('/post', api_blog_controller.post)


//router.get('/', middlewares.isAuthenticated, ProductController.index)

module.exports = router
