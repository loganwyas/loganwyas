const fs = require('fs');
const http = require('http');

const server = http.createServer(function callback (request, response) {
    var filename = process.argv[3] + request.url;
    var readStream = fs.createReadStream(filename);
    readStream.on('open', function () {
        readStream.pipe(response);
    });
    readStream.on('error', function(err) {
        response.end(err);
    });
});

server.listen(process.argv[2]);