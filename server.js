const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
require('dotenv').config()

// Routes
const indexRouter = require('./routes/indexRouter');
const blogRouter = require('./routes/blogRouter');
const apiRouter = require('./routes/apiRouter');
const newsRouter = require('./routes/newsRouter');

// Database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err);
    console.log('CONNECTED DATABASE');
})

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

// Maint mode
const maint = false;
if (maint) {
    app.get('*', (req, res) => {
        res.render('maint.ejs', { eta: '10 minutes' }); // Set ETA to false (no quotation marks) to disable the eta time, also make sure the first letter is lowercase
    })
}

// Initialize the routers
app.use('/', indexRouter);
app.use(['/blog', '/blogs'], blogRouter);
app.use('/news', newsRouter);
app.use('/api', apiRouter);

// Login and session stuff
app.use(session({
    cookie: { maxAge: 60000 },
    secret: process.env.SESSION_TOKEN,
    resave: false,
    saveUninitialized: false
}));

// 404 page
app.get('*', (req, res) => {
    res.render('404.ejs');
})

app.listen(3000, () => console.log('listening on port 3000'));