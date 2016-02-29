window.addEventListener("load", function(e){

	var burgerMenu = document.getElementById("burger_menu");
	var menu = document.getElementById("menu");
	var linksMenu = menu.getElementsByTagName("a");
	var burgerTop = document.getElementById("top");
	var burgerMiddle = document.getElementById("middle");
	var burgerBottom = document.getElementById("bottom");

	var open = false;



	//CLOSE MENU TO THE CLICK ON LINKS

	for (var i = 0; i < linksMenu.length; i++){
		linksMenu[i].addEventListener("click", function(){
			playMenu();
			animBurgerMenu();
		});
	}


	// END SLIDEMENU 

	burgerMenu.addEventListener("click", function(){
		playMenu();
		animBurgerMenu();
	});


	


	// BOOTSTRAP CAROUSEL

	$('#headerCarousel').carousel({
		interval: 10000,
		pause: true,
	});

	$('#headerCarousel').carousel('cycle');
	

	//SLICK

	
	initSlick();

	

	//PORTFOLIO PHOTOS

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  asNavFor: '.slider-for',
	  centerMode: true,
	  focusOnSelect: true,
	  dots: true
	});	

	//prices
	if(descentList !== "undefined") {
		descentList.onchange = function(){descentChange()};
		personList.onchange = function(){personChange()};
	}
	
	

	//fixed menu
	fixedMenu();
	window.addEventListener('scroll', fixedMenu, false);

	//SMOOTH SCROLL

	$(".scroll").click(function(){
		var page = $(this).attr("href");
		if(window.innerWidth < 769){
				$("body, html").animate({scrollTop: $(page).offset().top - 50}, 1000);
				return false;
			}else{
				$("body, html").animate({scrollTop: $(page).offset().top - 80}, 1000);
				return false;
			}
		});

}, false);