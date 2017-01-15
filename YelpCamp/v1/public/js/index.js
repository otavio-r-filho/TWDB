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
		var checkedCamps = $(".campId").textContent;
		console.log(checkedCamps);
	}
}