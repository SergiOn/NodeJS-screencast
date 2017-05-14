const fs = require('fs');

const stream = new fs.ReadStream('streams/big.html');

stream.on('readable', () => {
    let data = stream.read();
    if (data) {
        console.log(data);
        console.log(data.length);
    }
});

stream.on('end', () => {
    console.log('THE END');
});

