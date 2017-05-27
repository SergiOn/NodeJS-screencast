const http = require('http');
const opts = require('optimist').argv;

http.createServer((req, res) => {

    // console.log(process.argv);
    // console.log(opts);
    // console.log(process.env);  // process.env.NODE_ENV

    res.end('The server is running!');

}).listen(opts.port);

