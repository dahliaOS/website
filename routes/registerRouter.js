const routes = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

routes.get('/', (req, res) => {
    res.render('register.ejs', { error: false });
})

routes.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    Users.findOne({ username: username }, async (err, user) => {
        if (!user) {
            if (username.length != 0) {
                if (password.length >= 14) {
                    if (password === confirmPassword) {
                        const hashedPass = await bcrypt.hash(password, 13);
                        const newUser = new Users({
                            username: username,
                            icon: '/assets/img/favicon.png',
                            password: hashedPass,
                        })
                        newUser.save()
                            .then(() => {
                                res.redirect('/login')
                            })
                            .catch(err => console.log(err));
                    } else {
                        res.render('register.ejs', { error: 'Passwords do not match!' });
                    }
                } else {
                    res.render('register.ejs', { error: 'Passwords are not long enough!' });
                }
            } else {
                res.render('register.ejs', { error: 'Please enter a username!' });
            }
        } else {
            res.render('register.ejs', { error: 'User already exists!' });
        }
    })
})

module.exports = routes;