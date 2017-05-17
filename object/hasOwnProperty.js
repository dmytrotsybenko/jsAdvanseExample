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
	RoadBill.prototype.name = "Club";
}


//усли метод valueOf не реалbзован, то вызывается toString при вызове valueOf
//выполняя сложения мы так же вызываем valueOf
var kiev = new RoadBill(100, 25);
var lviv = new RoadBill(700, 25);


document.write(kiev.hasOwnProperty("distance")); //возвращает true, если свойст находится в обьекте 
document.write("<br />");
document.write(kiev.hasOwnProperty("name")); //false, потому что name не свойство kiev, а прототип 
document.write("<br />");


document.write("name" in kiev); // true, потому что in ищет и в прототипах
