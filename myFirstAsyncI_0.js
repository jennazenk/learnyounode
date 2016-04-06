var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {   
	var numberOfLines = data.split('\n');
	console.log(numberOfLines.length-1);
})
