const express = require('express')
const routes = express.Router();
const marked = require('marked');
const fs = require('fs');

routes.use("/assets", express.static(`${__dirname}/../docs/assets`));

routes.get('/', (req, res) => {
    res.status(200).render("docs.ejs", {
        content: marked(fs.readFileSync(`${__dirname}/../docs/toc.md`, 'utf8'))
    });
})

routes.get('*', (req, res) => {
    const doc = req.params[0].replace('.md', '');
    try {
        const include = fs.readFileSync(`docs/${doc.substring(1)}.md`, 'utf-8');
        const content = marked(include); // Naming this content so we just have to type content once when we serve the page to them
        marked.setOptions({ gfm: true })
        res.render('docs.ejs', { content }); // Only need content once since the name is const is content too.
    } catch {
        res.render('501.ejs');
    }
})

module.exports = routes;