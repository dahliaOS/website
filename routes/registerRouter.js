const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/Users");

// Middleware
const throwError = require("../utilities/showUserError");

routes.get("/", (req, res) => {
  res.render("register.ejs", { error: false });
});

routes.post("/", (req, res) => {
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
              icon: "/assets/img/favicon.png",
              password: hashedPass,
            });
            newUser
              .save()
              .then(() => {
                res.redirect("/login");
              })
              .catch((err) => console.log(err));
          } else {
            throwError(res, "register.ejs", "Passwords do not match!", res);
          }
        } else {
          throwError(res, "register.ejs", "Passwords are not long enough!!");
        }
      } else {
        throwError(res, "register.ejs", "Please enter a username!!");
      }
    } else {
      throwError(res, "register.ejs", "User already exists!");
    }
  });
});

module.exports = routes;
