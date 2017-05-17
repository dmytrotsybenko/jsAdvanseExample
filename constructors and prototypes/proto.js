function RoadBill(distance, dizelCost) {

	this.distance = distance;
	this.dizelCost = dizelCost;

	RoadBill.prototype.costForTrip = function() {
		return this.distance * this.dizelCost;
	}
	RoadBill.prototype.getBill = function() {
		document.write(this.costForTrip() + "<br>");
	}
}

var kiev = new RoadBill(100, 25);
var lviv = new RoadBill(700, 25);

kiev.getBill();
lviv.getBill();