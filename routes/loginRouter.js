const routes = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
require('dotenv').config()

routes.get('/', (req, res) => {
    res.render('login.ejs', { error: false });
})

routes.post('/', (req, res) => {
    Users.findOne({ username: req.body.username }, async (err, user) => {
        if (err) return res.render('login.ejs', { error: 'A server error happened whilst logging you in!' });;
        if (user === null) {
            res.render('login.ejs', { error: 'That user does not exist!' });
        }
        const userToToken = {
            id: user._id,
            username: user.username,
            icon: user.icon
        }
        try {
            if (await bcrypt.compare(req.body.password, user.password)) {
                const token = jwt.sign(userToToken, process.env.JWT_TOKEN, { expiresIn: '1d' })
                res.cookie('authentication', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
                res.redirect('./');
            } else {
                res.render('login.ejs', { error: 'Incorrect password!' });
            }
        } catch (err) {
            res.render('login.ejs', { error: 'A server error happened whilst logging you in!' });
        }
    })
})
module.exports = routes;