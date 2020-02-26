const fs = require('fs');
const http = require('http');
const map = require('through2-map');

const server = http.createServer(function (request, response) {
    if (request.method === 'POST') {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(response)
    }
  });

server.listen(process.argv[2]);