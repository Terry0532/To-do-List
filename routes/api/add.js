const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    db.todos.create({
        progress: 0,
        content: req.body.content
    }).then(() => res.status(200).end()).catch(err => res.status(500).json(err));
});

module.exports = router;