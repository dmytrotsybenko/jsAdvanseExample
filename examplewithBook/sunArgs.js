function sumArgs() {
	arguments.reduce = [].reduce;
	var sum = arguments.reduce(function(a, b) {
		return a + b;
	});
	document.write(sum + "<br />")
}

function sumArgsWithCall() {
	var sum = [].reduce.call(arguments, function(a, b) {
		return a + b;
	});
	document.write(sum);
}

sumArgs(1,1,1,1,1,1);
sumArgsWithCall(1,1,1,1,1);