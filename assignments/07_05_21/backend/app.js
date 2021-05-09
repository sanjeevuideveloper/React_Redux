var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentsRouter);
console.log('App Started');
// import mongoose function from mongoose library
var mongoose = require('mongoose');
//this is the url which is used by monogoose to connect to mongodb  database called zenrays
var mongoConnUrl = 'mongodb://localhost:27017/zenrays';
//this linke connects to the mongo database using the connection string . 
mongoose.connect(mongoConnUrl,{useNewUrlParser:true, useUnifiedTopology: true});

//the db is called connection string.
// with this connection string we can talk to mongo database using mongoose
var db = mongoose.connection;
//this line runs the function if there is any error in connecting to the mongodb by mongoose. 

db.on('error',function(){
  console.log("Error came in connecting");
});
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
