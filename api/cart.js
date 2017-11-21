(function(mui) {
	mui.init({
		swipeBack:true //启用右滑关闭功能
	});

	// responseHeight ();

	// $(window).resize(function () {          
	//     responseHeight ();
	// });

	// function responseHeight () {
	// 	$('.product-list-info').each(function(index, el) {
	// 		$(this).height($('.mui-input-row.mui-checkbox img').height());
	// 	});
	// }
	
	//拖拽后显示操作图标，点击操作图标删除元素；
	var btnArray = ['Confirm', 'Cancel'];
	mui('#cartList').on('tap', '.mui-btn', function(event) {
		var elem = this;
		var li = elem.parentNode.parentNode;
		console.log(li);
		mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
			if (e.index == 0) {
				var i = 2;
				if (i===2) {
					
					li.parentNode.removeChild(li);
					cartIsEmpty ();
					checkedValues();
					AllLight();
				} else {
					mui.swipeoutClose(li);
					mui.toast('欢迎体验Hello MUI');
				}

			} else {
				setTimeout(function() {
					mui.swipeoutClose(li);
				}, 0);
			}
		});
	});
	
	mui('#header').on('tap', '.edit-btn', function(event) {
		var doneBtn = document.getElementById('doneBtn');
		var doDelete = document.getElementById('doDelete');
		var doDelete = document.getElementById('doDelete');
		doneBtn.style.display = 'block';
		// h('#doneBtn').show();
		toPay.style.display = 'none';
		doDelete.style.display = 'block';
		this.style.display = "none";
		mui('.product-buy-info').each(function(){
			this.style.display = "none";
		});
		mui('.sub-add').each(function(){
			this.style.display = "block";
		});
		$('.product-buy-info .number').each(function(index, el) {
			$(this).parents('.product-list-info').find('input').val($(this).text());
		});
		mui('.mui-table-view-cell').each(function(index, el) {
			mui.swipeoutClose(this);
		});
		sunAddColor ();

	});
	
	mui('#header').on('tap', '#doneBtn', function(event) {
		var editBtn = document.getElementById('editBtn');
		var doneBtn = document.getElementById('doneBtn');
		var doDelete = document.getElementById('doDelete');
		var doDelete = document.getElementById('doDelete');

		editBtn.style.display = 'block';
		doneBtn.style.display = 'none';
		toPay.style.display = 'block';
		doDelete.style.display = 'none';

		mui('.product-buy-info').each(function(){
			this.style.display = "block";
		});
		mui('.sub-add').each(function(){
			this.style.display = "none";
		});
		$('.product-buy-info .number').each(function(index, el) {
			$(this).parents('.product-list-info').find('input').val($(this).text());
		});
		mui('.mui-table-view-cell').each(function(index, el) {
			mui.swipeoutClose(this);
		});0
	});

	mui('#checkAll').on('tap', '#doDelete', function(event) {
		if($('input:checkbox[class=listCheckBox]:checked').length === 0) {
			mui.toast('请勾选要删除的商品');
		} else {
			mui.confirm('确认删除所有选中的商品', 'Hello MUI', btnArray, function(e) {
				if (e.index == 0) {
					$('input:checkbox[class=listCheckBox]:checked').each(function(index, el) {
						$(this).parents('.mui-table-view-cell').remove();
					});
					checkedValues();
					cartIsEmpty ();
					AllLight();
					cartIsEmpty ();
				}
			});
		}
	});

	mui('#checkAll').on('tap', '#toPay', function(event) {
		if($('input:checkbox[class=listCheckBox]:checked').length === 0) {
			mui.toast('请勾选要支付的商品');
		} else {
			// ajax
		}
	});
	
	


	
	mui('.settlement-box').on('change', 'input', function() {
		var value = this.checked;
		mui('.listCheckBox').each(function() {
			if (value) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		});
		checkedValues();

	});

	mui('.mui-table-view-cell').on('change', 'input', function() {
		AllLight();
		checkedValues();

	});


	
	//所有选项选中all亮 
	function AllLight() {
		var checkAllInput = document.getElementById('checkAllInput');
		var flag = 0;
		mui('.listCheckBox').each(function(index, el) {
			if (this.checked) {
				flag++;
			}
		});
		if(flag==mui('.listCheckBox').length) {
			checkAllInput.checked = true;
			
		} else {
			checkAllInput.checked = false;
			
		}
	}
	
	
	//购物车加减
	mui('.sub-add').on('tap','.sub',function(){
        var n = this.nextElementSibling.value || 2;
		var num = parseInt(n)-1;
        if (num == 1) {
           this.style.color = "#D5D5D5";
        }
		if(num==0){
            return;
        }
		this.nextElementSibling.value = num;
		setProductNumber(this);
		checkedValues();

    });

    mui('.sub-add').on('tap','.add',function(){
        this.previousElementSibling.previousElementSibling.style.color = "#A9A9A9";
	 	var n = this.previousElementSibling.value || 1;
	 	var num=parseInt(n)+1;
	 	this.previousElementSibling.value = num;
	 	setProductNumber(this);
	 	checkedValues();
    });
	

	mui('.mui-bar-tab').on('tap','a',function(){
        window.location.href = this.getAttribute('href');
    });
    mui('.product-list-info').on('tap','a',function(){
        window.location.href = this.getAttribute('href');
    });
	
	//购物车空跳转空购物车
    function cartIsEmpty () {
        if (mui('.mui-table-view-cell').length===0) {
            location.href="cart-empty.html";//跳到空的购物车页面
        }
    }

	
	//算总价格
    function checkedValues(){ 
		var arr=new Array(); 
		var arr2=new Array(); 
		var sumPriceNumber = 0;
		var checkbox=document.getElementsByClassName('listCheckBox');
		var sumPrice = document.getElementById('sumPrice');
		for(var i=0;i<checkbox.length;i++){ 
			if(checkbox[i].checked==true){ 
				arr.push($(checkbox[i]).siblings('.product-list-info').find('.price').text());
				arr2.push($(checkbox[i]).siblings('.product-list-info').find('.number').text());
			} 
		}
		for(var i=0;i<arr.length;i++){
			sumPriceNumber +=arr[i]*arr2[i];
		}
		sumPrice.innerText = sumPriceNumber;
	}

	function setProductNumber(element) {
		$(element).parents('.product-list-info').find('.number').text($(element).siblings('input').val());
	}

	function sunAddColor () {
		$('.sub-add input').each(function(index, el) {
			if($(this).val()>1) {
				$(this).prev().css({"color":"#A9A9A9"});
			}
		});
	}
    
})(mui);