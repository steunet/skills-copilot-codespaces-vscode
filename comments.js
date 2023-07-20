// Create web server
// Run: node comments.js

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    // Check the request url and send the appropriate file
    if (request.url === '/home' || request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    } else if (request.url === '/api/comments') {
        var comments = [
            { name: 'John', message: 'Hello there' },
            { name: 'Mary', message: 'Hi' },
            { name: 'Sally', message: 'How are you' }
        ];
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(comments));
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(3000, '!Server is listening on port 3000');