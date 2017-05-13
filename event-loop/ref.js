const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello');
}).listen(3000);


setTimeout(() => {
    server.close(() => {
        process.exit();
    });
}, 2500);

setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);
