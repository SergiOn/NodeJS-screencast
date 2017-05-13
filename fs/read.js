const fs = require('fs');

fs.readFile(__filename, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        // console.log(data.toString());
        console.log(data[0]);
        console.log(data[1]);
        console.log(data.length);
    }
});

fs.readFile('dsds', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log(err.message);
        } else {
            console.log(err);
        }
    } else {
        console.log(data);
    }
});