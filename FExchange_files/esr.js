document.getElementById("fnrbtn").addEventListener("click", function () {

	var nsText = document.getElementById("uInput").value;
	
	nsText = nsText.replace(/(\n\r|\n|\r)/gm,"<1br />");
	
	if(nospaces == 1 || nospaces ==  true){
	nsText = nsText.replace(/\t/g,"");
	}else{
	nsText = nsText.replace(/\t/g," ");
	}
	
	re1 = /\s+/g;
	nsText = nsText.replace(re1," ");
	
	re2 = /\<1br \/>/gi;
	nsText = nsText.replace(re2, "\n");
	
	
	document.getElementById("uInput").value = nsText;
});	

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("uInput").value = "";
	document.getElementById("uInput").value = "";
	document.getElementById("oldText").focus();
});	

var textBox = document.getElementById("uInput");
textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};