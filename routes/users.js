var express = require('express');
var router = express.Router();
const userService = require("../services/userService");

// 用户登录
router.post("/login", userService.login);
router.get("/loginout", userService.loginout);

// 用户注册
router.post("/register", userService.register);
module.exports = router;
