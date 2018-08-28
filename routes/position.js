var express = require('express');
var router = express.Router();
const path = require("path");
const positionService = require("../services/positionService");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/upload"));
    },
    filename: function(req, file, cb) {
        const ext = file.originalname.slice(file.originalname.lastIndexOf("."));
        cb(null, file.fieldname +"-" + Date.now() + ext);
    }
});
const upload = multer({storage});
// 添加职位
router.post("/add",upload.single("logo"), positionService.add);

module.exports = router;
