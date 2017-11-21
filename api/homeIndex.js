(function(mui) {
			var backTimer = null;
  		var isTop = true;
  		var clientHeight = document.documentElement.clientHeight;
  		var backBtn = document.getElementById('backBtn');
  		var getCode = document.getElementById('getCode');
		var countdown=60;
		search();
		getCode.addEventListener('tap',function(){
			var phoneNumber = document.getElementById('phoneNumber').value;
			var code = document.getElementById('code').value;
			if (!phoneNumber) {
				mui.toast('Please enter your number!');
				return;
			} else if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
				mui.toast("Please enter a 11-digit valid number!");
				return;
			}	
			settime(this);

		})
		mui.init({
			swipeBack:true //启用右滑关闭功能
		});

		//		底部页面跳转
		mui('body').on('tap','a',function(){
            window.location.href = this.getAttribute('href');
       	});
       

	   

        document.getElementById('backBtn').addEventListener('tap',function(){
       		 backTimer = setInterval(function(){
		      //获取滚动条距离顶部高度
		      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		      var ispeed = Math.floor(-osTop / 7);
		       
		      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
		      //到达顶部，清除定时器
		      if (osTop == 0) {
		        clearInterval(backTimer);
		      };
		      isTop = true;
		       
		    },20);
       });

		//返回按钮tap
		// backBtn.addEventListener('tap', function(e) {
		// 	mui.scrollTo(0,500);
		// });


       

		
		//		首页第一个轮播
        var homeBannerCarousel = new Swiper('.home-banner-carousel',{
			loop: true,
			autoplay: 4000,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			pagination : '.swiper-pagination',
			paginationClickable :true				
		});
		//		首页第二个轮播
		var homeProductCarousel = new Swiper('.home-product-carousel',{
	        scrollbar: '.swiper-scrollbar',
	        scrollbarHide: true,
	        slidesPerView: 'auto',
	        freeMode : true,
	        spaceBetween: 5,
	        slidesPerView: 3.2,
	        grabCursor: true
		});
		//搜索分类
		var userPicker = new mui.PopPicker();
		userPicker.setData([{
			value: 'All',
			text: 'All'
		},{
			value: 'Shops',
			text: 'Shops'
		}, {
			value: 'Products',
			text: 'Products'
		}, {
			value: 'Ticketing',
			text: 'Ticketing'
		}, {
			value: 'Coupons',
			text: 'Coupons'
		}]);
		var showUserPickerButton = document.getElementById('showUserPicker');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				showUserPickerButton.innerHTML = items[0].text + '<i class="iconfont icon-xiangxiajiantou fr"></i>';
			});
		}, false);

		function settime(obj) {   
			if (countdown == 0) {   
			    obj.removeAttribute("disabled");  
			    obj.style.backgroundColor = "#fc4002";  
			    obj.style.color = "#fff"; 
			    obj.innerText="Send code";   
			    countdown = 60;   
			    return;  
			} else {   
			    obj.setAttribute("disabled", true);
			    obj.style.backgroundColor = "#6A6A6A"; 
			    obj.style.color = "#fff";   
			    obj.innerText = countdown+ "s";   
			    countdown--;   
			}   
			setTimeout(function() {   
			    settime(obj);
			},1000);
		} 

		function search(){
		    var searchBox = document.querySelector('#searchBg');
		    var bannerBox = document.querySelector('.home-banner-carousel');
		    var height = bannerBox.offsetHeight;
		    window.onscroll = function(){
		        var top = document.body.scrollTop || document.documentElement.scrollTop;
		        console.log(top,height,bannerBox);
		        var opacity = 0;
		        if(top > height){
		            opacity = 0.95;
		        }
		        else{
		            opacity = 0.95 * (top/height);
		        }
		        if (top >= clientHeight) {
				  	backBtn.style.display = "block";
				} else {
				  	backBtn.style.display = "none";
				};
		        searchBox.style.background = "rgba(246,67,44,"+opacity+")";
		    }
		}

		// //滚动条滚动时触发
		// window.onscroll = function() {
		// //显示回到顶部按钮
		// var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		// if (osTop >= clientHeight) {
		//   	backBtn.style.display = "block";
		// } else {
		//   	backBtn.style.display = "none";
		// };
		// if(osTop < 300 && osTop > 0){
		// 	var opacity = Math.abs(osTop)/300;
		// 	// console.log(opacity);
		// 	document.getElementById('searchBg').style.opacity = opacity;
		// 	// console.log(searchBg);
		// }
		// if (osTop > 300) {
		// 	document.getElementById('searchBg').style.opacity = 1;
		// }
		// if (osTop < 50 && osTop > 0) {
		// 	document.getElementById('searchBg').style.opacity = 0;
		// }
		// // 回到顶部过程中用户滚动滚动条，停止定时器
		// if (!isTop) {
		//   clearInterval(backTimer);
		// };
		// isTop = false;

		// };
		})(mui);