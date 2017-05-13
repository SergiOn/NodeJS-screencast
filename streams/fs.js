const fs = require('fs');

const stream = new fs.ReadStream(__filename);

stream.on('readable', () => {
    let data = stream.read();
    console.log(data);
});

stream.on('end', () => {
    console.log('THE END');
});

