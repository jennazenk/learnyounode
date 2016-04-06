
var tot=0;
for(var i=2 ; i<process.argv.length ; i++) {
	tot+= +process.argv[i];
}

console.log(tot);