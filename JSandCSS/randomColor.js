window.onload = function() {

	var colorButton = document.getElementById("change");
	var io = document.getElementById("color");
	var viewButton = document.getElementById("view");
	colorButton.onclick = function() {

		var color = document.getElementById("color");
		color.style.backgroundColor = randomColor();
	}
	viewButton.onclick = function() {
		return alert("Your color is: " + getStyle(io, "backgroundColor"));
	}

function randomColor() {
  var tmp_array = ['#'];
  for (var i = 0; i < 6; i++) {
    tmp_array += randInt(0, 16).toString(16); //concatenation a random number in the range of 0 to 15 and conversion to HEX-format
  }
  return tmp_array.toUpperCase(); //return uppercase color value
}

function randInt(min, max) { //return random integer in the range of min to max
  var rand = min + Math.random() * (max - min);
  rand = Math.floor(rand);
  return rand;
}

function getStyle(element, styleName) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(element, null)[styleName]
	}
}
}
