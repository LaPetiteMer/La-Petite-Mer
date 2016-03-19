var FixedMenu = function(listMenu){
	this.listMenu = listMenu;
	this.isFixed = false;
}

var Logo = function(newLogo) {
	this.newLogo = newLogo;
	this.isShow = false;
}

Logo.prototype.show = function() {
	this.isShow = true;
	this.newLogo.classList.add('showLogo');
	this.newLogo.classList.remove('hideLogo');
}

Logo.prototype.hide = function() {
	this.isShow = false;
	this.newLogo.classList.remove('showLogo');
	this.newLogo.classList.add('hideLogo');
}

FixedMenu.prototype.fixed = function(){
	this.isFixed = true;
	this.listMenu.classList.add('fixedMenu');
	
}

FixedMenu.prototype.noFixed = function(){
	this.isFixed = false;
	this.listMenu.classList.remove('fixedMenu');
}

