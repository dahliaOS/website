const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.cookies.authentication;
  if (token == null) return res.redirect("/login");

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.json({ message: "Your token is expired or not valid" });
    req.user = user;
    next();
  });
};
