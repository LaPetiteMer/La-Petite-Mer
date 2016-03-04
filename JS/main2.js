(function(){

	window.addEventListener("load", function(){

		var menu = document.getElementById("menu");
		var burgerMenu = document.getElementById("burger_menu");
		var burgerTop = document.getElementById("top");
		var burgerMiddle = document.getElementById("middle");
		var burgerBottom = document.getElementById("bottom");

		var myMenu = new Menu(menu, burgerMenu, burgerTop, burgerMiddle, burgerBottom);
		var menuManager = new MenuManager(myMenu);

		burgerMenu.addEventListener("click", function(){
			if(myMenu.isOpen == false){
				menuManager.open();
			}else{
				menuManager.close();
			}
		}, false);
	}, false);
	
})();