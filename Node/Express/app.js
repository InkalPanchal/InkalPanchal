var createError = require('http-errors');
const Logger = require('./Middlewares/logger')
const requestTime = require('./Middlewares/requestTime')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// app.response.sendStatus = (statusCode, type, message)=>{
//   return this.contentType(type).status(statusCode).send(message);
// }
// app.get('/res', (req,res)=>{
//   res.sendStatus(404, 'application/json', '{"error":"resource not found"}');
// })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/new', (req,res)=>{
  res.render('new.ejs')
})
app.use(requestTime)
app.use('/', indexRouter);
app.use(Logger)
app.use('/users', usersRouter);

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
