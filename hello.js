'use strict'; 
	
 $(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 15) {
            $('#display-head').addClass('scroll');
        } else {
            $('#display-head').removeClass('scroll');
        }
    });
 });
	  
// Nav Toggle Button

$('#ham').click(function(){
	$('#ham').toggleClass('clicked');
	$('#menu_wrapper').toggleClass('clicked');
});

