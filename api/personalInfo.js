(function($, doc) {
    $.init();
    $.ready(function() {
        var userPicker = new $.PopPicker();
        userPicker.setData([{
            value: 'female',
            text: 'Female'
        }, {
            value: 'male',
            text: 'Male'
        }]);
        var showUserPickerBtn = doc.getElementById('clickUserPicker');
        var showUserPickerButton = doc.getElementById('showUserPicker');
        var userResult = doc.getElementById('userResult');
        showUserPickerBtn.addEventListener('tap', function(event) {
            userPicker.show(function(items) {
                showUserPickerButton.innerText = items[0].text;
            });
        }, false);
    });

    document.getElementById("camera").addEventListener('change',function(){
        var fileData = this.children[0].files[0];
        var reader = new FileReader(),imgFile; 
        reader.onload=function(e) {  
         // alert('文件读取完成');  
            imgFile = e.target.result;  
            document.getElementById('showImg').src = imgFile;
        };  
        reader.readAsDataURL(fileData);
    });

})(mui, document);