$(function(){
	$(".del").click(function() {
        $(".z_mask").css("display","block");      
	});
	$(".z_sure").click(function() {
		$(".z_mask").css("display","none"); 
        $(".search-history").css("display","none");      
	});
	$(".z_cancel").click(function() {
        $(".z_mask").css("display","none");      
	});
	$("input").focus(function(){
    	$(".sc-footer").css("display","none");  
	})
	$("input").blur(function(){
    	$(".sc-footer").css("display","block");  
	})
});