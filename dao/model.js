// 可公用的
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/h51804");
// 用户模型
const User = mongoose.model("user",{
    username:String,
    password:String,
    email: String
});
// 职位模型
const Position = mongoose.model("position", {
    logo:String,
    posName:String,
    companyName: String,
    exp: String,
    city:String,
    salary: Number
});
module.exports = {User, Position};