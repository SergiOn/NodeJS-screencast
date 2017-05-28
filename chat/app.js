const express = require('express');
const http = require('http');
const path = require('path');
const config = require('./config');
const port = config.get('port');

const app = express();

app.set('port', port);

http.createServer(app).listen(port, () => {
    console.log('Express server listening on port ' + port);
});

app.use((req, res, next) => {
    if (req.url === '/') {
        res.end('hello');
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url === '/forbidden') {
        next(new Error("wops, denied"));
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url === '/test') {
        res.end('test');
    } else {
        next();
    }
});

app.use((req, res) => {
    res.status(404).send('Page Not Found Sorry');
});

app.use((err, req, res, next) => {
    // NODE_ENV = 'production'
    if (app.get('env') === 'development') {
        let errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});

/*
var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

*/