/**
 * 公共函数
 * 2015-3-25 14:23:24
 */
var com = (function () {
        // var $ = require('jquery'),
        //  conf = require('config');
        return {

                /**
                 * 控制音乐播放\暂停
                 * @param  {[type]} b [description]
                 * @return {[type]}   [description]
                 */
                playSound: function (b) {

                        if (!b) {
                                document.getElementById("media").pause();
                                $('.musicIco').removeClass('rotateAm');
                                conf.soundStatus = false;
                        } else {
                                document.getElementById("media").play();
                                $('.musicIco').addClass('rotateAm');
                                conf.soundStatus = true;
                        }
                },

                /**
                 * 保存用户信息
                 */
                saveUserInfo: function () {
                        /*require.async('./servers',function(servers){
                            servers.sendUserInfo();
                        });*/
                },

                /**
                 * 播放指定ID name的音乐
                 */
                playSoundID: function (idName) {
                        document.getElementById(idName).play();
                },


                /**
                 * 设置动画持续时间
                 * @param {[type]} o [操作对象]
                 * @param {[type]} t [持续时间]
                 */
                setDuration: function (o, t, ease) {
                        o.css({ 'animation-duration': t + 's', '-webkit-animation-duration': t + 's', });
                        if (ease) o.css({ 'animation-timing-function': ease, '-webkit-animation-timing-function': ease, });
                },

                /**
                 * 设置CSS3
                 * @param {[type]} obj    [要操作的对象]
                 * @param {[type]} f      [transform]
                 * @param {[type]} t      [transition]
                 * @param {[type]} attach [其它的属性对象]
                 */
                setCss3: function (obj, f, t, attach) {
                        var f = f || 'none',
                                t = t || 'none';
                        obj.css({ 'transform': f, 'transition': t, '-webkit-transform': f, '-webkit-transition': t });
                        if (attach) obj.css(attach);
                },

                /**
                 * 微信分享
                 */

                wxShare: function () {
                        _wxData.link = location.href.split('#')[0];

                        var desc;
                        var score = conf.userInfo.score;
                        if (score > 98) {
                                desc = '我拍大圣得了' + score + '分！听说可以领个大圣玩偶，你也来试试！';
                        } else {
                                desc = '我拍大圣得了' + score + '分！满98分就有机会获一个大圣玩偶，换个姿势再来一次～';
                        }
                        _wxData.desc = desc;
                        wxShare(_wxData, function () {
                                //执行微信分享
                        });
                },


               PreLoadImg: function (b, base, e) {
                        var c = 0,
                                a = {},
                                d = 0;
                        for (src in b) {
                                d++
                        }
                        for (src in b) {
                                a[src] = new Image();
                                a[src].onload = function () {
                                        if (++c >= d) {
                                                e(a)
                                        }
                                        // var pro = Math.round(c/d*100);

                                        //$('.progress .num span').text(pro)
                                        //$('.pointer').css({'-webkit-transform':'rotate('+pro*2.43+'deg)'})
                                };
                                a[src].onerror = function () {
                                        if (++c >= d) {
                                                e(a)
                                        }
                                }
                                a[src].src = base + b[src];
                        }
                }
        }
})();