//router.get url with just '/'

const express = require("express");
const router = express.Router();
const visitorController = require("../controller/visitorController");

router.get("/", visitorController.visitorPage);
router.get("/detail/:id", visitorController.visitorOne);
router.get("/write/:id", visitorController.moveWrite);

router.put("/update", visitorController.dataUpdate);

router.delete("/delete/:id", visitorController.deleteData);

router.post("/test/create", visitorController.createTest);
module.exports = router;
