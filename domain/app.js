const  domain = require('domain');
const serverDomain = domain.create();

serverDomain.on('error', (err) => {
    console.error('domain intercepted %s', err);
});

serverDomain.run(() => {
    const server = require('./server');

    server.listen(3000);
});