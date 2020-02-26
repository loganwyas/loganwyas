const net = require('net');
const server = net.createServer(function listener(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (month < 10) {
        var month = "0" + month;
    }
    if (day < 10) {
        var day = "0" + day;
    }
    if (hours < 10) {
        var hours = "0" + hours;
    }

    var full = `${year}-${month}-${day} ${hours}:${minutes}\n`;
    socket.end(full);
})
server.listen(process.argv[2]);
