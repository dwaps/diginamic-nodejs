// @ts-check

const router = require("express").Router();
const todosRoutes = require("./todos-api.routes");
const appRoutes = require("./app.routes");

router.use(appRoutes);
router.use("/api/todos", todosRoutes);
router.all("*", (req, res) => res.redirect("/api/todos"));

module.exports = router;
