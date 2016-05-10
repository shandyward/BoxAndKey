

// Scroll to Top
$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}


//Carousel
 var carousel = $('.jcarousel');

    carousel.swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {   
            carousel.jcarousel('scroll', '+=1');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            carousel.jcarousel('scroll', '-=1');
        }
    });
	
// FAQ Page- toggle
 $('.faqbtn').on('click', function(e) {
      $('.faqbtn').toggleClass("active"); //you can list several class names 
      e.preventDefault();
    });
