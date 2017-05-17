window.onload = function() {
	
	function getQueryString() {
		var args = {};
		
		var query = location.search.substring(1);  	//вырезаем из search с первого и до последнего 
		var pairs = query.split("&");					//разделяем по амперсанду
		
		for (var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf("=");
			if (pos == -1) {
				continue;
			}

			var argname = pairs[i].substring(0, pos);
			var value = pairs[i].substring(pos + 1);

			args[argname] = value;
		}

		return args;

	}

	function print() {
		var args = getQueryString();
		var e = document.createElement('p');

		e.innerHTML = "Login " + args.login + "<br />";
		e.innerHTML += "Password " + args.password;

		document.body.appendChild(e);
	}



print();
	
}