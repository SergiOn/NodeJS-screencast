const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter;

server.emit('error');
