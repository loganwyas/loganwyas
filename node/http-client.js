const http = require('http');
var prints = [];
var inList = false
http.get(process.argv[2], function callback (response) {
    response.setEncoding("utf8");
    response.on('data', function (data) {
        for (i = 0; i < data.length; i++) {
            inList = false
            if (prints === []) {
                console.log(data);
                prints.push(data);
            }
            else {
                for (x = 0; x < prints.length; x++) {
                    if (data === prints[x]) {
                        inList = true;
                    }
                }
                if (inList === false) {
                    console.log(data);
                    prints.push(data);
                }
            }
        }
    })
})