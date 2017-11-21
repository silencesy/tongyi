(function(mui) {
	mui.init();
	var loginBtn = document.getElementById('loginBtn');
	var getCode = document.getElementById('getCode');
	var countdown=60;
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
		$.ajax({
			url: 'http://proj7.thatsmags.com/Api/Public/mobileCode',
			type: 'POST',
			dataType: 'json',
			data: {mobile: phoneNumber},
		})
		.done(function(data) {
			var data = data;
			if (data.data == 107) {
				mui.toast("手机格式不正确");
				return false;
			}
			if (data.data == 109) {
				mui.toast("30分钟发送超过5次");
				return false;
			}
		})
		.fail(function() {
			mui.toast("数据请求失败，稍后再试!");
		});
		

	});
	loginBtn.addEventListener('tap',function(){
		var phoneNumber = document.getElementById('phoneNumber').value;
		var code = document.getElementById('code').value;
		if (!phoneNumber) {
			mui.toast('Please enter your number!');
			return;
		} else if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
			mui.toast("Please enter a 11-digit valid number!");
			return false;
		}
		if (!code) {
			mui.toast('Please enter the verification code!');
			return false;
		}
		$.ajax({
			url: 'http://proj7.thatsmags.com/Api/Account/mbLogin',
			type: 'POST',
			dataType: 'json',
			data: {mobile: phoneNumber,code: code},
		})
		.done(function(data) {
			var data = data;
			var isBindEmail = data.data.is_bind;
			console.log(data);
			if (data.data == 110) {
				mui.toast("验证码错误，请确认验证码或者重新获取验证码！");
				return false;
			} else if (data.data.is_bind == 0) {
				localStorage.setItem("isBindEmail",isBindEmail);
				localStorage.setItem("phoneNumber",phoneNumber);
				window.location.href = '../template/home-page.html';
				return false;
			} else if (data.data.is_bind == 1) {
				// localStorage.setItem("isBindEmail",isBindEmail);
				var token = data.data.token;
				localStorage.setItem("token",token);
				window.location.href = '../template/home-page.html';
				return false;
			}
		})
		.fail(function() {
			mui.toast("数据请求失败，稍后再试!");
		});

	})

	

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

	var userCode = getQueryString("code") || null;
	if (userCode) {
		$.ajax({
			url: 'http://proj7.thatsmags.com/Api/Account/thirdLogin',
			type: 'POST',
			dataType: 'json',
			data: {code: userCode}
		})
		.done(function(data) {
			alert(data);
		})
		.fail(function() {
			mui.toast("数据请求失败，稍后再试!");
		})
		
		
	}
	


	function getQueryString(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
		return null;
	}
})(mui);