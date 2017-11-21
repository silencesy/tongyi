(function(mui) {
	var subto = document.getElementById('subto');
	subto.addEventListener('tap',function() {
		/*验证税号 15或者17或者18或者20位字母、数字组成*/
		var tel = /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/;
		var name = document.getElementById('name').value;
		var theTextarea = document.getElementById('textarea').value;
		var theNumber = document.getElementById('number').value;
		if(name == '') {
			mui.toast('Please enter your company name!');
			return false
		}else if(theTextarea == '') {		
			mui.toast('Please enter your company address!');
			return false
		}else if(!tel.test(theNumber)) {
			mui.toast('Please enter a right tax number!');
			return false
		}
		return mui.toast('ok');
	});
})(mui);