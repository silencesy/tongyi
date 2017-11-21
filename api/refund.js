function imgChange(obj1, obj2) {
    var file = document.getElementById("file");
    var imgContainer = document.getElementsByClassName(obj1)[0];
    var fileList = file.files;
    var input = document.getElementsByClassName(obj2)[0];
    var imgArr = [];
    for (var i = 0; i < fileList.length; i++) {
        var imgUrl = window.URL.createObjectURL(file.files[i]);
        imgArr.push(imgUrl);
        var img = document.createElement("img");
        img.setAttribute("src", imgArr[i]);
        var imgAdd = document.createElement("div");
        imgAdd.setAttribute("class", "z_addImg");
        imgAdd.appendChild(img);
        imgContainer.appendChild(imgAdd);
    };
    imgRemove();
};

function imgRemove() {
    var imgList = document.getElementsByClassName("z_addImg");
    var mask = document.getElementsByClassName("z_mask")[0];
    var cancel = document.getElementsByClassName("z_cancel")[0];
    var sure = document.getElementsByClassName("z_sure")[0];
    for (var j = 0; j < imgList.length; j++) {
        imgList[j].index = j;
        imgList[j].onclick = function() {
            var t = this;
            mask.style.display = "block";
            cancel.onclick = function() {
                mask.style.display = "none";
            };
            sure.onclick = function() {
                mask.style.display = "none";
                t.style.display = "none";
            };
        }
    };
};
(function(mui) {
    //输入框校验开始
	var refundSubmit = document.getElementById('refundSubmit');

	refundSubmit.addEventListener('tap',function() {
	var refundTextarea = document.getElementById('refundTextarea').value;
		if(refundTextarea == '') {
			mui.toast('Reason of cancel cannot be empty');
			return false
		}
		return mui.toast('ok');
	});    
})(mui);