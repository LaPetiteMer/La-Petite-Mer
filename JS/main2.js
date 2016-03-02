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
				window.setTimeout(function(){
					animationMiddle.close();
				}, 100);
				animationBottom.close();
			}else{
				navMenu.open();
				animationTop.open();
				window.setTimeout(function(){
					animationMiddle.open();
				}, 100);
				animationBottom.open();
			}
		}, false);

	}, false);
	
})();