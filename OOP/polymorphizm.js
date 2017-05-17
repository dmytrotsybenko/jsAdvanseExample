function RoadBill(distance, dizelCost) {

	this.distance = distance;
	this.dizelCost = dizelCost;

	var privateData = function() {
		return this.distance * this.dizelCost * 1.2;
	}

	this.publicData = function() {
		var pass = prompt("Enter password for reading pravate data array");
		if( pass == 12345 ) {
			return document.write("This data only for VIP client <br />");
		}
		return document.write("This public data for everyone <br />");
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

function VipDataForUKR(name, pass) {
	this.name = name;
	this.pass = pass;
	this.publicData = function() {

	var pass = prompt("Введите пароль для получения прав доступа");
	if( pass == 12345 ) {
		return document.write("Поздравляю! Вы, ВИП-клиент <br />");
		}
	return document.write("Извините, но пока что, Вы, не являетесь ВИП-клиентом нашой компании. <br />");
	}
}


//усли метод valueOf не реалbзован, то вызывается toString при вызове valueOf
//выполняя сложения мы так же вызываем valueOf
var kiev = new RoadBill(100, 25);
var lviv = new RoadBill(700, 25);

kiev.getBill();
lviv.getBill();

var dimaVip = new RoadBill(10, 10);
dimaVip.publicData();

var dmytro = new VipDataForUKR("Dmytro", 12345);
dmytro.publicData();

document.write(dmytro instanceof VipDataForUKR); //если переменная создана с помощью конструктора данного типа, то true
document.write("<br />");
document.write(typeof VipDataForUKR); //
document.write("<br />");

