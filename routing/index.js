// @ts-check

const router = require("express").Router();
const todosRoutes = require("./todos.routes");

router.use("/api/todos", todosRoutes);
router.all("*", (req, res) => res.redirect("/api/todos"));

module.exports = router;
