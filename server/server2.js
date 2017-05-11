const http = require('http');

const server = new http.Server((req, res) => {
    console.log(req.method, req.url);
});

server.listen(1337, '127.0.0.1');