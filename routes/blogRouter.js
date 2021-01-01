const routes = require('express').Router();

// Databases
const Users = require('../models/Users');

const Datastore = require('nedb');
const db = new Datastore({ filename: './databases/posts' })
db.loadDatabase()

// Middleware 
const auth = require('../middleware/auth');

routes.get('/', (req, res) => {
    db.find({}).sort({ postedAt: -1 }).exec((err, blogs) => {
        if (err) console.log(err)
        res.render('allBlogs.ejs', { blogs })
    })
})

routes.get('/new', auth, (req, res) => {
    res.render('newBlog.ejs');
})

routes.get('/:url', (req, res) => {
    const url = req.params.url
    db.loadDatabase()
    db.findOne({ url }, (err, blog) => {
        if (err) return console.log(err);
        if (blog != null || blog != undefined) {
            res.render('blogTemplate.ejs', { blog })
        } else {
            res.render('404.ejs')
        }
    })
})



module.exports = routes;