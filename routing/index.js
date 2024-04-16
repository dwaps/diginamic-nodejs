// @ts-check

const router = require("express").Router();
const gameRoutes = require("./game-api.routes");

router.use("/game", gameRoutes);

module.exports = router;
