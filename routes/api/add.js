const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.body)
    db.todos.create({
        progress: 0,
        content: req.body.content
    }).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));
});

module.exports = router;