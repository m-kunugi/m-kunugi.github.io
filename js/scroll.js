$(function() {
 
    //ページ内スクロール
    $(".scroll").click(function () {
        var i = $(".scroll").index(this)
        var p = $(".scroll-target").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'normal');
        return false;
    });
 
    //ページ上部へ戻る
    $(".pagetop").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'normal');
        return false;
    });
 
});