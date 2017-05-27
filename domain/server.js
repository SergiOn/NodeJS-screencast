const http = require('http');
const fs = require('fs');

function handler(req, res) {
    if (req.url === '/') {

        fs.readFile('domain/index.html', (err, content) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('server error');
                return;
            }

            console.log('domain');
            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end('not found');
    }
}

const server = new http.createServer(handler);
server.listen(3000);
