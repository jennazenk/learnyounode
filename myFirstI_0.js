var fs = require('fs');

var file = process.argv[2];
numberOfLines = 0;
var buf = fs.readFileSync(file);
var str = buf.toString();

console.log(str.split('\n').length-1);