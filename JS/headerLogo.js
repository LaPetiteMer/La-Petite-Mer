var headerLogo = document.getElementById("headerLogo");

var HeaderLogo = function(newLogo) {
	this.newLogo = newLogo;
	this.isShow = false;
}

HeaderLogo.prototype.headerShow = function() {
	this.newLogo.classList.add("homeLogo");
}

HeaderLogo.prototype.headerHide = function() {
	this.newLogo.classList.remove("homeLogo");
}

//REMOVE LOGO HEADER ON RESIZE

var headerLogo = new HeaderLogo(headerLogo);

(function(){
	var logoHeader = function() {
		if (window.innerWidth < 769) {
		headerLogo.headerHide();
		} else {
			headerLogo.headerShow();
		}
	}

	window.addEventListener("load", logoHeader, false);
	window.addEventListener("resize", logoHeader, false);	

})();



