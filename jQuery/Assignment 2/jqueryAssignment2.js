var assignment2 = {};

assignment2.modifyLis = function(text) {
	if (typeof(text) == "string") {
		$("li").text(text);
	} else {
		$("li").text(function(index) {
			return text[index];
		});
	}
}