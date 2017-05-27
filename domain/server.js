const http = require('http');
const fs = require('fs');

function handler(req, res) {
    if (req.url === '/') {

        fs.readFile('domain/index5.html', (err, content) => {
            if (err) throw err;

            console.log('domain');
            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end('not found');
    }
}

const server = new http.createServer(handler);

module.exports = server;
