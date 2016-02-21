window.addEventListener("load", function(e){

	var burgerMenu = document.getElementById("burger_menu");
	var menu = document.getElementById("menu");
	var linksMenu = menu.getElementsByTagName("a");
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


	//CLOSE MENU TO THE CLICK ON LINKS

	for (var i = 0; i < linksMenu.length; i++){
		linksMenu[i].addEventListener("click", function(){
			playMenu();
			animBurgerMenu();
		});
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



	// BOOTSTRAP CAROUSEL

	$('#headerCarousel').carousel({
		interval: 10000,
		pause: true,
	});

	$('#headerCarousel').carousel('cycle');
	

	//SLICK

	var initSlick = function(){
		$('#slick').slick({
			mobileFirst: true,
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			    {
			      breakpoint: 480,
			      settings: "unslick"
			    }
			  ]
		});
	}	

	initSlick();

	window.onresize = function(){
		window.setTimeout(function(){
			initSlick();
		}, 1000)
	}

	//PRICES 

	var descentList = document.getElementById('descentList');
	var personList = document.getElementById('personList');
	var contentPrices = document.getElementById('contentPrices');

	var adultsPrices = function(){
	    var x = descentList.value;
	    var y = personList.value;
	    if(x === "d1" && y == "p1"){
		    contentPrices.innerHTML = "<p>16&#128;</p>";
		}else if(x === "d2" && y == "p1"){
		    contentPrices.innerHTML = "<p>20&#128;</p>";
		}else if(x === "d3" && y == "p1"){
		    contentPrices.innerHTML = "<p>24&#128;</p>";
		}else if(x === "d4" && y == "p1"){
		    contentPrices.innerHTML = "<p>35&#128;</p>";
		}else if(x === "d5" && y == "p1"){
		    contentPrices.innerHTML = "<p>34&#128;</p>";
		}
	}

	var childsPrices = function(){
	    var x = descentList.value;
	    var y = personList.value;
	    if(x === "d1" && y == "p2"){
	        contentPrices.innerHTML = "<p>8&#128;</p>";
	    }else if(x === "d2" && y == "p2"){
	        contentPrices.innerHTML = "<p>10&#128;</p>";
	    }else if(x === "d3" && y == "p2"){
	        contentPrices.innerHTML = "<p>12&#128;</p>";
	    }else if(x === "d4" && y == "p2"){
	        contentPrices.innerHTML = "<p>17.5&#128;</p>";
	    }else if(x === "d5" && y == "p2"){
	        contentPrices.innerHTML = "<p>17&#128;</p>";
	    }else if(x === "d1" && y == "p3"){
	        contentPrices.innerHTML = "<p>14&#128;</p>";
	    }else if(x === "d2" && y == "p3"){
	        contentPrices.innerHTML = "<p>18&#128;</p>";
	    }else if(x === "d3" && y == "p3"){
	        contentPrices.innerHTML = "<p>20&#128;</p>";
	    }else if(x === "d4" && y == "p3"){
	        contentPrices.innerHTML = "<p>30&#128;</p>";
	    }else if(x === "d5" && y == "p3"){
	        contentPrices.innerHTML = "<p>29&#128;</p>";
	    }
	}

	var descentChange = function(){
	    adultsPrices();
	    childsPrices();
	} 

	var personChange = function(){
	    adultsPrices();
	    childsPrices();
	} 

	descentList.onchange = function(){descentChange()};
	personList.onchange = function(){personChange()};
	

	//FIXED MENU

	var listMenu = document.getElementById("listMenu");
	var desktopLogo = document.getElementById("desktopLogo");
	console.log(listMenu.offsetHeight);

	var addFixedProperties = function(){
		listMenu.classList.add('fixedMenu');
		desktopLogo.classList.add('desktopLogoFixed');
		desktopLogo.classList.remove('desktopLogoNoFixed');

			for (var i = 0; i < linksMenu.length; i++){
				linksMenu[i].classList.add('linksFixed');
			}
		
	};

	var removeFixedProperties = function(){
		listMenu.classList.remove('fixedMenu');
		desktopLogo.classList.remove('desktopLogoFixed');
		desktopLogo.classList.add('desktopLogoNoFixed');


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

	fixedMenu();
	window.addEventListener('scroll', fixedMenu, false);

}, false);