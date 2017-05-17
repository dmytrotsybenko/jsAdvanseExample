//Фабричный статический метод ---> так называется статический метод, который служит для создания новых обьектов

function User() {
	this.sayHi = function() {
		document.write(this.name + "<br />");
	};
}


User.createAnonymous = function() {
	var user = new User;
	user.name = "Anonymous";
	return user;
}

User.createFromData = function(userData) {
	var user = new User;
	user.name = userData.name;
	user.age = userData.age;
	return user;
}

var guest = User.createAnonymous();
guest.sayHi();

var regUser = User.createFromData({
	name: "Io",
	age: 25
});
regUser.sayHi();