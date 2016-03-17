var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sess=require('express-session');

var users = require('./app/routes/users');
var recruiters = require('./app/routes/recruiters');
var tests= require('./app/routes/tests');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sess({secret: 'iT s A secRet DonT tELl AnY0ne'}));

app.use('/', users);
app.use('/recruiters',recruiters);
app.use('/tests',tests);
app.use('/tests/test2',tests);
app.use('/tests/test3',tests);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('caca');
  res.render('users/index');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbb', function(err) {
  if (err) { throw err; }
}); 

module.exports = app;
