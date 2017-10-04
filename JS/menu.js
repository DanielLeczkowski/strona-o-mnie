/* Otwieranie i zamykanie menu */

$(document).ready(function(){
  $('.bars').click(function(){
    $('#nav').toggleClass('open');
		$('.container').toggleClass('menu-open');
  });
});

$(document).ready(function() {
    $('#nav a').click(function() {
			$('.container').toggleClass('menu-open');
			$('#nav').toggleClass();
    });
});




// Płynne przesuwanie menu//


$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});

$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('#nav', '.smallwhite');
 
   if(top > 550 && innerWidth >768 && find_class_small == false) {
    $('#nav').addClass('smallwhite');
   }
   else {
    $('#nav').removeClass('smallwhite');
   }
 
  });
});


$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('#nav', '.small');
 
   if(top > 1200 && innerWidth >768 && find_class_small == false) {
    $('#nav').addClass('small');
   }
   else {
    $('#nav').removeClass('small');
   }
 
  });
});


$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('#nav', '.small');
 
   if(top > 1200 && innerWidth <768 && find_class_small == false) {
    $('#nav').addClass('smallWhiteMin');
   }
   else {
    $('#nav').removeClass('smallWhiteMin');
   }
 
  });
});


 