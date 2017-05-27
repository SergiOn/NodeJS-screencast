const  domain = require('domain');
const serverDomain = domain.create();

const server = require('./server');

serverDomain.on('error', (err) => {
    console.error('domain intercepted %s', err);
});

serverDomain.run(() => {
    server.listen(3000);
});