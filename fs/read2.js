const fs = require('fs');

/*
fs.stat(__filename, (err, stats) => {
    console.log(stats.isFile());
    console.log(stats);
});
*/


fs.writeFile('file.tmp', 'data', (err) => {
    if (err) throw err;

    fs.rename('file.tmp', 'new.tmp', (err) => {
        if (err) throw err;

        fs.unlink('new.tmp', (err) => {
            if (err) throw err;
        });
    });
});
