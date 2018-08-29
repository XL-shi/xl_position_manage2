const userDao = require("../dao/userDao");
const bcrypt = require("bcrypt");
const userService = {
    login(req, res, next){
        const {username, password} = req.body;
        userDao.find({username})
               .then((data)=>{
                   if(data.length === 1){
                        const _password = data[0].password;
                        if(bcrypt.compareSync(password, _password)){
                            // 保存登录的用户名
                            req.session.loginUser = username;
                            res.json({res_code:1, res_err:"", res_body:data[0]});
                        }else {
                            res.json({res_code:0, res_err:"not-exist", res_body:{}});
                        }
                   }else {
                        res.json({res_code:0, res_err:"not-exist", res_body:{}});
                   }
               })
               .catch(err => {
                    res.json({res_code:-1, res_err:err, res_body:{}});
               }); 
    },
    loginout(req, res, next) {
        req.session.loginUser = null;
        res.json({res_code: 1, res_err: "", res_body:{status: true}});
    },
    register(req, res, next){
        const {username, password, email} = req.body;
        const passwordCry = bcrypt.hashSync(password, 10);
        userDao.save({username, password:passwordCry, email})
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