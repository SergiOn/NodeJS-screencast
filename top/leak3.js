const EventEmitter = require('events').EventEmitter;

const db = new EventEmitter;

function Request() {
    this.bigData = new Array(1e6).join('*');

    this.send = (data) => {
        console.log(data);
    };

    let onData = (info) => {
        this.send(info);
    };

    this.end = () => {
        db.removeListener('data', onData);
    };

    db.on('data', onData);
}

setInterval(() => {
    const request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);