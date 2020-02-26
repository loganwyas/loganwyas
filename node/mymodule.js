const fs = require('fs');
const path = require('path');
module.exports = function (dir, filter, callback) {
    fs.readdir(dir, function test(err, data) {
        if (err) {
            return callback(err);
        }
        var extension = "." + filter;
        var fileList = [];
        data.forEach((file) => {
            if (extension === path.extname(file)) {
                fileList.push(file);
            }
        });

        callback(null, fileList);
    });
}
