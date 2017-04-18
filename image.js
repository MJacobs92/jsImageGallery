"use strict";

function initialLoad() {
	$('add').onclick = addButtonClicked;
	$('delete').onclick = deleteButtonClicked;
}

function addButtonClicked() {
	$('errorDiv').update();
	var imageURL = $('imageURL').getValue()

	if(!validateURL(imageURL)){
		$('errorDiv').update('Please enter a valid URL');
	}
	
}

function validateURL(imageURL){
	var urlRegex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
	return urlRegex.test(imageURL);
}

function deleteButtonClicked() {
	
}

window.onload = initialLoad;
