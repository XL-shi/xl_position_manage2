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
    },
    // 分页查询
    listByPage(req, res, next){
        let {page} = req.query;
        page = page || 1;
        positionDao.count()
                    .then((countsData)=>{ //countsdata 数据总条数
                        positionDao.findByPage(page)
                                    .then((pageData)=>{ //pageData 每页的数据
                                        const totalPages = Math.ceil(countsData / 5 );
                                        res.json({res_code: 1, res_err: "", res_body: {data:pageData, count: countsData, totalPages}});
                                    })
                                    .catch(err=>{
                                        res.json({res_code:-1, res_err: err, res_body:{}});
                                    });
                    })                  
                    .catch(err=>{
                        res.json({res_code:-1, res_err: err, res_body:{}});
                    });
    }
};
module.exports = positionService;