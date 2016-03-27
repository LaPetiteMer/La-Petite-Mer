
var Menu = function(myMenu, myBody, myBurger){
	this.myMenu = myMenu;
	this.myBurger = myBurger;
	// this.barTop = barTop;
	// this.barMiddle = barMiddle;
	// this.barBottom = barBottom;
	this.myBody = myBody;
	this.isOpen = false;
	this.isRemove = false;
}

var NavbarLogo = function(newLogo) {
	this.newLogo = newLogo;
	this.isShow = false;
}

var MenuManager = function(menu){
	this.menu = menu;
}

MenuManager.prototype.open = function(){
		this.menu.isOpen = true;
		this.menu.myBurger.style.animationName = "rotateLeft";
		this.menu.myBurger.style.animationDelay = "0s";
		this.menu.myBurger.style.animationDuration = "0.4s";
		this.menu.myBurger.style.animationFillMode = "forwards";
		// this.menu.barTop.style.animationFillMode = "forwards, forwards";
		// this.menu.barTop.style.animationName = "slideDown, rotateRight";
		// this.menu.barTop.style.animationDelay = "0s, 0.1s";
		// this.menu.barTop.style.animationDuration = "0.1s, 0.1s";
		// this.menu.barTop.style.animationFillMode = "forwards, forwards";
		// this.menu.barMiddle.classList.add("displayMiddle");
		// this.menu.barMiddle.classList.remove("blockMiddle");
		// this.menu.barBottom.style.animationName = "slideUp, rotateLeft";
		// this.menu.barBottom.style.animationDelay = "0s, 0.1s";
		// this.menu.barBottom.style.animationDuration = "0.1s, 0.1s";
		// this.menu.barBottom.style.animationFillMode = "forwards, forwards";
}

MenuManager.prototype.close = function(){
		this.menu.isOpen = false;
		this.menu.myBurger.style.animationName = "rotateLeftInverse";
		this.menu.myBurger.style.animationDelay = "0s";
		this.menu.myBurger.style.animationDuration = "0.4s";
		this.menu.myBurger.style.animationFillMode = "forwards";
		// this.menu.barTop.style.animationName = "slideDownInverse, rotateRightInverse";	
		// this.menu.barTop.style.animationDelay = "0.1s, 0s";	
		// this.menu.barTop.style.animationDuration = "0.1s, 0.1s";
		// this.menu.barTop.style.animationFillMode = "backwards, backwards";
		// this.menu.barMiddle.classList.add("blockMiddle");
		// this.menu.barMiddle.classList.remove("displayMiddle");
		// this.menu.barBottom.style.animationName = "slideUpInverse, rotateLeftInverse";
		// this.menu.barBottom.style.animationDelay = "0.1s, 0s";	
		// this.menu.barBottom.style.animationDuration = "0.1s, 0.1s";
		// this.menu.barBottom.style.animationFillMode = "backwards, backwards";
}

MenuManager.prototype.pushMenu = function() {
	this.menu.myMenu.className = "pushMenu";
	this.menu.myBody.className = "pushBody";
}

MenuManager.prototype.pullMenu = function() {
	this.menu.myMenu.className = "closeMenu";
	this.menu.myBody.className = "resetBody";
}

MenuManager.prototype.removeBodyClass = function() {
	this.menu.isRemove = true;
	this.menu.myBody.classList.remove("resetBody");
	this.menu.myBody.classList.remove("pushBody");
}

MenuManager.prototype.addBodyClass = function() {
	this.menu.isRemove = false;
	this.menu.myBody.classList.add("resetBody");
}


//LOGO MENU

NavbarLogo.prototype.navbarShow = function() {
	this.isShow = true;
	this.newLogo.classList.add('showLogo');
	this.newLogo.classList.remove('hideLogo');
}

NavbarLogo.prototype.navbarHide = function() {
	this.isShow = false;
	this.newLogo.classList.remove('showLogo');
	this.newLogo.classList.add('hideLogo');
}