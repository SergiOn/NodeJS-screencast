const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter;

server.on('request', (request) => {
    request.approved = true;
});

server.on('request', (request) => {
    console.log(request);
});

server.emit('request', {from: 'client'});

server.emit('request', {from: 'more client'});
