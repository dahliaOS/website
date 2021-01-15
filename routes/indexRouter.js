const routes = require('express').Router();

// Middleware
const auth = require('../middleware/auth');
const notAuth = require('../middleware/notAuth');

// Routes
const docsRouter = require('./docsRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const dashboardRouter = require('./dashboardRouter');

routes.get('/', (req, res) => {
    res.render('index.ejs');
})

routes.get(['/downloads', '/download'], (req, res) => {
    res.render('downloads.ejs');
})

routes.get('/donate', (req, res) => {
    res.render('donate.ejs');
})

routes.get('/faq', (req, res) => {
    res.render('faq.ejs');
})

routes.get('/knowledgebase', (req, res) => {
    res.render('knowledgebase.ejs');
})

routes.get('/coc', (req, res) => {
    res.render('coc.ejs');
})

routes.get('/fuchsia', (req, res) => {
    res.render('fuchsia.ejs');
})

routes.get('/support', (req, res) => {
    res.render('support.ejs');
})

// Docs
routes.use('/docs', docsRouter);

// Login/register stuff with account stuff

routes.use('/login', notAuth, loginRouter);
routes.use('/register', auth, registerRouter);
routes.use('/dashboard', auth, dashboardRouter)

routes.get('/logout', (req, res) => {
    res.clearCookie('authentication');
    res.redirect('/login');
})

// Social media stuff

routes.get('/github', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'GitHub',
        URL: 'https://github.com/dahliaOS'
    })
})

routes.get('/discord', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Discord',
        URL: 'https://discord.gg/7qVbJHR'
    })
})

routes.get('/facebook', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Facebook',
        URL: 'https://www.facebook.com/dahliaos.io/'
    })
})

routes.get('/instagram', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Instagram',
        URL: 'https://instagram.com/dahliaos.io'
    })
})

routes.get('/reddit', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Reddit',
        URL: 'https://www.reddit.com/r/DahliaOS/'
    })
})

routes.get('/telegram', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Telegram',
        URL: 'https://t.me/dahliaos'
    })
})

routes.get('/twitter', (req, res) => {
    res.render('../views/templates/socialmedia.ejs', {
        socialName: 'Twitter',
        URL: 'https://www.twitter.com/dahliaos_io'
    })
})
module.exports = routes;