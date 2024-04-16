// @ts-check

const router = require("express").Router();
const { getScoreCtrl, playCtrl, restartCtrl } = require("../controllers");
const { game } = require("../middlewares/game");

router.get("/score", getScoreCtrl);
router.get("/play/:action", game, playCtrl);
router.put("/score/:win/:lose/:tie", getScoreCtrl);
router.post("/score/restart", restartCtrl);

module.exports = router;
