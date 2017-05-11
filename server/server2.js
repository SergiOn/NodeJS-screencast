//  http://localhost:1337/echo?message=hello

const http = require('http');
const url = require('url');

const server = new http.Server((req, res) => {

    console.log( req.headers );

    console.log(req.method, req.url);

    const urlParse = url.parse(req.url, true);
    console.log(urlParse);

    if (urlParse.pathname === '/echo' && urlParse.query.message === 'hello') {
        res.setHeader('Cache-control', 'no-cache');
        res.statusCode = 200; // OK
        res.end( urlParse.query.message );
    } else {
        res.statusCode = 404; // Not Found
        res.end('Page not found');
    }
});

server.listen(1337, '127.0.0.1');