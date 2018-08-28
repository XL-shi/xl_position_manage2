// 用户数据访问的相关对象
const {User} = require("./model");
const UserDao = {
    save(userinfo){ 
        const user = new User(userinfo);
        return user.save();  //返回的是一个 promise 对象
    },
    find(userinfo){
        return User.find(userinfo);
    },
    update(){},
    delete(){}
};
module.exports = UserDao;