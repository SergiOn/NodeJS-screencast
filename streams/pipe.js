const http = require('http');
const fs = require('fs');

new http.Server((req, res) => {

    if (req.url === '/big.html') {
        let file = new fs.ReadStream('streams/big.html');
        sendFile(file, res);
    }

}).listen(3000);

function sendFile(file, res) {
    file.on('readable', write);

    function write() {
        let fileContent = file.read();

        if (fileContent && !res.write(fileContent)) {
            file.removeListener('readable', write);

            res.once('drain', () => {
                file.on('readable', write);
                write();
            });
        }
    }
    file.on('end', () => {
        res.end();
    });
}

