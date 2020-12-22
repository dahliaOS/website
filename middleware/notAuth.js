const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
    const token = req.cookies.authentication;

    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) return next();
        res.redirect('/');
    })
}