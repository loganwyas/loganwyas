const fs = require('fs');
const path = require('path');
let read = fs.readdir(process.argv[2], function callback (err, data) {
    if (err) {
        return err;
    }
    extentions = [];
    for (i = 0; i < data.length; i++) {
        extention = path.extname(data[i]);
        if (extentions != []) {
            for (y = 0; y < extentions.length; y++) {
                for (x = 0; x < data.length; x++) {
                    if (path.extname(data[x]) === extention) {
                        
                    }
                }        
            }
        }
        else {
            extentions += extention;
        }
        
        }
    }
);

module.exports = read();
