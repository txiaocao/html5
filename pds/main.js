/**
 * 主程序
 * 2015年3月25日14:21:01
 */
define(function (require, exports, module) {
    // START_EV = "touchstart";
    START_EV = "click";
    //"use strict";
    // var $ = require('jquery');
    //     conf = require('config');
    //     com = require('common');

        
    //servers = require('servers')

    /**
     * 初始化
     */
    init = function () {
        //loading消失
        $('.loading').animate({ 'opacity': 0 }, 500, function () {
            //$('.loading').hide();
            $(this).remove();
        });

        $('header').delay(500).fadeIn();
        $('.main').fadeIn();
        
        
        /**
         * 控制音乐播放或暂停
         */
        /*
        $('.musicIco').on(START_EV,function(){
            conf.soundStatus=!conf.soundStatus;
            com.playSound(conf.soundStatus);
        })

        //添加音乐的文件来源
        function addSoundHtml(){
            //var soundInto='<audio id="media" loop="loop" src="sound/bg_music.mp3"></audio>';
            var soundInto='<audio id="media" loop="loop" src= "_static/music/bg_music.mp3"></audio>';
            $('body').append(soundInto);

            soundInto='<audio id="scan" src= "_static/music/scan.mp3"></audio>';
            $('body').append(soundInto);
        }

        addSoundHtml();


        //播放音乐
        com.playSound(true);

        $('body').one(START_EV,function(){
            if(!conf.soundStatus)com.playSound(true);
        })*/

        addEvent();
        rulePage();
        enterPage();

        //takePhotoCanvas();
    },

    /**
     * 进入页面
     */
    enterPage = function () {
        var amList = [];
        var $tipConImg = $('.tipCon img');
        var $startBtn = $('.main .enterGameBtn');
        com.setCss3($tipConImg);
        com.setCss3($startBtn);
        amList.push($tipConImg[0], $tipConImg[1], $startBtn[0]);
        window.setTimeout(function () {
            var len = amList.length;
            com.setDuration($(amList[0]), 1.2, 'ease');
            com.setDuration($(amList[1]), .8, 'ease');
            com.setDuration($(amList[2]), .8);
            $(amList[0]).addClass('lightSpeedIn animated');
            $(amList[1]).addClass('zoomIn animated');
            $(amList[2]).addClass('fadeInDown animated');
        }, 30)
    },

    /**
     * 规则页面
     */
    rulePage = function () {
        
        require.async('iscroll', function () {
            
//             var myScroll = new IScroll('#ruleCon', {
//                 scrollY: true,
//                 mouseWheel: true,
//                 scrollbars: true,
//                 shrinkScrollbars: 'scale',
//                 fadeScrollbars: true,
//             });
// 
//             /**
//              * 用来重新计算滚动的区域，防止不能滚动
//              */
//             $('#ruleCon').on(START_EV, onStart);
//             function onStart() { if (myScroll) myScroll.refresh(); }
        });
        
        $('.backBtn').on(START_EV, function () {
            //document.getElementById("ewm").classList.add("none");
            $('.rulePage,#ewm').fadeOut();
        })
    },

    /**
     * 添加事件
     */
    addEvent = function () {
        /**
         * 进入游戏
         */
        $('.enterGameBtn').on(START_EV, function () {
            transition(0, function () {
                transition(1)
            });
        })
        /**
         * 点击开始游戏
         */
        $('.startBtn').on(START_EV, function () {
            transition(2);
        })

        /**
         * 查看游戏规则
         */
        $('header .rightBtn').on("click", function () {
            //document.getElementById("ewm").classList.remove("none");
            $('.rulePage,#ewm').fadeIn();
        })


        /**
         * 舞台自适应
         */
        $(window).resize(function (event) {
            resizeHandler();
        });
        function resizeHandler() {
            var SH = $(window).height();
            var SW = $(window).width();
            conf.W = SW;
            conf.H = SH;
            $('#bayStage').height(SH);
        }
        resizeHandler();
    },

    /**
     * 游戏开始
     */
    gameBegin = function () {
        $('.takePhotoBtn').show();
        $('.takePhotoBtn').removeClass('lightSpeedIn')
        $('.step3').find('.countDown').hide();
        bayAm();

        $('.main').find('.enterGameBtn,.startBtn').hide();
    },

    /**
     * bayMax运动
     */
    bayAm = function () {

        var $bayRole = $('#bayRole'),
            ranNum = Math.floor(Math.random() * conf.bayImgList.length),
            bayW = 154,
            bayH = 205,
            speedV = 15 + Math.round(Math.random() * 10),
            speedR = 10 + Math.round(Math.random() * 10),
            //分数
            score = 0,
            bayObj = {
                x: conf.W / 2,
                y: -bayH,
                r: 0
            }


        var bayImg = conf.bayBasePath + conf.bayImgList[ranNum];

        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        $bayRole.css({ 'background-image': 'url(' + bayImg + ')', 'display': 'block' });
        var state = false;
        function draw() {
            bayObj.y += speedV;
            bayObj.r += speedR;
            if (bayObj.y < conf.H + 200) {
                com.setCss3($bayRole, 'translate(' + bayObj.x + 'px,' + bayObj.y + 'px) rotate(' + bayObj.r + 'deg)');
            } else {
                gameEnd();
                return false;
            }

            if (!state) window.requestAnimationFrame(draw);
        }

        draw();
        /**
         * 游戏结束
         * @return {[type]} [description]
         */
        function gameEnd() {
            conf.W = window.innerWidth;
            conf.H = window.innerHeight;
            state = true;
            var centerPointY = conf.H / 2 - 105,
                centerPointX = conf.W / 2;
            var offsetY = Math.abs(centerPointY - bayObj.y);

            $('.step3').find('.aim').fadeOut();
            $('.takePhotoBtn').hide();
            $('.takePhotoBtn').find('shine').removeClass('shineRotateAm');

            var $screenshot = $('.main .screenshot');
            var $sBay = $screenshot.find('.sBay');
            var ofX = bayObj.x - (conf.W / 2 - 534 / 2);
            var ofY = bayObj.y - (conf.H / 2 - 477 / 2 - 105);


            //$sBay.css({,'margin-left':bayObj.x-ofX,'margin-top':bayObj.y-ofY});
            com.setCss3($sBay, 'translate(' + (ofX) + 'px,' + (ofY) + 'px) rotate(' + bayObj.r + 'deg)', 'none', { 'background-image': 'url(' + bayImg + ')' })

            $screenshot.show();
            window.setTimeout(function () {
                var len = $screenshot.find('li').length;
                for (var i = 0; i < len; i++) {
                    com.setCss3($screenshot.find('li').eq(i), 'rotate(' + (4 * i) + 'deg)', 'all 0.6s ease');
                }
            }, 30)
            $screenshot.find('li span').show().fadeOut();

            $bayRole.hide();
            var $gameEnd = $('.main .gameEnd');
            $gameEnd.show();
           
           setTimeout(function(){
                $('.step3 .againBtn').show(999);
           },999);
           
            //游戏得分
            var score = ((1 - offsetY / centerPointY) * 100).toFixed(2);
            if (score < 0) score = 0;
            $gameEnd.find('.scoreNum').find('span').text(score);

            //保存大白信息
            conf.userInfo.x = ofX;
            conf.userInfo.y = ofY;
            conf.userInfo.r = bayObj.r;
            conf.userInfo.index = ranNum;
            //用户所得的分数
            conf.userInfo.score = score;

            /**
             * 保存用户信息
             */
            com.saveUserInfo();

            /**
             * 再来一次
             */
            $('.step3 .againBtn').on("click", function () {
                location.reload();
                $(this).hide();
                $gameEnd.hide();
                com.setCss3($screenshot.find('li'));
                $screenshot.hide();
                gameBegin();
                $('.step3').find('.aim').show();
            })

            wxShare(score);
        }

        //拍照
        $('.takePhotoBtn').on("touchstart", function () {
            gameEnd();
        })
    },

    

    /**
     * 判断事件是否发生在元素上
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    getEventPosition = function (ev) {
        var x, y;
        if (ev.layerX || ev.layerX == 0) {
            x = ev.layerX;
            y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
            x = ev.offsetX;
            y = ev.offsetY;
        }
        return { x: x, y: y };
    },

    /**
     * 过场动画
     */
    transition = function (node, callback) {
        var amList = [];
        if (node == 0) {
            var $tipConImg = $('.tipCon img');
            var $startBtn = $('.enterGameBtn');
            com.setCss3($tipConImg);
            com.setCss3($startBtn);
            amList.push($tipConImg[0], $tipConImg[1], $startBtn[0]);


            window.setTimeout(function () {
                var len = amList.length;
                com.setDuration($(amList[0]), 0.5);
                com.setDuration($(amList[1]), 0.8, 'ease-in-out');
                com.setDuration($(amList[2]), 0.8);
                $(amList[0]).addClass('lightSpeedOut animated');
                $(amList[1]).addClass('zoomOut animated');
                $(amList[2]).addClass('fadeOutDown animated');

                window.setTimeout(function () {
                    $('.tipCon').hide();
                }, 800)
                window.setTimeout(function () {
                    $('.startBtn').hide();
                    if (callback) callback();
                    $('.enterGameBtn').hide();
                }, 400)
            }, 30)
        } else if (node == 1) {
            var $startBtn = $('.startBtn');
            $startBtn.show();
            $startBtn.addClass('fadeInDown animated');
            var $step2 = $('.step2');
            //$step2.find('.t2,.bay,.scoreImg').hide();
            $step2.fadeIn('slow');
            //$step2.find('.scoreImg,.t2,.bay').fadeIn('slow');
            $('.mskBox').fadeIn('slow');

            $('.enterGameBtn').hide();
        } else if (node == 2) {
            var $step2 = $('.step2');
            var $step3 = $('.step3');
            $step2.fadeOut();
            $step3.fadeIn();
            $step3.find('.aim,.takePhotoBtn,.shine').hide();
            
            //gameBegin();
            //
            //
            var $step2 = $('.step2');
            var $step3 = $('.step3');

            $step3.find('.aim').show();
            var $takePhotoBtn = $step3.find('.takePhotoBtn');
            com.setDuration($takePhotoBtn, 0.5);
            $takePhotoBtn.show().addClass('lightSpeedIn animated');
            window.setTimeout(function () {
                $step3.find('.shine').show().addClass('shineRotateAm')
            }, 500)
            $step2.hide();

            countDown(4, gameBegin);
        }
    },

    /**
     * 游戏开始倒计时
     */
    countDown = function (n, callback) {
        var num = n - 1;
        var ease = 'all 0.4s';
        var $countDown = $('.step3').find('.countDown');
        if (num < 1) {
            com.setCss3($countDown, 'scale(0.8)', ease, { opacity: 0 });
            window.setTimeout(function () {
                if (callback) callback();
            }, 400)
            return;
        }

        $countDown.text(num);
        com.setCss3($countDown, 'scale(2)', '', { opacity: 0 });
        window.setTimeout(function () {

            com.setCss3($countDown, 'scale(1)', ease, { opacity: 1 });
        }, 30)
        window.setTimeout(function () {
            countDown(num, callback);
        }, 1000)
    }


    return {
        init: function () {
            /**
             * 大白加载完成
             */
             
             init();
           // com.PreLoadImg(conf.bayImgList, conf.bayBasePath, function () {
          //      init();
           // })
        }
    }
});