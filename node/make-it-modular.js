const mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], function callback (err, data) {
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});