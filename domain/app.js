const domain = require('domain');
const serverDomain = domain.create();

let server;

serverDomain.on('error', (err) => {
    console.error('domain intercepted %s', err);
});

serverDomain.run(() => {
    const http = require('http');
    const handler = require('./handler');

    server = new http.createServer((req, res) => {
        const reqDomain = domain.create();
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', (err) => {
            res.statusCode = 500;
            res.end(`sorry, ${err}`);

            serverDomain.emit('error', err);
        });

        reqDomain.run(() => {
            handler(req, res);
        });
    });

    server.listen(3000);
});





