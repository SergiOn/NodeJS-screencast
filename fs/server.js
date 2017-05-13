const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const ROOT = path.resolve(__dirname, 'fs');

http.createServer((req, res) => {

    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end('Tell me the secret to access');
        return;
    }

    sendFileSafe(url.parse(req.url).pathname, res);

}).listen(3000);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret === 'o_O';
}

function sendFileSafe(filePath, res) {
    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        res.statusCode = 400;
        res.end('Bad request');
        return;
    }

    if (~filePath.indexOf('\0')) {
        res.statusCode = 400;
        res.end('Bad request');
        return;
    }

    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) !== 0) {
        res.statusCode = 404;
        res.end('File not found');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end('File not found');
            return;
        }

        sendFile(filePath, res);
    });
}

function sendFile(filePath, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) throw err;

        let mime = require('mime').lookup(filePath);
        res.setHeader('Content-type', `${mime}; charset=utf-8`);
        res.end(content);
    });
}