const fs = require('fs');

fs.open(__filename, 'r', (err, file) => {
    console.log('io');
});

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});
