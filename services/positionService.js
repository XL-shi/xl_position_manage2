const positionDao = require("../dao/positionDao");
const positionService = {
    add(req, res, next){
        const {posName, companyName, exp, city, salary} = req.body;
        let logo = "";
        if(req.file){
            logo = req.file.filename;
        }
        positionDao.save({logo, posName, companyName, exp, city, salary})
                    .then(data=>{
                        res.json({res_code:1, res_err:"", res_body:data});
                    })
                    .catch(err=>{
                        res.json({res_code:-1, res_err:err, res_body:{}});
                    });
    }
};
module.exports = positionService;