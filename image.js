"use strict";

var IMAGES = [];

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

	if(!arrayContains(imageURL)){
		IMAGES.push(imageURL);
		updateImages();
	}
	
}

function updateImages(){
	$('imagelist').update();

	for (var index = 0; index < IMAGES.length; ++index) {
  		var image = IMAGES[index];
 		 $('imagelist').insert({
  top: new Element('img', {src: image, width: "100", height: "100"})
});

}
}

function arrayContains(imageURL){
	var result = IMAGES.indexOf(imageURL);
	console.log(result);

	if(result == -1){
		return false;
	}
	else{
		return true;
	}
}

function validateURL(imageURL){
	var urlRegex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
	return urlRegex.test(imageURL);
}

function deleteButtonClicked() {
	$('errorDiv').update();
	var imageURL = $('imageURL').getValue()

	if(!arrayContains(imageURL)){
		$('errorDiv').update('Image does not exist in planning area!');
	}

	IMAGES = IMAGES.without(imageURL);
	updateImages();
	
}

window.onload = initialLoad;
