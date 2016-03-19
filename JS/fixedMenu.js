var FixedMenu = function(listMenu){
	this.listMenu = listMenu;
	this.isFixed = false;
}

FixedMenu.prototype.fixed = function(){
	this.isFixed = true;
	this.listMenu.classList.add('fixedMenu');
	this.listMenu.classList.remove('noFixed');
}

FixedMenu.prototype.noFixed = function(){
	this.isFixed = false;
	this.listMenu.classList.remove('fixedMenu');
	this.listMenu.classList.add('noFixed');
}

