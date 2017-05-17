function RoadBill(distance, dizelCost) {

	this.distance = distance;
	this.dizelCost = dizelCost;

	RoadBill.prototype.costForTrip = function() {
		return this.distance * this.dizelCost;
	}
	RoadBill.prototype.getBill = function() {
		document.write(this.costForTrip() + "<br>");
	}
	RoadBill.prototype.toString = function() {
		return "You bill is:" + this.costForTrip();
	}
	RoadBill.prototype.valueOf = function() {
		return this.costForTrip();
	}
}


//усли метод valueOf не реалbзован, то вызывается toString при вызове valueOf
//выполняя сложения мы так же вызываем valueOf
var kiev = new RoadBill(100, 25);
var lviv = new RoadBill(700, 25);

kiev.getBill();
lviv.getBill();


document.write(kiev + "<br>"); //вызовется valeOf, потому что конкатенация 
document.write(kiev.toString());