const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile('event-loop/index.html', (err, info) => {
            if(err) {
                console.error(err);
                res.statusCode = 500;
                res.end('server error');
                return;
            }

            res.end(info);
        });
    } else {
        // 404
    }
}).listen(3000);