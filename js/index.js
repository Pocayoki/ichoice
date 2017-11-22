$(document).ready(function() {

// Initialize the slider
	$('.slider').slick({
		autoplay: true,
  		autoplaySpeed: 2000,
	});

// Get the show releases

$.ajax({
    url: 'data/shoes.json',
    type: 'GET',
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function() {
    console.log("error");
  });

});