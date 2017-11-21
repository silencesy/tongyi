$('.wall').jaliswall({ item: '.waterfall' });
$("img.lazy").lazyload({
	effect: "fadeIn",
	failurelimit : 10
});

var startX, startY; 
document.addEventListener('touchstart',function (ev) { 
  	startX = ev.touches[0].pageX; 
  	startY = ev.touches[0].pageY; 
}, false); 
document.addEventListener('touchend',function (ev) { 
  	var endX, endY; 
  	endX = ev.changedTouches[0].pageX; 
  	endY = ev.changedTouches[0].pageY; 
  	var direction = GetSlideDirection(startX, startY, endX, endY); 
  	switch(direction) { 		
        case 0: 
            $('.jiantou2').css('color', '#ff0000');
            $('.jiantou1').css('color', '#8f8f94'); 
         	 break; 
        case 1: 
          	// 向上 
            $('.jiantou2').css('color', '#ff0000');
            $('.jiantou1').css('color', '#8f8f94');  
          	break; 
        case 2: 
          	// 向下 
          	$('.jiantou2').css('color', '#8f8f94');
          	$('.jiantou1').css('color', '#ff0000');
          	break; 
  
        default: 
  	} 
}, false);
function GetSlideDirection(startX, startY, endX, endY) { 
    var dy = startY - endY; 
    //var dx = endX - startX; 
    var result = 0; 
    if(dy>0) {//向上滑动 
    	result=1; 
    }else if(dy<0){//向下滑动 
        result=2; 
    }else{ 
        result=0; 
    } 
    return result; 
};