// navigator --> получить доступ о текущем браузере, месторасположение клиента
// location  --> на какой странице пользователь 
//frames  --> какие фреймы в текущем документе 
// history --> контроль истории
// screen --> расширение экрана 
// document --> разметка и управление им 


window.onload = function() {

document.write(document.location + '<br/>');
document.write(document.location.protocol + '<br/>');
document.write(document.location.host + '<br/>');
document.write(document.location.pathname + '<br/>');
document.write(document.location.search + '<br/>');
	
}