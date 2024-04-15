// @ts-check

const router = require("express").Router();
const {
  appCtrl: { homePage, todosPage },
} = require("../controllers");
const { loadImage, flashMessage } = require("../middlewares");

router.get("", homePage);
router.get("/todos", flashMessage, todosPage);
router.post("/todos", loadImage, flashMessage, todosPage);

module.exports = router;
