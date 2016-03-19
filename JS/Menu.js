
var Menu = function(myMenu, myBody, myBurger, barTop, barMiddle, barBottom){
	this.myMenu = myMenu;
	this.myBurger = myBurger;
	this.barTop = barTop;
	this.barMiddle = barMiddle;
	this.barBottom = barBottom;
	this.myBody = myBody;
	this.isOpen = false;
}

var MenuManager = function(menu){
	this.menu = menu;
}

MenuManager.prototype.open = function(){
		this.menu.isOpen = true;
		this.menu.myMenu.className = "pushMenu";
		this.menu.myBody.className = "pushBody";
		this.menu.barTop.style.animationName = "slideDown, rotateRight";
		this.menu.barTop.style.animationDelay = "0s, 0.1s";
		this.menu.barTop.style.animationDuration = "0.1s, 0.1s";
		this.menu.barTop.style.animationFillMode = "forwards, forwards";
		this.menu.barMiddle.classList.add("displayMiddle");
		this.menu.barMiddle.classList.remove("blockMiddle");
		this.menu.barBottom.style.animationName = "slideUp, rotateLeft";
		this.menu.barBottom.style.animationDelay = "0s, 0.1s";
		this.menu.barBottom.style.animationDuration = "0.1s, 0.1s";
		this.menu.barBottom.style.animationFillMode = "forwards, forwards";
}

MenuManager.prototype.close = function(){
		this.menu.isOpen = false;
		this.menu.myMenu.className = "closeMenu";
		this.menu.myBody.className = "resetBody";
		this.menu.barTop.style.animationName = "slideDownInverse, rotateRightInverse";	
		this.menu.barTop.style.animationDelay = "0.1s, 0s";	
		this.menu.barTop.style.animationDuration = "0.1s, 0.1s";
		this.menu.barTop.style.animationFillMode = "backwards, backwards";
		this.menu.barMiddle.classList.add("blockMiddle");
		this.menu.barMiddle.classList.remove("displayMiddle");
		this.menu.barBottom.style.animationName = "slideUpInverse, rotateLeftInverse";
		this.menu.barBottom.style.animationDelay = "0.1s, 0s";	
		this.menu.barBottom.style.animationDuration = "0.1s, 0.1s";
		this.menu.barBottom.style.animationFillMode = "backwards, backwards";
}

