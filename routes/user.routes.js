const router = require("express").Router();
const authController = require("../constrollers/auth.controller");

router.post("/register", authController.signUp);

module.exports = router;
