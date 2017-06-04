const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const engine = require('ejs-mate');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const errorHandler = require('errorhandler');
const config = require('./config');
const port = config.get('port');
const log = require('./lib/log')(module);

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
    res.render('index');
});

const User = require('./models/user').User;
app.get('/users', function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) throw err;
        res.json(users);
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
    // NODE_ENV = 'production'
    if (app.get('env') === 'development') {
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});
