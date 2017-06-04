const express = require('express');
const router = express.Router();
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
const HttpError = require('./error').HttpError;

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

app.use(require('./middleware/sendHttpError'));

app.use(router);

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
    if (typeof err === 'number') { // next(404);
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        if (app.get('env') === 'development') {
            errorHandler()(err, req, res, next);
        } else {
            log.error(err);
            err = new HttpError(500);
            res.sendHttpError(err);
        }
    }
});
