window.onload = function() {

	var browserData = "Your browser data:";

	for (var propname in navigator) {
		browserData += propname + ":" + navigator[propname] + "\n";
	}
	alert(browserData);
}