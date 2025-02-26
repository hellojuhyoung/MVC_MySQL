const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// router.get("/", userController.userPage);
router.get("/detail/:id", userController.userDetailPage);
router.get("/edit/:id", userController.userEditPage);

router.put("/update", userController.updateUser);

router.delete("/delete/:id", userController.deleteUser);

router.post("/add", userController.addUser);

module.exports = router;
