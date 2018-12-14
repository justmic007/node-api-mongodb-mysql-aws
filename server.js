// Setup ALL the code to spin up a node.js server

const http = require('http');
const app = require('./app');

// Setup the port with which the server should run

const port = process.env.PORT || 3000; // Setup nodejs environment variable

const server = http.createServer(app);

server.listen(port);
