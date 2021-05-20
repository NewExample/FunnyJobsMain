$( document ).ready(function(){

$('.catalogButton').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
})

$('.cross').on('click', function(e) {
  e.preventDefault();
  $('.right').toggleClass('right_active');
  $('.menu').toggleClass('menu_active');
})

$(".catalogButton").mouseenter(function() {
	// навели курсор на объект (не учитываются переходы внутри элемента)	
	$('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
});

$(".cross")
.mouseenter(function(){ 		
	// отвели курсор с объекта (не учитываются переходы внутри элемента)
  $('.right').removeClass('right_active');
  $('.menu').toggleClass('menu_active');
});

$('.buttonSearchHiden').on('click', function(e) {
  e.preventDefault();
  $('.hideSearch').toggleClass('hide');
  
})

/**  $(".greyTerritory")
.mouseenter(function(){ 		
	// отвели курсор с объекта (не учитываются переходы внутри элемента)
  $('.right').removeClass('right_active');
  $('.menu').toggleClass('menu_active');
});
**/

});



