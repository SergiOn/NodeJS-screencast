// http://localhost:1337/echo?message=

const http = require('http');
const url = require('url');

const server = new http.Server();

server.on('request', (req, res) => {
    const urlParse = url.parse(req.url, true);

    if (req.method === 'GET' && urlParse.pathname === '/echo' && urlParse.query.message) {
        res.end(urlParse.query.message);
        return;
    }

    res.statusCode = 404;
    res.end('Page not found');
});

server.listen(1337);