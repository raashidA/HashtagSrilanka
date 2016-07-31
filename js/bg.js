//Photos: Wallhaven

window.onload = function(){

	// set background
	var n = Math.floor((Math.random() * 21) + 1);
	document.body.style.background = "url('bg/"+n+".jpg') no-repeat center center fixed ";
    document.body.style.backgroundSize = "cover";
    
	appBtn.addEventListener("click", function(){
		chrome.tabs.update({
            url:'chrome://apps'
        });
	});
    
    // Google Apps Button
	jotBtn.addEventListener("click", function() {
		var arr = divCont.getElementsByTagName("div");
		var lastLine = arr[arr.length - 1];

		lastLine.parentNode.setAttribute("class", "");
		focusAtEnd(lastLine);

	});

}