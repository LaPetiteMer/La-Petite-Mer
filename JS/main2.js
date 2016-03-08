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
		var contentPrices = document.getElementById('contentPrices');
		var $root = $('html, body');
		var listMenu = document.getElementById("listMenu");
		var desktopLogo = document.getElementById("desktopLogo");



		var myMenu = new Menu(menu, burgerMenu, burgerTop, burgerMiddle, burgerBottom);
		var menuManager = new MenuManager(myMenu);
		// var adultsPrices = new AdultsPrices(descentList, personList, contentPrices);
		var menuFixed = new FixedMenu(listMenu, desktopLogo);
		
		burgerMenu.addEventListener("click", function(){
			if(menuManager.menu.isOpen == false){
				menuManager.open();
			}else{
				menuManager.close();
			}
		}, false);

		for (var i = 0; i < linksMenu.length; i++){
			linksMenu[i].addEventListener("click", function(){
				menuManager.close();
			});
		}


		document.addEventListener("keydown", function(e){
			var x = event.keyCode;
			if(x == 27 && menuManager.menu.isOpen === true){
				menuManager.close();
			}
		})

		initSlick();

		window.onresize = function(){
			window.setTimeout(function(){
				initSlick();
			}, 1000)
		}

		$('.scroll').click(function() {
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: $(href).offset().top - 80
		    }, 500, function () {
		        window.location.hash = href;
		    });
		    return false;
		});

		// descentList.onchange = function(){adultsPrices.calculate()};
		

		window.addEventListener('scroll', function(){
			if(window.pageYOffset > menuFixed.listMenu.offsetHeight / 2){
				if(menuFixed.isFixed == false){
					menuFixed.fixed();
				}
			}else{
				if(menuFixed.isFixed == true){
					menuFixed.noFixed();
				}
			}		
		}, false)

		slickFotos();
		
	}, false);
	

})();