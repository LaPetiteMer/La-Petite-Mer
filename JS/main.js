window.addEventListener("load", function(e){

	var burgerMenu = document.getElementById("burger_menu");
	var menu = document.getElementById("menu");
	var burgerTop = document.getElementById("top");
	var burgerMiddle = document.getElementById("middle");
	var burgerBottom = document.getElementById("bottom");

	var open = false;

// SLIDEMENU 

	var openMenu = function(){
		menu.classList.remove('closeMenu');
		menu.classList.add('openMenu');
	};

	var closeMenu = function(){
		menu.classList.remove('openMenu');
		menu.classList.add('closeMenu');
	};

	var playMenu = function(){
			if(open === false) {
				openMenu();
				open = true;
			}else{
				closeMenu();
				open = false;
			}
	};

	// ANIMATION BURGERMENU

	var animBurgerTop = function(){
		if(open === true){
			burgerTop.style.animationName = "slideDown, rotateRight";	
			burgerTop.style.animationDelay = "0s, 0.2s";	
			burgerTop.style.animationDuration = "0.2s, 0.2s";
			burgerTop.style.animationFillMode = "forwards, forwards";
		}else{
			burgerTop.style.animationName = "slideDownInverse, rotateRightInverse";	
			burgerTop.style.animationDelay = "0.2s, 0s";	
			burgerTop.style.animationDuration = "0.2s, 0.2s";
			burgerTop.style.animationFillMode = "backwards, backwards";
		}
	}

	var animBurgerBottom = function(){
		if(open === true){
			burgerBottom.style.animationName = "slideUp, rotateLeft";	
			burgerBottom.style.animationDelay = "0s, 0.2s";	
			burgerBottom.style.animationDuration = "0.2s, 0.2s";
			burgerBottom.style.animationFillMode = "forwards, forwards";
		}else{
			burgerBottom.style.animationName = "slideUpInverse, rotateLeftInverse";	
			burgerBottom.style.animationDelay = "0.2s, 0s";	
			burgerBottom.style.animationDuration = "0.2s, 0.2s";
			burgerBottom.style.animationFillMode = "backwards, backwards";
		}
	}

	var displayMiddle = function(){
		window.setTimeout(function(){
			if(open === true){
				burgerMiddle.style.display = "none";
			}else {
				burgerMiddle.style.display = "block";
			}
		}, 200);
	}

	// END SLIDEMENU 

	burgerMenu.addEventListener("click", function(){
		playMenu();
		animBurgerTop();
		animBurgerBottom();
		displayMiddle();
	});



}, false);