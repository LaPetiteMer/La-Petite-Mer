
var $root = $('html, body');
var smoothScroll = function(){
	// $('.scroll').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top - 50
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	// });
}
