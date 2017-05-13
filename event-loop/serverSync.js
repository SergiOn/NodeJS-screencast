const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let info;

    if (req.url === '/') {

        try {
            info = fs.readFileSync('event-loop/index.html');
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('server error');
            return;
        }

        res.end(info);
    } else {
        // 404
    }
}).listen(3000);