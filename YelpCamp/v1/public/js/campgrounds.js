function prepareDelete() {
	//$('#delete-button').toggleClass("btn-warning btn-danger");
	var chkBtns = $('.delete-check');
	if (chkBtns.length > 0) {
		$('#delete-button').removeClass('btn-danger').addClass('btn-warning');

		for (var i = 0; i < chkBtns.length; i++) {
			if(chkBtns[i].checked) {
				$('#delete-button').removeClass('btn-warning').addClass('btn-danger');
				break;
			}
		}
	}
}

function deleteCamps() {
	console.log('This function has been used!');
}