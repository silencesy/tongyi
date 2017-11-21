(function($, doc) {
	$.init();
	$.ready(function() {
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};					
		var showUserPickerButton = doc.getElementById('showUserPicker');
		var userResult = doc.getElementById('userResult');				
		//三级联动
		var cityPicker3 = new $.PopPicker({
			layer: 3
		});
		cityPicker3.setData(cityData3);
		var showCityPickerButton = doc.getElementById('showCityPicker3');
		var cityResult3 = doc.getElementById('cityResult3');
		showCityPickerButton.addEventListener('tap', function(event) {
			cityPicker3.show(function(items) {
				cityResult3.value = _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//输入框校验开始
		var subto = document.getElementById('subto');
		subto.addEventListener('tap',function() {
			var tel = /^1[34578]\d{9}$/;
			var name = document.getElementById('name').value;
			var theNumber = document.getElementById('number').value;
			var cityResult3 = document.getElementById('cityResult3').value;
			var theTextarea = document.getElementById('textarea').value;
			console.log(name,theNumber,cityResult3,theTextarea)
			if(name == '') {
				mui.toast('Please enter your name!');
				return false
			}else if(!tel.test(theNumber)) {
					mui.toast('Please enter a 11-digit vaild number!');
				return false
			}else if(cityResult3 == '') {
				mui.toast('Please select your region!');
				return false
			}else if(theTextarea == '') {		
				mui.toast('Please write down your detailed address!');
				return false
			}
			return mui.toast('ok');
		});
		//输入框校验结束				
	});
})(mui, document);	