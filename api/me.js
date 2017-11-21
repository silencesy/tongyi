mui('body').on('tap','a',function(){
    window.location.href = this.getAttribute('href');
});