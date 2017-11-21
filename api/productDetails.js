(function($) {
	mui.init({
		swipeBack:true //启用右滑关闭功能
	});

	mui.previewImage();
	var detailCarousel = new Swiper('.detail-banner-carousel',{
		autoplay: 4000,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		paginationClickable :true,
		pagination : '.swiper-pagination',
		paginationType : 'fraction'				
	});
	h('#goCartLogo').tap(function(){
		window.location.href= "./cart.html";
	});
	h('#readMore').tap(function(){
		window.location.href= this.href;
	});

	h('#chooseColor').tap(function(){
		h('#maskToPay').hide();
		h('#maskAddTo').hide();
		h('#maskAddPay').show();
		productChoosemask();
	});
	h('#addTo').tap(function(){
		h('#maskToPay').hide();
		h('#maskAddPay').hide();
		h('#maskAddTo').show();
		productChoosemask();
	});
	h('#toPay').tap(function(){
		
		h('#maskAddPay').hide();
		h('#maskAddTo').hide();
		h('#maskToPay').show();
		productChoosemask();
	});

	// 加入购物车
	h('#addCartBtn').tap(function(){
		mui.toast('加入购物车成功');
		var productId = h('#chooseInfo').attr('productId');
		var productNumber = h('#productNumber').val();
		var Category = '';
		h('#productClassList').find('span').each(function(obj){
		   
		    if(h(obj).hasClass('active')) {
		    	Category = h(obj).attr('Category');
		    }
		});
		console.log(productId,productNumber,Category);
		closeMask ();
	});
	h('#addCartBtn2').tap(function(){
		var productId = h('#chooseInfo').attr('productId');
		var productNumber = h('#productNumber').val();
		var Category = '';
		h('#productClassList').find('span').each(function(obj){
		    
		    if(h(obj).hasClass('active')) {
		    	Category = h(obj).attr('Category');
		    }
		});
		console.log(productId,productNumber,Category);
		mui.toast('加入购物车成功');
		closeMask ();
	});
	// 购买
	h('#toPayBtn').tap(function(){
		var productId = h('#chooseInfo').attr('productId');
		var productNumber = h('#productNumber').val();
		var Category = '';
		h('#productClassList').find('span').each(function(obj){
		   
		    if(h(obj).hasClass('active')) {
		    	Category = h(obj).attr('Category');
		    }
		});
		console.log(productId,productNumber,Category);
		closeMask ();
	});
	h('#toPayBtn2').tap(function(){
		var productId = h('#chooseInfo').attr('productId');
		var productNumber = h('#productNumber').val();
		var Category = '';
		h('#productClassList').find('span').each(function(obj){
		    
		    if(h(obj).hasClass('active')) {
		    	Category = h(obj).attr('Category');
		    }
		});
		console.log(productId,productNumber,Category);
		closeMask ();
	});
	// 点击关闭按钮关闭弹出层
	h('#closeChoose').tap(function(){
		closeMask ();
	});
	// 点击遮罩层关闭弹出层
	h('#detailMask').tap(function(){
		closeMask ();
	});

	// 关闭弹出层
	function closeMask () {
		h('#detailMask').hide();
		h('#chooseInfo').css({"bottom":'-420px'});
	}
	mui('#productClassList').on('tap',".leixing",function(){
		h('#productClassList').find('span').each(function(obj){
		    h(obj).removeClass('active');
		});
		h(this).addClass('active');
		h('#CategoryPrice').html(h(this).attr('price'));
		h('#inStock').html(h(this).attr('stock'));
		h('#CategoryPic').attr("src",h(this).attr('imgsrc'));
		h('#CategoryPic').attr("data-preview-src",h(this).attr('bigImgSrc'));
	})
	function productChoosemask() {
	// 弹出选择信息
		h('#detailMask').show();
		h('#chooseInfo').css({"bottom":0});
	}
	mui('.sub-add').on('tap','.sub',function(){
        var n = this.nextElementSibling.value || 2;
        console.log(n);
		var num = parseInt(n)-1;
        if (num == 1) {
           this.style.color = "#D5D5D5";
        }
		if(num==0){
            return;
        }
		this.nextElementSibling.value = num;
		return false;

    });
    mui('.sub-add').on('tap','.add',function(){
        this.previousElementSibling.previousElementSibling.style.color = "#A9A9A9";
	 	var n = this.previousElementSibling.value || 1;
	 	var num=parseInt(n)+1;
	 	this.previousElementSibling.value = num;
	 	return false;
    });
})(mui);