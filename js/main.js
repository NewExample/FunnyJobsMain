$( document ).ready(function(){

$('.catalogButton').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
})

$('.exit').on('click', function(e) {
  e.preventDefault();
  $('.right').toggleClass('right_active');
  $('.menu').toggleClass('menu_active');
})

$(".catalogButton").mouseenter(function() {
	// навели курсор на объект (не учитываются переходы внутри элемента)	
	$('.menu').toggleClass('menu_active');
  $('.right').toggleClass('right_active');
});

$(".exit")
.mouseenter(function(){ 		
	// отвели курсор с объекта (не учитываются переходы внутри элемента)
  $('.right').removeClass('right_active');
  $('.menu').toggleClass('menu_active');
});

/**  $(".greyTerritory")
.mouseenter(function(){ 		
	// отвели курсор с объекта (не учитываются переходы внутри элемента)
  $('.right').removeClass('right_active');
  $('.menu').toggleClass('menu_active');
});
**/

});



