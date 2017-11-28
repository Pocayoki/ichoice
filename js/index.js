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
  .done(displayShoes) 
  .fail(function(error) {
    console.log("error");
  });

  // Smooth window scroll

  $(document).ready(function(){

    //Window scroll
    $("nav a").click(function(e) {
        var id = $(this).attr('href'); //#home

    $('html, body').animate({
      scrollTop: $(id).offset().top
        }, 2000);

        e.preventDefault();
    });

  function displayShoes(response){
    var releases = response.releases;
    var html = '';
    
    $(releases).each(function(i, shoe){
    var name = shoe.name;
    var date = shoe.date;
    var image = shoe.image;
    var price = shoe.price;

    html += `<div class="tile">
        <img src="`+ image +`" alt="">
        <div class="overlay">
          <div class="details">
            <p class="name">`+ name +`</p>
            <p class="date">`+ date +`</p>
            <p class="price">`+ price +`</p>
          </div>
        </div>
      </div>`;
    });

    $('.tiles').html(html);

  }

  });

});