const db = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.body);
    db.todos.destroy({
        where: { progress: 1 }
    }).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));
});

module.exports = router;