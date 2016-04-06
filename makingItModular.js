var mymodule = require('./myModule.js');
var dir = process.argv[2];
var filterExt = process.argv[3];

mymodule(dir, filterExt, function(err, list) {
	if(err) {
		return console.error('Err',err)
	}
	list.forEach(function(file) {
		console.log(file);
	})
})