const Posts = require('../models/Posts')

class api_blog_posts {
    static form (req, res, next) {
        console.log("Hello")
        res.render('posts.ejs')
    }
    static async list (req, res, next) {
        async function query_posts(by, query) {
            console.log("find " + by + ": " + query)
            try {
                const posts = await Posts.find({}).where(by).equals(query)
                return res.status(200).send({ Message: 'Success', posts})
            } catch (error) {
                console.log(error)
                return res.status(200).send({ Message: 'Error', error})
            }
        }
        let query_by = Object.keys(req.query)[0]
        if (query_by){
            await query_posts(query_by, req.query[query_by])
        }
        else {
            console.log("all list")
            try {
                const posts = await Posts.find({})
                return res.status(200).send({ Message: 'Success', posts})
            } catch (error) {
                console.log(error)
                return res.status(200).send({ Message: 'Error', error})
            }
        } 
    }
    static async post (req, res, next) {
        try {
            let posts = {
                title: req.body.title,
                summary: req.body.summary,
                category:req.body.category,
                content:req.body.content,
                publish: Date.now(),
                image:req.body.summary,
            }
            console.log("Content" + posts.content)
            // if (posts.title)
            if (!posts.title | !posts.summary | !posts.image | !posts.content) {
                return res.status(200).send({ Message: 'Fill all input'})
            }
            console.log(posts)
            Posts.create(posts, function(err, doc){
                if(err) {
                    return err
                }
                else {
                    return res.status(200).send({ Message: 'Success'})
                }
            })
        } catch (error) {
            console.log(error)
            return res.status(200).send({ Message: 'Error', error})
        }
    }
}

module.exports = api_blog_posts
