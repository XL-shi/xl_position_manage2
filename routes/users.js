var express = require('express');
var router = express.Router();
const userService = require("../services/userService");

// 用户登录
router.post("/login", function(req, res, next) {
  res.send("用户登录处理");
});
// 用户注册
router.post("/register", userService.register);

module.exports = router;
