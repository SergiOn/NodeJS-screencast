const EventEmitter = require('events').EventEmitter;

const db = new EventEmitter;

function Request() {
    this.bigData = new Array(1e6).join('*');

    this.send = (data) => {
        console.log(data);
    };

    db.on('data', (info) => {
        this.send(info);
    }); // db.emit
}

setInterval(() => {
    const request = new Request();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);