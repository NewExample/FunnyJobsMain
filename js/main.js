$( document ).ready(function(){

$('.catalogButton').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
})

$('.right').on('click', function(e) {
  e.preventDefault();
  $('.right').toggleClass('right_active');
  $('.menu').toggleClass('menu_active');
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

/**  $(".greyTerritory")
.mouseenter(function(){ 		
	// отвели курсор с объекта (не учитываются переходы внутри элемента)
  $('.right').removeClass('right_active');
  $('.menu').toggleClass('menu_active');
});
**/

});



