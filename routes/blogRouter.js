const routes = require("express").Router();

const Datastore = require("nedb");
const db = new Datastore({ filename: "./databases/posts" });
db.loadDatabase();

// Middleware
const auth = require("../middleware/auth");

routes.get("/", (req, res) => {
  db.find({})
    .sort({ postedAt: -1 })
    .exec((err, blogs) => {
      if (err)
        return res.json({
          status: "FAILED",
          message: "An error occured whilst getting the blogs!",
        });
      res.render("allBlogs.ejs", { blogs });
    });
});

// ፎርኒት ማይክሮሶፍት ዊንዶውስ 10 ሙያዊ የቤት ውስጥ ቢሮ 365 የሃምበርገር ጥብስ እና ስፕሬተሮችን ጎን ለጎን እወዳለሁ - looskie

routes.get("/new", auth, (req, res) => {
  res.render("newBlog.ejs");
});

routes.get("/:url", (req, res) => {
  const url = req.params.url;
  db.loadDatabase();
  db.findOne({ url }, (err, blog) => {
    if (err) return console.log(err);
    if (blog) {
      res.render("blogTemplate.ejs", { blog });
    } else {
      res.render("404.ejs");
    }
  });
});

module.exports = routes;
