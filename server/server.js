const http = require('http');

const server = new http.Server(); // Event Emitter
// http.Server -> net.Server -> EventEmitter

server.listen(1337, '127.0.0.1');

let counter = 0;

const emit = server.emit;
server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', (req, res) => {
    res.end(`Hello, world! ${++counter}`);
});
// Keep-Alive