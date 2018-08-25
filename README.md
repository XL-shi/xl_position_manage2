# 拉勾网的职位管理系统2 

基于 nodejs express mongodb 实现的后台管理系统

项目实现前后端分离开发

前端的ui界面  静态资源放在 public 目录下

服务器端开发采用三层分层：表示层-业务逻辑层-数据访问层

    public 目录下为表示层
    services 目录下为业务逻辑层
    dao 目录下为数据访问层

服务器刷新：
    nodemon/supervisor
    
验证码：svg-captcha
    https://www.npmjs.com/package/svg-captcha

session：`express-session`
	https://www.npmjs.com/package/express-session

数据库连接：mongoose 连接 mongodb数据库
	https://www.npmjs.com/package/mongoose
	https://mongoosejs.com/
