
var Menu = function(myMenu){
	this.myMenu = myMenu;
	this.isOpen = false;
}

Menu.prototype.open = function(){
	this.myMenu.className = "openMenu";
	this.isOpen = true;
}

Menu.prototype.close = function(){
	this.myMenu.className = "closeMenu";
	this.isOpen = false;
}

var AnimationBurgerTop = function(bar){
	this.barTop = bar;
}

AnimationBurgerTop.prototype.open = function(){
	this.barTop.style.animationName = "slideDown, rotateRight";
	this.barTop.style.animationDelay = "0s, 0.1s";
	this.barTop.style.animationDuration = "0.1s, 0.1s";
	this.barTop.style.animationFillMode = "forwards, forwards";
}

AnimationBurgerTop.prototype.close = function(){
	this.barTop.style.animationName = "slideDownInverse, rotateRightInverse";	
	this.barTop.style.animationDelay = "0.1s, 0s";	
	this.barTop.style.animationDuration = "0.1s, 0.1s";
	this.barTop.style.animationFillMode = "backwards, backwards";
}

var AnimationBurgerMiddle = function(bar){
	this.barMiddle = bar;
}

AnimationBurgerMiddle.prototype.open = function(){
	this.barMiddle.classList.add("displayMiddle");
	this.barMiddle.classList.remove("blockMiddle");
}

AnimationBurgerMiddle.prototype.close = function(){
	this.barMiddle.classList.remove("displayMiddle");
	this.barMiddle.classList.add("blockMiddle");
}

var AnimationBurgerBottom = function(bar){
	this.barBottom = bar;
}

AnimationBurgerBottom.prototype.open = function(){
	this.barBottom.style.animationName = "slideUp, rotateLeft";
	this.barBottom.style.animationDelay = "0s, 0.1s";
	this.barBottom.style.animationDuration = "0.1s, 0.1s";
	this.barBottom.style.animationFillMode = "forwards, forwards";
}

AnimationBurgerBottom.prototype.close = function(){
	this.barBottom.style.animationName = "slideUpInverse, rotateLeftInverse";	
	this.barBottom.style.animationDelay = "0.1s, 0s";	
	this.barBottom.style.animationDuration = "0.1s, 0.1s";
	this.barBottom.style.animationFillMode = "backwards, backwards";
}