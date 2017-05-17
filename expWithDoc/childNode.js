
window.onload = function() {
	var e = document.getElementById("text2");

	for( var i = 0; i < e.childNodes.length; i++ ) {
		
		var temp = e.childNodes[i];
		if (temp.nodeType != 1) {
			continue;
		}
		//alert(e.childNodes[i]);
		e.childNodes[i].style.color = "red";

	}

	e.parentNode.style.border = "1px solid #333";
}