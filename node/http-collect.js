const http = require('http');
const concatStream = require('concat-stream');
http.get(process.argv[2], function callback (response) {
    response.setEncoding('utf8')
    response.on('error', console.error);
    response.pipe(concatStream(function (data) {
        console.log(data);
    }))
})
