const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const engine = require('ejs-mate');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');
const port = config.get('port');
const log = require('./libs/log')(module);

const app = express();

app.set('port', port);

http.createServer(app).listen(port, () => {
    log.info('Express server listening on port', port);
});

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (app.get('env') === 'development') {
    app.use(logger('dev'));
} else {
    app.use(logger('default'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session());

app.get('/', (req, res, next) => {
    res.render('index', {
        title: '<b>Hello</b>'
    });
});

app.use(express.static(path.join(__dirname, 'public')));

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
var index = require('./routes/index');
var users = require('./routes/users');


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
*/