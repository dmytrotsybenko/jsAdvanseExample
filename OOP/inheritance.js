function RoadBill(distance, dizelCost) {

	this.distance = distance;
	this.dizelCost = dizelCost;

	var privateData = function() {
		return this.distance * this.dizelCost * 1.2;
	}

	this.publicData = function() {
		var pass = prompt("Enter password for reading pravate data array");
		if( pass == 12345 ) {
			return "This data only for VIP client"
		}
		return "This public data for everyone";
	}

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

function VipData(name, pass) {
	this.name = name;
	this.pass = pass;
	this.discount = function() {
		return this.distance * this.dizelCost * 0.5;
	}
}


//усли метод valueOf не реалbзован, то вызывается toString при вызове valueOf
//выполняя сложения мы так же вызываем valueOf
var kiev = new RoadBill(100, 25);
var lviv = new RoadBill(700, 25);

kiev.getBill();
lviv.getBill();

document.write(kiev.publicData());
var user = new RoadBill(10, 10);
//наследование
VipData.prototype = user;
var dimaVIP = new VipData("Dima", 1234567890);
document.write(dimaVIP.discount());
