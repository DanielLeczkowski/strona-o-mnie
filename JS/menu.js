$(document).ready(function(){
  $('.bars').click(function(){
    $('#nav').toggleClass('open');
    $('.container').toggleClass('menu-open');
  });
});

// Płynne przesuwanie menu//

$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
	});


