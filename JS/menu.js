window.addEventListener("load", function(e){

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
			burgerTop.style.animationDelay = "0s, 0.1s";	
			burgerTop.style.animationDuration = "0.1s, 0.1s";
			burgerTop.style.animationFillMode = "forwards, forwards";
		}else{
			burgerTop.style.animationName = "slideDownInverse, rotateRightInverse";	
			burgerTop.style.animationDelay = "0.1s, 0s";	
			burgerTop.style.animationDuration = "0.1s, 0.1s";
			burgerTop.style.animationFillMode = "backwards, backwards";
		}
	}

	var animBurgerBottom = function(){
		if(open === true){
			burgerBottom.style.animationName = "slideUp, rotateLeft";	
			burgerBottom.style.animationDelay = "0s, 0.1s";	
			burgerBottom.style.animationDuration = "0.1s, 0.1s";
			burgerBottom.style.animationFillMode = "forwards, forwards";
		}else{
			burgerBottom.style.animationName = "slideUpInverse, rotateLeftInverse";	
			burgerBottom.style.animationDelay = "0.1s, 0s";	
			burgerBottom.style.animationDuration = "0.1s, 0.1s";
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
		}, 100);
	}

	var animBurgerMenu = function(){
		animBurgerTop();
		animBurgerBottom();
		displayMiddle();
	}


	//CLOSE MENU WITH ESCAPE

	document.addEventListener("keydown", function(e){
		var x = event.keyCode;
		if(x === 27 && open === true){
			playMenu();
			animBurgerMenu();
		}
	})

	//CLOSE MENU WITH CLICK OUTSIDE

	//TODO//

		//FIXED MENU

	var listMenu = document.getElementById("listMenu");
	var desktopLogo = document.getElementById("desktopLogo");

	var addFixedProperties = function(){
		listMenu.classList.add('fixedMenu');
		desktopLogo.classList.add('desktopLogoFixed');
		// desktopLogo.classList.remove('desktopLogoNoFixed');

			for (var i = 0; i < linksMenu.length; i++){
				linksMenu[i].classList.add('linksFixed');
			}
		
	};

	var removeFixedProperties = function(){
		listMenu.classList.remove('fixedMenu');
		desktopLogo.classList.remove('desktopLogoFixed');
		// desktopLogo.classList.add('desktopLogoNoFixed');


			for (var i = 0; i < linksMenu.length; i++){
				linksMenu[i].classList.remove('linksFixed');
			}	
	};

	var fixedMenu = function(){
		if(window.pageYOffset > listMenu.offsetHeight / 5){
			addFixedProperties();
		}else{
			removeFixedProperties();
		}
	}



}, false);