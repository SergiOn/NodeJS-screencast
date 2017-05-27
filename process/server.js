const http = require('http');

http.createServer((req, res) => {

    res.end('The server is running!');

}).listen(3000);

