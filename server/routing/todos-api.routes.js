// @ts-check

const {
  apiTodosCtrl: { findAll, findById, remove, save, update },
} = require("../controllers");
const { loadImage } = require("../middlewares");

const router = require("express").Router();

router.get("", findAll);
router.get("/:id", findById);
router.post("", loadImage, save);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;
