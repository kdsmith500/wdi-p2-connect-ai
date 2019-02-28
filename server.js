var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

// load the env vars
require('dotenv').config();

// require cors
var cors = require('cors');

// create the Express app
var app = express();

// connect MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var threadsRouter = require('./routes/threads');
// var usersApiRouter = require('./routes/api/users');
// var threadsApiRouter = require('./routes/api/threads');
// var repliesApiRouter = require('./routes/api/replies');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'WDIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', threadsRouter);
// app.use('/api', usersApiRouter);
// app.use('/api/users/:id', threadsApiRouter);
// app.use('/api/users/:id/threads', repliesApiRouter);

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
