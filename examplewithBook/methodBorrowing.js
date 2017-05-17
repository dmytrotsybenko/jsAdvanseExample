//При помощи call можно легко взять метод одного объекта, в том числе встроенного, и вызвать в контексте другого.
//Это называется «одалживание метода» (на англ. method borrowing).

function showAllArguments() {
	var join = [].join;
	var argStr = join.call(arguments, ":");
	document.write(argStr + "<br />");
}

function argToArray() {
	var args = [].slice.call(arguments);
	document.write(args.join("!") + "<br />");
}

showAllArguments(1,2,3,4,5,6,7,8);
argToArray(1,1,1,1,1,1,1);

/* this --> who you are */
/* 
(1)
	obj.func() 			//this --> obj
	obj["func"]()
-----------------------------------------
(2)
	func() 				//this --> window(ES3)
						//this --> undefined(ES5)
-----------------------------------------
(3)
	new func() 			//this --> {}(new object)
-----------------------------------------
(4)
	func.apply(context, args)		//this --> context(явная передача)
	func.call(context, arg1, arg2)

*/