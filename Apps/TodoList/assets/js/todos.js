var icons = {}

icons.trash = "<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>";

$("#todo-input").keydown(function(event) {
	if (event.which === 13) {
		var inputValue = $.trim($(this).val());
		if(inputValue) {
			$("ul").append("<li><span class=\"remove\">" + icons.trash + "</span>" + inputValue + "</li>");
			$("li").last().css("display", "none");
			$(this).val("");
			$("li").last().slideDown("0.3");	
		}
	}

	if (event.which === 27) {
		$(this).blur();
		$(this).val("");
	}
});

$("ul").on("click", "li", function(event) {
	$(this).toggleClass("completed");
	event.stopPropagation();
});

$("ul").on("click", ".remove", function(event) {
	$(this).parent().slideUp("0.3", function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("#show-hide-input").on("click", function() {
	if($(this).hasClass("fa-plus")) {
		$("#todo-input").slideDown("0.3");
	} else {
		$("#todo-input").slideUp("0.3");
		$("#todo-input").val("");
	}

	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-minus");
});