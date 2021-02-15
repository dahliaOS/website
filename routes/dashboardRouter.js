const routes = require("express").Router();

// Database
const Users = require("../models/Users");

routes.get("/", (req, res) => {
  if (req.user) {
    Users.findOne({ username: req.user.username }, (err, user) => {
      res.render("dashboard.ejs", { user });
    });
  }
});

// Account api
routes.post("/changePfP", (req, res) => {
  const username = req.user.username;
  const githubUser = req.body.pfp;
  const icon = `https://github.com/${githubUser}.png`;
  Users.findOneAndUpdate({ username }, { $set: { icon } }, (err, user) => {
    if (err) return console.log(err);
    res.redirect("/logout");
  });
});

module.exports = routes;
