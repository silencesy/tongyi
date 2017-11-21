$(function(){

    var homeBannerCarousel = new Swiper('.home-banner-carousel',{
		loop: true,
		autoplay: 4000,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		pagination : '.swiper-pagination',
		paginationClickable :true				
	});
    
    var $window = $(window),
     	$mainMenuBar = $('#mainMenuBar'),
      	$mainMenuBarAnchor = $('#mainMenuBarAnchor');
      	
  	$window.scroll(function() {
      	var window_top = $window.scrollTop();
      	var div_top = $mainMenuBarAnchor.offset().top;
      	console.log(div_top);
      	if (window_top > div_top) {
          	$mainMenuBar.addClass('stick');
          	$mainMenuBarAnchor.height($mainMenuBar.height());
      	}else {
          	$mainMenuBar.removeClass('stick');
          	$mainMenuBarAnchor.height(0);
      	}
		});
	
	$(".icon-shoucang").click(function(){
	  $(".icon-shoucang").toggleClass("icon-shoucang1");
	});
});