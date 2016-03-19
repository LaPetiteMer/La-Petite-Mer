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
		var navbar = document.getElementById("navBar");
		var body = document.body;
		var logo = document.getElementById("logo");

		var myMenu = new Menu(menu, body, burgerMenu, burgerTop, burgerMiddle, burgerBottom);
		var menuManager = new MenuManager(myMenu);
		var menuFixed = new FixedMenu(listMenu);
		var navbar = new FixedMenu(navbar);
		var myLogo = new Logo(desktopLogo);
		
		burgerMenu.addEventListener("click", function(){
			if (window.innerWidth < 769) {
				if(menuManager.menu.isOpen == false){
					menuManager.open();
				}else{
					menuManager.close();
				}
			}
		}, false);

		if (window.innerWidth > 768) {
			body.classList.remove("resetBody");
		}

		for (var i = 0; i < linksMenu.length; i++){
			linksMenu[i].addEventListener("click", function(){
				menuManager.close();
			});
		}


		window.addEventListener("keydown", function(e){
			var x = event.keyCode;
			if(x == 27 && menuManager.menu.isOpen === true){
				menuManager.close();
			}
		})

		initSlick();

		// window.onresize = function(){
		// 	// window.setTimeout(function(){
		// 	// 	initSlick();
		// 	// }, 1000)
		// }

		window.addEventListener("resize", function(){
			window.setTimeout(function(){
				initSlick();
			}, 1000)
		}, false);

		$('.scroll').click(function() {
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: $(href).offset().top - 50
		    }, 500, function () {
		        window.location.hash = href;
		    });
		    return false;
		});




		//ON LOAD
		if(window.pageYOffset > window.innerHeight - menu.offsetHeight){
			menuFixed.fixed();
		} else {
			menuFixed.noFixed();
		}

		// //ON SCROLL
		window.addEventListener('scroll', function(){
			if(window.pageYOffset > window.innerHeight - menu.offsetHeight){
				if(menuFixed.isFixed == false){
					menuFixed.fixed();
				}
			}else{
				menuFixed.noFixed();
			}	

				if (window.pageYOffset > window.innerHeight * 0.6) {
					navbar.fixed();
				} else {
					navbar.noFixed();
				}	
			
		}, false);



		window.addEventListener('scroll', function(){
			if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
				if (myLogo.isShow === false) {
					myLogo.show();
					myLogo.isShow = true;
					console.log('show');
				}
			} else {
				if (myLogo.isShow === true) {
					myLogo.isShow = false;
					console.log('hide');
					myLogo.hide();
				}
			}
		}, false);

		window.addEventListener('resize', function(){
			if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
				if (myLogo.isShow === false) {
					myLogo.show();
					myLogo.isShow = true;
				} else {
				if (myLogo.isShow === true) {
					myLogo.isShow = false;
					myLogo.hide();
					}
				}
			}
			if (window.innerWidth > 768) {
				body.classList.remove("resetBody");
			}

			if (window.innerWidth < 769) {
				logo.classList.remove("homeLogo");
			} else {
				logo.classList.add("homeLogo");
			}
		}, false);

		if (window.innerWidth > 1100 && window.pageYOffset > window.innerHeight - menu.offsetHeight) {
				if (myLogo.isShow === false) {
					myLogo.show();
					myLogo.isShow = true;
				}
			} else {
				if (myLogo.isShow === true) {
					myLogo.isShow = false;
					myLogo.hide();
				}
			}

		slickFotos();

		
	
	}, false);
	

})();