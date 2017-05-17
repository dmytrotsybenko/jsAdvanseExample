// navigator --> получить доступ о текущем браузере, месторасположение клиента
// location  --> на какой странице пользователь 
//frames  --> какие фреймы в текущем документе 
// history --> контроль истории
// screen --> расширение экрана 
// document --> разметка и управление им 


window.onload = function() {

	var parag = document.getElementsByTagName("p");
		setTimeout(function colorChange() {
			for( var i = 0; i < parag.length; i++) {
				parag[i].style.color = "red";
			}
		}, 1000);

	var changeText = function() {
		var inner = document.getElementById("text2");
		inner.innerHTML = "Check!";
	}
	changeText();

	
}