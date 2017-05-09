const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter;

server.on('error', (err) => {
    //
});

server.emit('error', new Error('server error'));
