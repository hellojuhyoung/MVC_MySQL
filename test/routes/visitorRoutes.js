const express = require("express");
const router = express.Router();
const visitorController = require("../controllers/visitorController");

router.get("/", visitorController.visitorPage);
router.get("/detail/:id", visitorController.visitorOne);
router.get("/write/:id", visitorController.moveWrite);

router.put("/update", visitorController.dataUpdate);

router.delete("/delete/:id", visitorController.deleteData);

router.post("/post/test", visitorController.createTest);

module.exports = router;
