const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello');
}).listen(3000);


setTimeout(() => {
    server.close(() => {
        clearInterval(timer);
    });
}, 2500);

let timer = setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);
