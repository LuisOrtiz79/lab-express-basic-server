const express = require("express");
const router = express.Router();

const projects = require("../data/projects.json");
const articles = require("../data/articles.json")

router.get("/projects", (req, res, next) => {
    res.json(projects);
});

router.get("/articles", (req, res, next) => {
    res.json(articles);
});

module.exports = router;