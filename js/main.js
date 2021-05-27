$( document ).ready(function(){

$('.catalogButton').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
})

$('.rightMenu').on('click', function(e) {
  e.preventDefault();
  $('.right').toggleClass('right_active');
  $('.menu').toggleClass('menu_active');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
$('.accessoriesMenu').removeClass('seekRightColumns');
$('.tecnicsMenu').removeClass('seekRightColumns');
$('.tabletsMenu').removeClass('seekRightColumns');
$('.brendsMenu').removeClass('seekRightColumns');
$('.leftMenu').removeClass('mouseenter');
})

$('.buttonSearchHiden').on('click', function(e) {
  e.preventDefault();
  $('.hideSearch').toggleClass('hide');
  
})

$(".pUp").click(function() {
     $('html, body').animate({
         scrollTop: $(".logoHeader").offset().top
     }, 1000);
 })

  $(".Overlay *")
.mouseenter(function(){ 		
  $('.leftMenu').addClass('mouseenter');
})


$(".smartphoneOverlay *")
.mouseenter(function(){ 		

  $('.smartphonesMenu').addClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
  $('.accessoriesMenu').removeClass('seekRightColumns');
  $('.tecnicsMenu').removeClass('seekRightColumns');
  $('.tabletsMenu').removeClass('seekRightColumns');
  $('.brendsMenu').removeClass('seekRightColumns');
})


$(".laptopsOverlay *")
.mouseenter(function(){ 		
  $('.laptopsMenu').addClass('seekRightColumns');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.accessoriesMenu').removeClass('seekRightColumns');
  $('.tecnicsMenu').removeClass('seekRightColumns');
  $('.tabletsMenu').removeClass('seekRightColumns');
  $('.brendsMenu').removeClass('seekRightColumns');
})

$(".accessoriesOverlay *")
.mouseenter(function(){ 		
  $('.accessoriesMenu').addClass('seekRightColumns');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
  $('.tecnicsMenu').removeClass('seekRightColumns');
  $('.tabletsMenu').removeClass('seekRightColumns');
  $('.brendsMenu').removeClass('seekRightColumns');
})

$(".tecnicsOverlay *")
.mouseenter(function(){ 		
  $('.tecnicsMenu').addClass('seekRightColumns');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
  $('.accessoriesMenu').removeClass('seekRightColumns');
  $('.tabletsMenu').removeClass('seekRightColumns');
  $('.brendsMenu').removeClass('seekRightColumns');
})

$(".tabletsOverlay *")
.mouseenter(function(){ 		
  $('.tabletsMenu').addClass('seekRightColumns');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
  $('.accessoriesMenu').removeClass('seekRightColumns');
  $('.tecnicsMenu').removeClass('seekRightColumns');
  $('.brendsMenu').removeClass('seekRightColumns');
})

$(".brendsOverlay *")
.mouseenter(function(){ 		
  $('.brendsMenu').addClass('seekRightColumns');
  $('.smartphonesMenu').removeClass('seekRightColumns');
  $('.laptopsMenu').removeClass('seekRightColumns');
  $('.accessoriesMenu').removeClass('seekRightColumns');
  $('.tecnicsOverlay').removeClass('seekRightColumns');
  $('.tabletsMenu').removeClass('seekRightColumns');
})

});



