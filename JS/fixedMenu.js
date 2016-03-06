var FixedMenu = function(listMenu, logo){
	this.listMenu = listMenu;
	this.logo = logo;
	this.isFixed = false;
}

FixedMenu.prototype.fixed = function(){
		this.isFixed = true;
		this.listMenu.classList.add('fixedMenu');
		this.logo.classList.add('desktopLogoFixed');
}

FixedMenu.prototype.noFixed = function(){
		this.isFixed = false;
		listMenu.classList.remove('fixedMenu');
		desktopLogo.classList.remove('desktopLogoFixed');
}

	