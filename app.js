var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var captchaRouter = require("./routes/captcha");
const positionRouter = require("./routes/position");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// express-session
app.set("trust proxy", 1)
app.use(session({
    secret: "xiaoli",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 45*60*1000}
}));
// 判断用户是否登录
app.use(function(req, res, next){
    const {url} = req;
    if(url.indexOf("/position") !== -1){
      // 判断session中是否保存了用户信息
      const user = req.session.loginUser;
      if(!user){
        res.redirect("/");
        return false;
      }
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/captcha", captchaRouter);
app.use("/position",positionRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
