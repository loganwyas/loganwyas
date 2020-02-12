const fs = require('fs');
let read = fs.readFileSync(process.argv[2]);
let string = read.toString();
let split = string.split("\n")

console.log(split.length - 1);