const http = require('http');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Response from ${HOSTNAME}, Port: ${PORT}\n`);
}).listen(PORT);



