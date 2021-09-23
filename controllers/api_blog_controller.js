const Posts = require('../models/Posts')

class api_blog_posts {
    static async index (req, res, next) {
        console.log("Index")
        try {
            const posts = await Posts.find({})
            return res.render('index.ejs',{
                data : posts
            })
        } catch (error) {
            return res.status(200).send({ Message: 'Error', error})
        }
    }
    static create (req, res, next) {
        res.render('create.ejs')
    }
    static async update (req, res, next) {
        let id = req.query.id
        try {
            let posts_update = await Posts.find({}).where("_id").equals(id)
            console.log(posts_update)
            console.log(req.body.id)
            return res.render('update.ejs', {
                data : posts_update
            })
        } catch (error) {
            console.log(error)
            return res.status(200).send({ Message: 'Error', error})
        }
    }
    static async uploadfile (req, res, next) {
        var form = new formidable.IncomingForm();
        form.multiples = true;
        form.uploadDir = path.basename(path.dirname('/uploads/json_files/'))
        form.on('file', function(field, file) {
          fs.rename(file.path, path.join(form.uploadDir, file.name), function(err){
              if (err) throw err;
              const file_path = '/uploads/'+file.name
          });
        });
        form.on('error', function(err) {
            console.log('An error has occured: \n' + err);
        });
        form.on('end', function() {
             res.statusMessage = "Process cashabck initiated";
             res.statusCode = 200;
             res.redirect('/')
             res.end()
        });
        form.parse(req);
    }
    static async update_post (req, res, next) {
        console.log("update post" + req.body.id)
        let posts = {
            title: req.body.title,
            summary: req.body.summary,
            category:req.body.category,
            author: req.body.author,
            content:req.body.content,
            publish: Date.now(),
            image:req.body.summary,
        }
        await Posts.findOneAndUpdate(req.body.id, posts, {upsert: true}, function(err, doc) {
            if (err){
                return res.status(200).send({ Message: 'Error', error})
            }
            return res.redirect('/api')
        });
    }
    static async delete (req, res, next) {
        let id = req.body.id
        console.log(req.body.id)
        await Posts.deleteOne({ _id: id}, function (err) {
            if (err) {
                return res.status(200).send({ Message: 'Error', error})
            }
            res.redirect('/api')
          });
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
    static async create_new_post (req, res, next) {
        try {
            let posts = {
                title: req.body.title,
                summary: req.body.summary,
                category:req.body.category,
                author: req.body.author,
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
                    return res.redirect('/api')
                    //return res.status(200).send({ Message: 'Success'})
                }
            })
        } catch (error) {
            console.log(error)
            return res.status(200).send({ Message: 'Error', error})
        }
    }
}

module.exports = api_blog_posts
