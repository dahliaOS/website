const routes = require("express").Router();
const { exec } = require("child_process");
const fetch = require("node-fetch");

// Middleware
const auth = require("../middleware/auth");
const notAuth = require("../middleware/notAuth");

// Routes
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const dashboardRouter = require("./dashboardRouter");

routes.get("/", (req, res) => {
  res.render("index.ejs");
});

routes.get(["/downloads", "/download"], (req, res) => {
  res.render("downloads.ejs");
});

routes.get(
  ["/download/latest/efi", "/downloads/latest/efi"],
  async (req, res) => {
    const fetchLatestDownload = await fetch(
      "https://api.github.com/repos/dahliaOS/releases/releases"
    );
    const getLatestDownload = await fetchLatestDownload.json();
    // Find the EFI build within the request
    for (const build of getLatestDownload[0].assets) {
      if (build.name.includes("-efi")) {
        res.redirect(build.browser_download_url);
        break; // Breaks here so if it is the first one, it doesnt query the next item
      }
    }
  }
);

routes.get("/donate", (req, res) => {
  res.render("donate.ejs");
});

routes.get("/faq", (req, res) => {
  res.render("faq.ejs");
});

routes.get("/knowledgebase", (req, res) => {
  res.render("knowledgebase.ejs");
});

routes.get(["/coc", "/conduct"], (req, res) => {
  res.render("coc.ejs");
});

routes.get("/fuchsia", (req, res) => {
  res.render("fuchsia.ejs");
});

routes.get("/support", (req, res) => {
  res.render("support.ejs");
});

// Login/register stuff with account stuff
routes.use("/login", notAuth, loginRouter);
routes.use("/register", auth, registerRouter);
routes.use("/dashboard", auth, dashboardRouter);
routes.get("/logout", (req, res) => {
  res.clearCookie("authentication");
  res.redirect("/login");
});

// Social media stuff
routes.get("/github", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "GitHub",
    URL: "https://github.com/dahliaOS",
  });
});

routes.get("/discord", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Discord",
    URL: "https://discord.gg/7qVbJHR",
  });
});

routes.get("/facebook", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Facebook",
    URL: "https://www.facebook.com/dahliaos.io/",
  });
});

routes.get("/instagram", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Instagram",
    URL: "https://instagram.com/dahliaos.io",
  });
});

routes.get("/reddit", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Reddit",
    URL: "https://www.reddit.com/r/DahliaOS/",
  });
});

routes.get("/telegram", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Telegram",
    URL: "https://t.me/dahliaos",
  });
});

routes.get("/twitter", (req, res) => {
  res.render("../views/templates/socialmedia.ejs", {
    socialName: "Twitter",
    URL: "https://www.twitter.com/dahliaos_io",
  });
});

routes.use("/whpd/" + (process.env.WHPD_SECRET || "dev"), (req, res) => {
  // "WebHook (to) Pull Docs"
  const cp = exec("cd docs && git pull && git checkout main");
  cp.on("close", (code, signal) => {
    res.send({ code: code });
  });
});

module.exports = routes;
