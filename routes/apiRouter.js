const routes = require('express').Router();
const Datastore = require('nedb');
require('dotenv').config()

// Webhook
const webhook = require('webhook-discord');
const hook = new webhook.Webhook(process.env.WEBHOOKURL)

// Databases
var db = {};
db.posts = new Datastore({ filename: './databases/posts', autoload: true })
db.news = new Datastore({ filename: './databases/news', autoload: true })
db.posts.loadDatabase()
db.news.loadDatabase()

// Middleware
const auth = require('../middleware/auth');

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to DahliaOS\' API!'
    })
})

routes.post('/postBlog', auth, (req, res) => {
    const author = req.user.username,
        icon = req.user.icon,
        title = req.body.title,
        url = Math.random().toString(36).slice(2),
        body = req.body.body;
    var embedIcon = req.user.icon;
    if (embedIcon == '/assets/img/favicon.png') {
        var embedIcon = 'https://i.imgur.com/FPSUo7K.png'
    }
    db.posts.insert({ author, icon, title, body, url, postedAt: new Date().getTime() }, err => {
        if (err) return res.status(200).json({ message: 'an error occured!' })
        /*         hook.send(new webhook.MessageBuilder()
                    .setText('@everyone')
                    .setName('stupid rss bot')
                    .setTitle(title)
                    .setURL(`https://www.dahliaos/blog/${url}`)
                    .setColor('#ff3d00')
                    .setDescription(body.replace(/<[^>]*>?/gm, ''))
                    .setAuthor(author, embedIcon)
                    .setFooter('dahliaOS', 'https://i.imgur.com/FPSUo7K.png')
                    .setTime(Math.floor(Date.now() / 1000))
                ).catch(err => console.log(err)); */
        res.redirect(`/blog/${url}`)
    })
})

routes.patch('/editBlog', auth, (req, res) => {
    const author = req.body.author,
        title = req.body.title,
        body = req.body.body;
    res.status(200).json({
        message: `editing blog ${title} by ${author}`
    })
})

routes.delete('/deleteBlog', auth, (req, res) => {
    const blog = req.body.blog;
    db.posts.delete({ title: blog }, (err, blog) => {
        if (err) return res.json({
            message: `there was an error deleting the article ${blog}`
        })
        res.json({
            message: `successfully deleted blog ${blog}`
        })
    })
})

routes.get('/getBlog/:blogName', (req, res) => {
    const blogName = req.params.blogName
    db.posts.findOne({ title: blogName }, (err, blog) => {
        if (err) return err;
        if (blog !== null) {
            res.status(200).json({
                message: `You are getting the blog ${blog}`
            })
        } else {
            res.status(200).json({
                message: `We couldn't find that blog!`
            })
        }
    })
})

routes.get('/getTenBlogs', (req, res) => {
    db.posts.find({}).sort({ postedAt: -1 }).limit(10).exec((err, blogs) => {
        if (err) return res.json({ status: 'FAILED' })
        res.json({ blogs })
    })
})

routes.get('/getNews', (req, res) => {
    db.news.loadDatabase()
    db.news.find({}).sort({ postedAt: -1 }).limit(15).exec((err, news) => {
        if (err) return res.json({ status: 'FAILED' })
        res.json({ news })
    })
})

routes.get('/getBlogs', (req, res) => {
    db.posts.find({}, (err, blogs) => {
        if (err) res.json({ message: 'an error has occured!' })
        res.json({ blogs })
    })
})

module.exports = routes;