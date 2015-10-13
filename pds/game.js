function resize() {
    var phoneW = parseInt(window.innerWidth), phoneScale = phoneW / 640, ua = navigator.userAgent;
    if (/Android (\d+\.\d+)/.test(ua)) {
        var version = parseFloat(RegExp.$1);
        if (version > 2.3) {
            console.log('<meta name="viewport" content="width=640, initial-scale=' + phoneScale + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
            //alert('<meta name="viewport" content="width=640, initial-scale='+phoneScale+', minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
        } else {
            console.log('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }
    } else {
        console.log('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }
}

function wxShare(score) {
    var WXTITLE = score + "分啊喂！大娃头套稳稳在路上了！";
    document.title = WXTITLE;
}

var hasTouch = 'ontouchstart' in window,
    //事件判断
    TAP_EV = hasTouch ? 'tap' : 'tap',
    START_EV = hasTouch ? 'touchstart' : 'click',
    MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
    END_EV = hasTouch ? 'touchend' : 'mouseup',
    SERVER_PATH = location.origin + location.pathname,
    BASE_PATH = location.origin + location.pathname;//项目的基址路径
// 项目配置
seajs.config({
    base: BASE_PATH,
    debug: true,
    alias: {
        'common': BASE_PATH + 'common',//公共函数
        'config': BASE_PATH + 'config',//全局参数
        'jquery': 'jquery-2.1.1.sea.min',
        'iscroll': 'iscroll.min'
    },
    'map': [
        [/^(.*\.(?:css|js))(.*)$/i, '$1?' + Math.random()]// [ /^(.*\.(?:css|js))(.*)$/i, '$1?v1.4' ]//
    ]
})
    
// window.onload=function(){
//     //page init
//     seajs.use('main', function(data) {
//         data.init();
//     });
// }
            
/*打印到控制台*/
function trace(str) {
    console.log(str)
}
    
// window.addEventListener('touchstart',banTouchScroll,false);
// function banTouchScroll(e){e.preventDefault()};
seajs.use('main', function (data) {
    data.init();
});