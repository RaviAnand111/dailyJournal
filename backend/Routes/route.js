const express = require("express");

const router = express.Router();
router.use(express.json());

const controller = require("../Controller/journal_controller");

router.get("/", controller.find);
router.post("/compose", controller.create);
router.delete("/delete", controller.delete);
router.put("/edit", controller.edit);

module.exports = router;
