(function(){

	window.addEventListener("load", function(){

		var menu = document.getElementById("menu");
		var burgerMenu = document.getElementById("burger_menu");
		var burgerTop = document.getElementById("top");
		var burgerMiddle = document.getElementById("middle");
		var burgerBottom = document.getElementById("bottom");

		var navMenu = new Menu(menu);
		var animationTop = new AnimationBurgerTop(burgerTop);
		var animationMiddle = new AnimationBurgerMiddle(burgerMiddle);
		var animationBottom = new AnimationBurgerBottom(burgerBottom);

		burgerMenu.addEventListener("click", function(){
			if(navMenu.isOpen){
				navMenu.close();
				animationTop.close();
				animationMiddle.close();
				animationBottom.close();
			}else{
				navMenu.open();
				animationTop.open();
				animationMiddle.open();
				animationBottom.open();
			}
		}, false);

	}, false);
	
})();