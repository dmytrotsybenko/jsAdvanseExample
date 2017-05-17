window.onload = function() {

	document.getElementById("openButton").onclick = openWindowButton;
	document.getElementById("closeButton").onclick = closeWindowButton;

	var newWindow = {};

	function openWindowButton() {

		newWindow = window.open("index.html", "Title", "width=600, height=600");
	}

	function closeWindowButton() {

		newWindow.close();
	}
}