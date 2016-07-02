var assigment1 = {};

assigment1.applyStyles = function() {
	$("div").css("background", "purple");
	$(".highlight").css("width", "200px");
	$("#third").css("border", "2px solid orange");
	$("div:nth-of-type(1)").css("color", "pink");
}

assigment1.applyStyles();