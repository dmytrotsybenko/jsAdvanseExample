window.onload = function() {

	var Geometry = {};

	if (window.screenLeft || window.screenLeft == 0) {
		Geometry.getWindowX = function() {
			return window.screenLeft;
		},

		Geometry.getWindowY = function() {
			return window.screenTop;
		}
	}
	else if (window.screenX || window.screenX == 0) {
		Geometry.getWindowX = function() {
			return window.screenX;
		}, 

		Geometry.getWindowY = function() {
			return window.screenY;
		}
	}

	if ( window.innerWidth) {
		Geometry.getViewWidth = function() {
			return window.innerWidth;
		},

		Geometry.getViewHeight = function() {
			return window.innerHeight;
		}

		
	}
	

	function print() {
		document.write("X position " + Geometry.getWindowX() + "<br />");
		document.write("Y position " + Geometry.getWindowY() + "<br />");
		document.write("Height " + Geometry.getViewHeight() + "<br />");
		document.write("Width " + Geometry.getViewWidth() + "<br />");
		alert("Your screen size is: <br /> Width " + screen.width + "<br /> Height " + screen.height + "<br />");


	}

	print();
}