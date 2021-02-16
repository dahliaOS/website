const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware
const throwError = require("../utilities/showUserError");

routes.get("/", (req, res) => {
  res.render("login.ejs", { error: false });
});

routes.post("/", (req, res) => {
  Users.findOne({ username: req.body.username }, async (err, user) => {
    if (err)
      return throwError(
        res,
        "login.ejs",
        "A server error has occured whilst logging you in!"
      );
    if (!user) return throwError(res, "login.ejs", "That user does not exist!");
    const userToToken = {
      id: user._id,
      username: user.username,
      icon: user.icon,
    };
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign(userToToken, process.env.JWT_TOKEN, {
          expiresIn: "1d",
        });
        res.cookie("authentication", token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        });
        res.redirect("./");
      } else {
        throwError(res, "login.ejs", "Incorrect password!");
      }
    } catch (err) {
      throwError(
        req,
        "login.ejs",
        "A server error happened whilst logging you in!"
      );
    }
  });
});
module.exports = routes;
