	"use strict";

	var IMAGES = [];

	function initialLoad() {
		$('add').onclick = addButtonClicked;
		$('delete').onclick = deleteButtonClicked;
		$('imageURL').observe("keydown", clearError);
	}

	function addButtonClicked() {

		clearError();
		var imageURL = $('imageURL').getValue()

		if(!validateURL(imageURL)){
			$('errorDiv').update('Please enter a valid URL');
		}
		else{
			if(!arrayContains(imageURL)){
			IMAGES.push(imageURL);
			updateImages();
		}
		}	
		
	}

	function updateImages(){
		$('imagelist').update();

		for (var index = 0; index < IMAGES.length; ++index) {
	  		var image = IMAGES[index];
	 		var element = $('imagelist').insert({
	  top: new Element('img', {src: image, id:"image", width: "100", height: "100"})
	});
	 		$('image').observe("click",imageClicked);

	}
	}

	function arrayContains(imageURL){
		var result = IMAGES.indexOf(imageURL);

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
		clearError();
		var imageURL = $('imageURL').getValue()

		if(!arrayContains(imageURL)){
			$('errorDiv').update('Image does not exist in planning area!');
		}

		IMAGES = IMAGES.without(imageURL);
		updateImages();
		
	}
	function imageClicked(){
		$('imageURL').value = this.src;
	}

	function clearError(){
		$('errorDiv').update();
	}

	window.onload = initialLoad;
