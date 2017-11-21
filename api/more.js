mui.init({
	swipeBack:true //启用右滑关闭功能
});
mui('.mui-bar-tab').on('tap','a',function(){
    console.log(this.getAttribute('href'));
    window.location.href = this.getAttribute('href');
});