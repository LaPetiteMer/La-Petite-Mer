// var NavbarLogo = function(newLogo) {
// 	this.newLogo = newLogo;
// 	this.isShow = false;
// }

// NavbarLogo.prototype.navbarShow = function() {
// 	this.isShow = true;
// 	this.newLogo.classList.add('showLogo');
// 	this.newLogo.classList.remove('hideLogo');
// }

// NavbarLogo.prototype.navbarHide = function() {
// 	this.isShow = false;
// 	this.newLogo.classList.remove('showLogo');
// 	this.newLogo.classList.add('hideLogo');
// }

	// var navbarLogo = new NavbarLogo(desktopLogo);
	// //LOGO ON DESKTOP MENU ON SCROLL	
	// if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
	// 	if (navbarLogo.isShow === false) {
	// 		navbarLogo.navbarShow();
	// 		navbarLogo.isShow = true;
	// 		console.log('show');
	// 	}
	// } else {
	// 	if (navbarLogo.isShow === true) {
	// 		navbarLogo.isShow = false;
	// 		console.log('hide');
	// 		navbarLogo.navbarHide();
	// 	}
	// }


	//LOGO ON DESKTOP MENU ON RESIZE
	// if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
	// 	if (navbarLogo.isShow === false) {
	// 		navbarLogo.navbarShow();
	// 	}
	// }else {
	// 	if (navbarLogo.isShow === true) {
	// 		navbarLogo.navbarHide();
	// 	}	
	// }

	// var navbar = new FixedMenu(myNavbar);

	//FIXED NAVBAR MOBILE ON LOAD
		// if (window.pageYOffset > window.innerHeight * 0.6 - myNavbar.offsetHeight) {
		// 	navbar.fixed();
		// } else {
		// 	navbar.noFixed();
		// }	