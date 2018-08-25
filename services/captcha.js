const svgCaptcha = require('svg-captcha');
const Captcha = {
    genCaptcha(req, res, next){
        var captcha = svgCaptcha.createMathExpr({color:true, background:"#ccc", noise:5});
        req.session.captcha = captcha.text;
        res.type("html");
        res.status(200).send(captcha.data);
    },
    verifyCaptcha(req, res, next){
        const {code} = req.query;
        if(code.toUpperCase() === req.session.captcha.toUpperCase()){
            res.json({res_code: 1, res_error: "", res_body:{valid:true}});
        }else{
            res.json({res_code: -1, res_error: "", res_body:{valid:false}});
        }
    }
};
module.exports = Captcha;