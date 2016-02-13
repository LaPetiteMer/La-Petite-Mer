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

	// END SLIDEMENU 

	burgerMenu.addEventListener("click", function(){
		playMenu();
		animBurgerMenu();
	});


	document.addEventListener("keydown", function(e){
		var x = event.keyCode;
		if(x === 27 && open === true){
			playMenu();
			animBurgerMenu();
		}
	})
	// var headerCarousel = document.getElementById('carousel');

	// headerCarousel.carousel();



	$('#headerCarousel').carousel({
		interval: 500,
		pause: "hover"
	});

	$('#headerCarousel').carousel('cycle');



}, false);