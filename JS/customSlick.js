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

	
var slickFotos = function(){
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
}