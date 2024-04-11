// @ts-check

const { findAll, findById, save, remove, update } = require("../controllers");

const router = require("express").Router();

router.get("", findAll);
router.get("/:id", findById);
router.post("", save);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;
