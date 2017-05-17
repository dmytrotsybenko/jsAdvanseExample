function Tooltip() {

	this.tooltip = document.createElement("div");
	this.tooltip.style.position = "absolute";
	this.tooltip.className = "tooltip";
	this.tooltip.style.visibility = "hidden";
};

Tooltip.prototype.show = function(text, x, y) {
	this.tooltip.innerHTML = text;
	this.tooltip.style.left = x + "px";
	this.tooltip.style.top = y + "px";
	this.tooltip.style.visibility = "visible";

	if( this.tooltip.parentNode != document.body) {
		document.body.appendChild(this.tooltip);
	}
};

Tooltip.prototype.hide = function() {
	this.tooltip.style.visibility = "hidden";
};

var io = function() {
	var action = document.getElementById("color");
	action.onmousemove = mouseMoveHandler;
	action.onmouseout = mouseOutHandler;
}

var tool = new Tooltip();
var info = document.getElementById("color");

function mouseMoveHandler(e) {
	if(!e) {
		e = window.event;
	}
	tool.show(getStyle(info, "backgroundColor"), e.clientX + 10, e.clientY + 10);
}

function mouseOutHandler() {
	tool.hide();
}

function getStyle(element, styleName) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(element, null)[styleName]
	}
}

io();