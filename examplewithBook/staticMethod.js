//static Method

function Journal(date) {
	this.date = date;
	this.formatDate = function(date) {
		return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
	};
	this.getTitle = function() {
		return "This Journal was publish at " + this.formatDate(this.date);
	};
}

Journal.compare = function(first, second) {
	return first.date - second.date;
};


var exampleJournalArray = [
	new Journal(new Date(2012, 1, 1)),
	new Journal(new Date(2012, 0, 1)),
	new Journal(new Date(2011, 11, 1))
];

function findMin(exampleJournalArray) {
	var min = 0;
	for (var i = 0; i < exampleJournalArray.length; i++) {
		if (Journal.compare(exampleJournalArray[min], exampleJournalArray[i]) > 0) {
			min = i;
		}
	}
	return exampleJournalArray[min];
}

document.write(findMin(exampleJournalArray).getTitle());
