const routes = require('express').Router();

// Databases
const Users = require('../models/Users');

const Datastore = require('nedb');
const db = new Datastore({ filename: './databases/posts' })

// Middleware 
const auth = require('../middleware/auth');

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'hello there! you are onn the blog router!'
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