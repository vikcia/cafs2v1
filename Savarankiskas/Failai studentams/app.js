// https://nodejs.org/api/http.html

const fs = require('node:fs');
const http = require('node:http');

// http.createServer(async function(request, response) {
//     console.log(request.url);
//
//     const content = fs.readFileSync('./index.html');
//
//     response.writeHead(200, {'Content-Type': 'text/html'});
//
//     response.write(content);
//
//     response.end();
// }).listen(3000, '127.0.0.1');
// function mainIndex() {
//         const readIndex = fs.readFileSync('./index.html');
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('./index.html');
//         response.end();
//     }
// }
// https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server

let server = http.createServer(async function(request, response) {
    if (request.url == '/') {
        const readIndex = fs.readFileSync('./index.html');
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(readIndex);
        response.end();
    }
    else if (request.url == "/script.js") {
        const readSample = fs.readFileSync('./script.js');
        response.writeHead(200, { 'Content-Type': 'text/javascript' });
        response.write(readSample);
        response.end();
    }
    else if (request.url == "/sample") {
        const readSample = fs.readFileSync('./sample.txt');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(readSample);
        response.end();
    }
    else if (request.url == "/user") {
        const readUser = fs.readFileSync('./user.json');
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(readUser);
        response.end();

    }
    else if (request.url == "/users") {
        const readUsers = fs.readFileSync('./users.json');
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(readUsers);
        response.end();
    }
    else
        response.end('Invalid Request!');

}).listen(3000, '127.0.0.1');

console.log('Node.js web server at port 3000 is running..')