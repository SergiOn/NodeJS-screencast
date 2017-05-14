const http = require('http');
const fs = require('fs');

new http.Server((req, res) => {

    if (req.url === '/big.html') {
        let file = new fs.ReadStream('streams/big.html');
        sendFile(file, res);
    }

}).listen(3000);

function sendFile(file, res) {
    file.pipe(res);

    file.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server error');
        console.error(err);
    });

    file
        .on('open', () => {
            console.log('open');
        }).on('close', () => {
            console.log('close');
        });

    res.on('close', () => {
        file.destroy();
    });

    res.on('finish', () => {
        console.log('finish');
    });
}

