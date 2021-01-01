const routes = require('express').Router();

// Databases
const Datastore = require('nedb');
const db = new Datastore({ filename: './databases/news' })
db.loadDatabase();

// Middleware
const auth = require('../middleware/auth');

routes.get('/', (req, res) => {
    res.redirect('/');
})

routes.get('/new', auth, (req, res) => {
    res.render('newNews.ejs');
})

routes.post('/postNews', auth, (req, res) => {
    const title = req.body.title,
        body = req.body.body,
        postedAt = new Date().getTime(),
        buttonName = req.body.buttonName,
        buttonURL = req.body.buttonURL;
    db.insert({ title, body, postedAt, buttonName, buttonURL }, (err, news) => {
        if (err) return console.log(err);
        res.redirect('/');
    })
})

module.exports = routes;