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

window.onresize = function(){
		window.setTimeout(function(){
			initSlick();
		}, 1000)
	}