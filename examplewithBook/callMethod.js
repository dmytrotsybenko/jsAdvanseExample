var user = {
	firstName: "Io",
	lastName: "Qwerty",
	patronym: "Qwertyvich"
}

function showFullName(firstPart, lastPart) {
	alert(this[firstPart] + " " + this[lastPart]);
}

//f.call(context, arg1, arg2 ....)
showFullName.call(user, 'firstName', 'patronym');