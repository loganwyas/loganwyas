const fs = require('fs');
let read = fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
    if (err) {
        return err;
    }
    let string = data.toString();
    let split = string.split("\n");
    console.log(split.length - 1);
});


