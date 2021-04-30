const router = require("express").Router();
const addtodos = require("./add");
const deletetodos = require("./delete");
const completetodos = require("./complete");
const editodos = require("./edit");
const alltodos = require("./all");
const clearalltodos = require("./clear");

router.use("/add", addtodos);
router.use("/delete", deletetodos);
router.use("/complete", completetodos);
router.use("/edit", editodos);
router.use("/all", alltodos);
router.use("/clear", clearalltodos);

module.exports = router;