var hasChecked = false;

function prepareDelete() {
	//$('#delete-button').toggleClass("btn-warning btn-danger");
	var chkBtns = $('.delete-check');
	if (chkBtns.length > 0) {
		$('#delete-button').removeClass('btn-danger').addClass('disabled');
		hasChecked = false;

		for (var i = 0; i < chkBtns.length; i++) {
			if(chkBtns[i].checked) {
				$('#delete-button').removeClass('disabled').addClass('btn-danger');
				hasChecked = true;
				break;
			}
		}
	}
}

function deleteCamps() {
	if(hasChecked) {
		var checkedCamps = $(".delete-check:checked + .campId");
		var campIds = [];
		for(var i = 0; i < checkedCamps.length; i++) {
			campIds.push(checkedCamps[i].textContent);
		}
		
		$.ajax({
			url: "/",
			type: "DELETE",
			data: {ids: campIds},
			success: $.noop,
			error: $.nopp
		});
	}
}