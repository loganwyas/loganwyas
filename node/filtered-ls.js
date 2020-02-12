const fs = require('fs');
const path = require('path');
let read = fs.readdir(process.argv[2], function callback (err, data) {
    if (err) {
        return err;
    }
    let extention = "." + process.argv[3];
    for (i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === extention)
        {
            console.log(data[i]);
        }
    }
    
});