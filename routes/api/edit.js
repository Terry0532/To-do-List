const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    db.todos.update({ content: req.body.content }, {
        where: { id: req.body.id }
    }).then(() => res.status(200).end()).catch(err => res.status(500).json(err));
});

module.exports = router;