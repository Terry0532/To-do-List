const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.body);
    db.todos.update({ content: req.body.content }, {
        where: { id: req.body.id }
    }).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));
});

module.exports = router;