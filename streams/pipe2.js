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
    file.pipe(process.stdout);
}

