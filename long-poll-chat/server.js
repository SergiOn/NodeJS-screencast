const http = require('http');
const fs = require('fs');
const chat = require('./chat');

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            sendFile('long-poll-chat/index.html', res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            chat.publish();
            break;

        default:
            res.statusCode = 404;
            res.end("Not found");
    }


}).listen(3000);


function sendFile(fileName, res) {
    const fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}