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



		var myMenu = new Menu(menu, burgerMenu, burgerTop, burgerMiddle, burgerBottom);
		var menuManager = new MenuManager(myMenu);
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
		if(window.pageYOffset > menuFixed.listMenu.offsetHeight / 2){
			menuFixed.fixed();
		}

		//ON SCROLL
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


		//ZOOM 

		 $('.panzoom').panzoom({
            $zoomIn: $(".zoom-in"),
            $zoomOut: $(".zoom-out"),
            $reset: $(".reset"),
            contain: 'invert'
          });
	
	}, false);
	

})();