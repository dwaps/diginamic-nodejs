// @ts-check

const router = require("express").Router();
const { getScoreCtrl, playCtrl, restartCtrl } = require("../controllers");
const { playGame, scoreOfGame } = require("../middlewares/game");

router.get("/score", scoreOfGame, getScoreCtrl);
router.get("/play/:action", playGame, playCtrl);
router.put("/score/:win/:lose/:tie", getScoreCtrl);
router.post("/restart", restartCtrl);

module.exports = router;
