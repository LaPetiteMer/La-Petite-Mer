(function(){

	window.addEventListener("load", function(){

		var menu = document.getElementById("menu");
		var linksMenu = menu.getElementsByTagName("a");
		var burgerMenu = document.getElementById("burger_menu");
		var burgerTop = document.getElementById("top");
		var burgerMiddle = document.getElementById("middle");
		var burgerBottom = document.getElementById("bottom");
		var descentList = document.getElementById('descentList');
		var personList = document.getElementById('personList');
		var $root = $('html, body');
		var listMenu = document.getElementById("listMenu");
		var desktopLogo = document.getElementById("desktopLogo");
		var myNavbar = document.getElementById("navbar");
		var body = document.body;
		var myNavbar = document.getElementById("navbar");

		var myMenu = new Menu(menu, body, burgerMenu, burgerTop, burgerMiddle, burgerBottom);
		var menuManager = new MenuManager(myMenu);
		var navbarLogo = new NavbarLogo(desktopLogo);
		var navbar = new FixedMenu(myNavbar);
		var menuFixed = new FixedMenu(listMenu);
		var navbar = new FixedMenu(myNavbar);

		//ANIMATION BURGER MENU

		burgerMenu.addEventListener("click", function(){
			if (window.innerWidth < 769) {
				if(menuManager.menu.isOpen == false){
					menuManager.open();
					menuManager.pushMenu();
				}else{
					menuManager.close();
					menuManager.pullMenu();
				}
			}
		}, false);

		//CLOSE MENU ON CLICK LINKS

		if (window.innerWidth < 769) {
			for (var i = 0; i < linksMenu.length; i++){
				linksMenu[i].addEventListener("click", function(){
					menuManager.close();
					menuManager.pullMenu();
				});
			}
		}

		//CLOSE MENU WITH ESCAPE

		window.addEventListener("keydown", function(e){
			var x = event.keyCode;
			if (window.innerWidth < 769) {
				if(x == 27 && menuManager.menu.isOpen === true){
					menuManager.close();
					menuManager.pullMenu();
				}
			}
		})

		//SLICK SLIDER

		initSlick();

		window.addEventListener("resize", function(){
			window.setTimeout(function(){
				initSlick();
			}, 1000)
		}, false);

		//SMOOTH SCROLL

		$('.scroll').click(function() {
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: $(href).offset().top - 50
		    }, 500, function () {
		        window.location.hash = href;
		    });
		    return false;
		});


		//FIXED MENU DESKTOP ON LOAD
		if (typeof isHome !== "undefined") {
			if(window.pageYOffset > window.innerHeight - menu.offsetHeight){
				menuFixed.fixed();
			} else {
				menuFixed.noFixed();
			}
		} else {
			menuFixed.fixed();
		}

		//FIXED NAVBAR MOBILE ON LOAD
		if (typeof isHome !== "undefined") {
			if (window.pageYOffset > window.innerHeight * 0.6 - myNavbar.offsetHeight) {
				navbar.fixed();
			} else {
				navbar.noFixed();
			}	
		} else {
			navbar.fixed();
		}

		//LOGO ON DESKTOP MENU ON LOAD
		if (typeof isHome !== "undefined") {
			if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
				if (navbarLogo.isShow === false) {
					navbarLogo.navbarShow();
					navbarLogo.isShow = true;
					console.log('show');
				}
			} else {
				if (navbarLogo.isShow === true) {
					navbarLogo.isShow = false;
					console.log('hide');
					navbarLogo.navbarHide();
				}
			}
		} else {
			if (window.innerWidth > 1100) {
				if (navbarLogo.isShow === false) {
					navbarLogo.navbarShow();
					console.log('test');
				}
			}
		}	
			

		// REMOVE RESET BODY CLASS ON LOAD
		if (window.innerWidth > 768) {
			menuManager.removeBodyClass();
		}

			
		
		window.addEventListener('scroll', function(){
		//FIXED MENU DESKTOP ON SCROLL
		if (typeof isHome !== "undefined") {
			if(window.pageYOffset > window.innerHeight - menu.offsetHeight){
				if(menuFixed.isFixed === false){
					menuFixed.fixed();
				}
			}else{
				if (menuFixed.isFixed === true) {
					menuFixed.noFixed();
				}
			}
		} else {
			menuFixed.fixed();
		}

		//LOGO ON DESKTOP MENU ON SCROLL
		if (typeof isHome !== "undefined") {
			if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
				if (navbarLogo.isShow === false) {
					navbarLogo.navbarShow();
					navbarLogo.isShow = true;
					console.log('show');
				}
			} else {
				if (navbarLogo.isShow === true) {
					navbarLogo.isShow = false;
					console.log('hide');
					navbarLogo.navbarHide();
				}
			}
		} 
			

		// FIXED MOBILE MENU ON SCROLL
			if (window.pageYOffset > window.innerHeight * 0.6 - myNavbar.offsetHeight) {
				navbar.fixed();
			} else {
				navbar.noFixed();
			}	

		//FIXED NAVBAR MOBILE ON SCROLL	
		if (typeof isHome !== "undefined") {
			if (window.pageYOffset > window.innerHeight * 0.6 - myNavbar.offsetHeight) {
				navbar.fixed();
				} else {
					navbar.noFixed();
				}	
			} else {
				navbar.fixed();
			}
		}, false);



		window.addEventListener('resize', function(){
		// REMOVE RESET BODY CLASS ON RESIZE
			if (window.innerWidth > 768) {
				menuManager.removeBodyClass();
			} //else {
			// 	menuManager.pullMenu();
			// }

		//LOGO ON DESKTOP MENU ON RESIZE
			if (typeof isHome !== "undefined") {
				if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
					if (navbarLogo.isShow === false) {
						navbarLogo.navbarShow();
					}
				}else {
					if (navbarLogo.isShow === true) {
						navbarLogo.navbarHide();
					}	
				}
			} else {
				if (window.innerWidth > 1100) {
					navbarLogo.navbarShow();
				} else {
					navbarLogo.navbarHide();
				}
			}	
		}, false);

		slickFotos();

		
	
	}, false);
	

})();