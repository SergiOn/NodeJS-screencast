//  http://localhost:1337/echo?message=hello

const http = require('http');
const url = require('url');

const server = new http.Server((req, res) => {
    console.log(req.method, req.url);

    const urlParse = url.parse(req.url);
    console.log(urlParse);

    res.end();
});

server.listen(1337, '127.0.0.1');