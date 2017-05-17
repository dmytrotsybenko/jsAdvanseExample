var point = new Object();

point.x = 10;
point.y = 15;
document.write(point.x + "<br>");
document.write(point.y + "<br>");

/*----------------------------------*/

var date = new Date();

document.write(date + "<br>");

/*----------------------------------*/

// create str with literal method
var simpleStr = "simpleStr";

// create str with usr new
var objStr = new String("objStr");


document.write(typeof simpleStr + '<br>'); //string
document.write(typeof objStr + '<br>'); //object

/*----------------------------------*/

function Club(name, numberOfWins, numberOfDraw, numberOfLoss){
	//property for class Club
	this.name = name;
	this.numberOfWins = numberOfWins;
	this.numberOfDraw = numberOfDraw;
	this.numberOfLoss = numberOfLoss;

	//method 
	this.numberOfPoint = function() {
		var score = (this.numberOfWins * 3) + ( this.numberOfDraw * 1) + (this.numberOfLoss * 0);
		return score;
	}

	this.getScore = function() {
		document.write("<strong>" + this.name + ":<br>");
		document.write(this.numberOfPoint() + "points<br>");
	}
}
// props for constructor
Club.startPoint = 100;

//method for const
Club.getOrigin = function() {
	return new Club("Arsenal", 0, 0, 0);
}


var real = new Club("Real", 11,11,0);
real.getScore();

document.write(real.startPoint);
document.write(Club.getOrigin());

var arsenal = new Club("Arsenal", 10, 2, 3);
arsenal.getScore();



