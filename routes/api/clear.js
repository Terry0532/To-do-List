const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    db.todos.destroy({
        where: { progress: 1 }
    }).then(() => res.status(200).end()).catch(err => res.status(500).json(err));
});

module.exports = router;