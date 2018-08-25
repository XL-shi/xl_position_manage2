const userDao = require("../dao/userDao");
const userService = {
    login(){

    },
    register(req, res, next){
        const {username, password, email} = req.body;
        userDao.save({username, password, email})
               .then((data)=>{
                //    res.json 里面自然就是一个json 格式 所以用 {}
                    res.json({res_code: 1, res_err: "", res_body: data});
               })
               .catch((err)=>{
                    res.json({res_code: -1, res_err: err, res_body: {}});
               });
    }   
}
module.exports = userService;