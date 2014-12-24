Crab
====

屏幕滑动

解决移动端屏幕滑动问题，目前支持上下左右四个方向的滑动。体积小，未压缩<3kb

###使用/USAGE
    /**
    * 创建Crab对象,参数为页面element id
    */
    var crab = new Crab('menu_body');
    
    crab.on('swipeleft', function () {
        alert('left');
    });
    crab.on('swiperight', function () {
        alert('right');
    });
    crab.on('swipebottom', function () {
        alert('bottom') ;
    });
    crab.on('swipetop', function () {
        alert('top');
    });

or

crab.on('swipeleft,swiperight,swipebottom,swipetop', function () {
        dosomething
    });
