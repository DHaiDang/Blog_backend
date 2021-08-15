const express = require('express')
const router = express.Router()
const middlewares = require('../middlewares')

const api_blog_controller = require('../controllers/api_blog_controller')

router.get('/', api_blog_controller.index)

//get
router.get('/create', api_blog_controller.create)
router.get('/update', api_blog_controller.update)

//post
router.post('/create', api_blog_controller.create_new_post)
router.post('/update', api_blog_controller.update)
router.post('/delete', api_blog_controller.delete)

//api
router.get('/list', api_blog_controller.list)


//router.get('/', middlewares.isAuthenticated, ProductController.index)

module.exports = router
