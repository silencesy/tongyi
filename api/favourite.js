$(function(){
    $(".tab-btn >li").click(function(){
		$(".tab-btn >li").eq($(this).index()).addClass("tab-active").siblings().removeClass("tab-active");
		$(".tab-con >div").hide().eq($(this).index()).show();
	});
    $(".shops-right").click(function(){
		$(this).parent(".shops-list").css("display","none");
	});
});