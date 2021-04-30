const router = require("express").Router();
const addtodos = require("./add");
const deletetodos = require("./delete");
const completetodos = require("./complete");
const editodos = require("./edit");

router.use("/add", addtodos);
router.use("/delete", deletetodos);
router.use("/complete", completetodos);
router.use("/edit", editodos);

module.exports = router;