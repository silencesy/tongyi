var clipboard = new Clipboard('.copybtn');

clipboard.on('success', function(e) {
    mui.toast('复制成功');
    e.clearSelection();
});
 
clipboard.on('error', function(e) {
    mui.toast('复制失败');
});