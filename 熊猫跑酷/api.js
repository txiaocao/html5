/**
 * Copyright 2014 51h5.com All rights reserved.
 */
!
function(e, t) {
    function n(e) {
        var t = Xt[e],
        n = Array.prototype.slice.call(arguments, 1);
        if (t) {
            t = t.slice(0);
            for (var o = 0,
            r = t.length; r > o; o++) t[o].apply(It, n)
        }
    }
    function o() {
        if (!Bt && !Nt) {
            Nt = !0,
            Rt.gameId = N("gameid"),
            Rt.appBanner = ut[dt] && ut[dt][3] ? "no": N("appbanner"),
            It.get("init",
            function() {
                Nt = !1,
                jt = localStorage.getItem(Ft + "guid");
                var e = N("key");
                return e && (At = e, Qt = At + "_"),
                At ? void It.get("bt",
                function(e) {
                    return e ? (Ct = e.token, jt = e.guid, localStorage.setItem(Ft + "guid", jt), void It.get("vt",
                    function(e) {
                        return e ? (Lt = e, Bt = !0, a(), Pt.forEach(function(e) {
                            c.apply(null, e)
                        }), void(Pt = null)) : void n("error", {
                            type: "init",
                            code: 102
                        })
                    })) : void n("error", {
                        type: "init",
                        code: 101
                    })
                }) : void n("error", {
                    type: "init",
                    code: 100
                })
            }),
            Rt.channelLogo = ut[dt] && ut[dt][0],
            Rt.channelAloneLogo = Rt.channelLogo && ut[dt][1];
            var e = N("splashscreen");
            return e && (Ht = parseInt(e, 10) || 0),
            Ht && It.splashscreen(Ht + (Rt.channelAloneLogo ? qt: 0)),
            "function" == typeof onHoowuReady && onHoowuReady(),
            It
        }
    }
    function r() {
        if (!It.is("wechat") && !("no" === (N("toolbar") || "").toLowerCase() || ut[dt] && ut[dt][2])) {
            var e = I(Yt);
            if (!e) {
                var t = [Yt + " {text-shadow:none;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;z-index: 99990;text-align: left;height: 0;width: 0;font-size: 13px;}", Yt + " * {padding: 0; margin: 0; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}", Yt + " .hw-bar {width: 170px; box-sizing: border-box; position: fixed; z-index: 99990; top: 10px; left: -190px; background-color: #FFF; box-shadow: 0 0 3px rgba(0,0,0,0.3);transition-property: left; transition-timing-function: ease-in; transition-duration: .3s;}", Yt + " .hw-bar.hw-bar-expand {left:0;}", Yt + " .hw-bar header {width: 100%; height: 36px; text-align: center; color: #FFF; background-color: #1399d2;}", Yt + " .hw-bar h4 {display: inline; line-height: 38px;}", Yt + " .hw-bar .hw-clip {display: block; position: absolute; z-index: 3000; height: 38px; width: 60px; top: 0; right: -60px; background-color: transparent;}", Yt + " .hw-bar .hw-clip-btn {height: 36px; background-color: #1399d2; box-shadow: 3px 0 3px rgba(0,0,0,0.2); position: relative; transition-property: width; transition-timing-function: ease-in; transition-duration: .3s;}", Yt + " .hw-bar .hw-clip-btn img {height: 30px; position: absolute; top: 3px; right: 5px;}", Yt + " .hw-bar nav ul {list-style: none; text-align: center;}", Yt + " .hw-bar nav a {font-size: 14px; line-height: 34px; text-decoration: none; display: block; font-weight: 700; color: #666; border-top: 1px solid #E5E5E5;}", Yt + " .hw-bar nav em {font-style: normal; color: #0080ff; margin: 0 2px;}", Yt + " .hw-bar nav strong {color: #f0404f;}", Yt + " .hw-bar nav .hw-btn-app {font-size: 12px; background: #F7F6F6;}", Yt + " .hw-bar nav .hw-btn-resume {font-size: 18px; font-weight: 900; color: #fff; background: #1399d2;}"];
                y(t.join("")),
                e = J.createElement("div"),
                e.id = Yt.slice(1),
                e.innerHTML = ['<div id="hw-bar" class="hw-bar">', "<header>", "<h4>\u706b\u821e\u6e38\u620f\uff0c\u4e3a\u672a\u6765\u800c\u751f</h4>", '<div class="hw-clip">', '<div class="hw-clip-btn"><img src="' + yt + '/images/home/logo200.png"></div>', "</div>", "</header>", "<nav>", "<ul>", It.env.app ? "": '<li><a href="#" class="hw-btn-app" data-action="app">\u5b89\u88c5<strong>\u706b\u821eAPP</strong>\uff0c\u4f53\u9a8c\u7cbe\u54c1\u6e38\u620f</a></li>', It.env.wechat ? '<li><a href="#" data-action="share">\u6311\u6218\u597d\u53cb</a></li>': "", '<li><a href="#" data-action="more">\u66f4\u591a\u6e38\u620f</a></li>', '<li><a href="#" class="hw-btn-resume" data-action="close">\u8fd4\u56de\u6e38\u620f</a></li>', "</ul>", "</nav>", "</div>"].join(" "),
                e.addEventListener(tt, R),
                e.addEventListener(ot, R),
                I("header", e).addEventListener(tt,
                function() {
                    U("toolbar", "click", "toggle"),
                    i()
                }),
                I("nav", e).addEventListener(nt,
                function(e) {
                    var t = e.target.getAttribute("data-action");
                    t && (e.preventDefault(), U("toolbar", "click", t)),
                    "app" === t ? It.download() : "share" === t ? (It.share(), i(!1)) : "follow" === t ? It.follow() : "more" === t ? It.more() : "close" === t && i(!1)
                }),
                I("body").appendChild(e),
                Rt.toolbarExpand = !1
            }
            return e
        }
    }
    function i(e) {
        var t = "boolean" === k(e) ? e: !Rt.toolbarExpand;
        t !== Rt.toolbarExpand && (Rt.toolbarExpand = t, I(Yt + " .hw-bar").className = "hw-bar" + (t ? " hw-bar-expand": ""))
    }
    function a() {
        var e = I($t);
        e || (e = J.createElement("iframe"), e.width = e.height = 1, e.style.display = "none", I("head").appendChild(e)),
        e.src = P(kt + "/apis-sso.html", {
            id: jt,
            t: At,
            bt: Ct,
            vt: Lt,
            _: Date.now()
        })
    }
    function s(e, t, n) {
        new Image(1, 1).src = P(xt + "/tj.gif", T({
            act: e,
            aop: t,
            id: jt || "",
            t: At || ""
        },
        n || {}))
    }
    function c(e, t, n, o) {
        var r = zt[t];
        if (r && !(0 === r & Ot[e])) {
            if (!Bt && "init" !== t && "bt" !== t && "vt" !== t) return void Pt.push(Array.prototype.slice.call(arguments));
            E(n) && (o = n, n = null);
            var i = Dt[t];
            if (i) {
                try {
                    i.abort()
                } catch(a) {}
                i = null,
                delete Dt[t]
            }
            Dt[t] = b(et, l(t, e), n, o)
        }
    }
    function l(e, t) {
        return kt + St + (t === Z ? "get": "set") + e + ".html"
    }
    function u(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function d(e) {
        var t, n = Rt.share.descCustom;
        e && n && (t = n.replace(/\{l\}/g, e.level || 1).replace(/\{ls\}/g, e.levels || 1).replace(/\{s\}/g, e.score || 0).replace(/\{t\}/g, e.time || 0).replace(/\{tt\}/g, e.title || "").replace(/\{r\}/g, Math.min(100, Math.max(0, e.rate || 0)))),
        t && It.setShare({
            desc: t
        })
    }
    function p(e) {
        var t = null,
        o = h(),
        r = "none" !== o.style.display;
        if ("boolean" === k(e) ? e !== r && (t = e ? 1 : 0) : t = r ? 0 : 1, null !== t) {
            o.style.display = t ? "block": "none",
            n("splashscreen." + (t ? "show": "hide"));
            var i = A(".inner", o);
            i[0].style.display = t ? "block": "none",
            Rt.channelAloneLogo && t && i.length > 1 && (clearTimeout(en), en = setTimeout(function() {
                i[1].style.display = "block",
                i[0].parentNode.removeChild(i[0]),
                i = null
            },
            qt))
        }
    }
    function h() {
        var e = I(tn);
        if (!e) {
            var t = N("author");
            t && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            var n = [tn + " {position:fixed;left:0;top:0;z-index:9947483646;width:100%;height:100%;box-sizing:border-box;color:#fff;text-shadow:none;font-family:'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;}", tn + " .inner {display:none;position:relative;top:0;width:100%;height:100%;padding-top:80px;pointer-events:none;background: #fff;}", tn + " .inner[data-ui~=day] {background: #167de6;}", tn + " .inner[data-ui~=night] {background: #2c2a2a;}", tn + " .inner[data-ui~=alone] {padding-top:0;}", tn + " .inner[data-ui~=alone] img {width: auto;height: auto;position: absolute;top: 40%;left: 50%;margin:-100px auto auto -130px;}", tn + " img {display:block;margin:10px auto 30px;height:80px;width:auto;}", tn + " p {font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}", tn + " .hw_info {font-size: 12px;color: rgba(255,255,255,.7);}", tn + " .progress {height:20px;overflow:hidden;margin: 5px 10px;background-color:#f5f5f5;border-radius:4px;box-sizing:border-box;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);}", tn + " .progress .bar {float:left;min-width:20px;height:100%;line-height:20px;font-size:12px;text-align:center;color:#fff;box-sizing:border-box;background-color:#428bca;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease;-webkit-transition:width .6s ease;-o-transition:width .6s ease;}"];
            y(n.join("")),
            e = J.createElement("div"),
            e.id = tn.slice(1),
            e.style.display = "none";
            var o = (new Date).getHours();
            o = 6 > o || o > 20 ? "night": "day",
            e.innerHTML = Rt.channelLogo && Rt.channelAloneLogo ? ['<div class="inner" data-ui="alone">', '<img src="' + yt + "/images/home/loading_" + ut[dt][0] + '.png">', "</div>", '<div class="inner" data-ui="alone ' + o + '">', '<img src="' + yt + '/images/home/loading_hoowu.png" >', "</div>"].join("") : ['<div class="inner" data-ui="' + o + '">', '<img src="' + yt + '/images/home/logo_wr_220x100_black.png" height="80">', Rt.channelLogo && !Rt.channelAloneLogo ? '<img src="' + yt + "/images/home/logo_" + ut[dt][0] + '.png" height="80">': "", t ? "<p><strong>\u706b\u821e\u6e38\u620f</strong> &bull; <strong>" + t + "</strong> \u539f\u521b\u51fa\u54c1</p><p>\u8f6c\u8f7d\u8bf7\u7ecf\u8fc7\u6388\u6743\uff0c\u4fb5\u6743\u5fc5\u7a76</p>": "<p>\u706b\u821e\u6e38\u620f &bull; \u4e3a\u672a\u6765\u800c\u751f</p>", '<p class="hw_info">\u6e38\u620f\u8f7d\u5165\u4e2d...</p>', '<div class="progress" style="display:none;"><div class="bar">0%</div></div>', "</div>"].join(""),
            e.addEventListener(tt, R),
            e.addEventListener(ot, R),
            I("body").appendChild(e)
        }
        return e
    }
    function f(e) {
        var t, o = g(),
        r = "none" !== o.style.display;
        "boolean" === k(e) ? e !== r && (t = e ? "block": "none") : t = r ? "none": "block",
        t && (o.style.display = t, n("orientation." + ("none" === t ? "hide": "show")))
    }
    function g() {
        var e = I(rn);
        if (!e) {
            var t = [rn + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.8);}", rn + " .inner {width:100%;height:100%;padding-top:200px;pointer-events:none;}", rn + " .tip {position:absolute;left:50%;margin-left:-88px;width:200px;z-index:9999;}", rn + " p {color:#4a87ee;font-size:16px;line-height:24px;text-align:center;margin:10px auto;padding:0 10px;}"];
            y(t.join("")),
            e = J.createElement("div"),
            e.id = rn.slice(1),
            e.style.display = "none",
            e.innerHTML = ['<div class="inner">', '<img src="' + yt + '/images/orientation.png" class="tip">', "</div>"].join(" "),
            e.addEventListener(tt, R),
            e.addEventListener(ot, R),
            I("body").appendChild(e)
        }
        return e
    }
    function m() {
        clearTimeout(sn),
        sn = setTimeout(function() {
            var t = !0,
            o = e.orientation;
            if (0 === o || 180 === o) t = !0;
            else if ( - 90 === o || 90 === o) t = !1;
            else {
                var r = B();
                t = r.h > r.w
            }
            null === nn ? nn = t: nn !== t && (nn = t, n("orientation", t)),
            "boolean" == typeof on && f(t !== on)
        },
        an)
    }
    function v(t, o) {
        t && o && !Rt.banner && (S(o) && (o = I("#" + o)), J.documentElement.contains(o) && ((e.BAIDU_DUP = e.BAIDU_DUP || []).push(["fillAsync", t, o]), Rt.banner = !0, n("banner.set")))
    }
    function b(t, n, o, r) {
        var i = new XMLHttpRequest;
        return t === Z && o && (n = P(n, o), o = null),
        i.open(t, n, !0),
        At && i.setRequestHeader("X-KEY", At),
        (Ct || Lt) && i.setRequestHeader("X-TOKEN", Lt || Ct),
        jt && i.setRequestHeader("X-GUID", jt),
        t === et && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        r && (i.onerror = i.onabort = function() {
            w(i),
            r(null, 500, i)
        },
        i.onload = function() {
            w(i);
            var t = i.status;
            if (t >= 200 && 300 > t || 304 == t) {
                var n, o = i.responseText;
                try {
                    n = JSON.parse(o)
                } catch(a) {
                    e[Mt](o)
                }
                if (n && n.url) return void(location.href = n.url);
                n && 1 === n.status ? r(n.data || "", n.status, i) : r(null, n.status, i)
            } else r(null, t, i)
        }),
        i.send(e.FormData && o instanceof FormData ? o: S(o) ? o: D(o)),
        i
    }
    function w(e) {
        e.onload = e.onabort = e.onerror = e.ontimeout = null
    }
    function y(e, t) {
        var n;
        t = t || J,
        n = t.createElement("style"),
        n.type = "text/css",
        t.getElementsByTagName("head")[0].appendChild(n),
        n.styleSheet ? n.styleSheet.cssText = e: n.appendChild(t.createTextNode(e))
    }
    function x(e, t) {
        e = e.trim(),
        t = t || {};
        var n = J.createElement("script");
        n.charset = t.charset || "utf-8",
        n.defer = "defer",
        n.async = "async";
        var o = D(t.data);
        e += o ? (e.indexOf("?") ? "&": "?") + o: "",
        n.src = e;
        var r = J.getElementsByTagName("head")[0];
        r ? r.appendChild(n) : (r = J.getElementsByTagName("script")[0], r && r.parentNode.insertBefore(n, r))
    }
    function k(e) {
        return null == e ? String(e) : Tt[Object.prototype.toString.call(e)] || "object"
    }
    function S(e) {
        return "string" === k(e)
    }
    function E(e) {
        return "function" === k(e)
    }
    function _(e) {
        return "object" === k(e) && Object.getPrototypeOf(e) === Object.prototype
    }
    function M(e, t) {
        Object.keys(e).forEach(function(n) {
            t(n, e[n])
        })
    }
    function T(e, t) {
        return M(t,
        function(t, n) {
            e[t] = n
        }),
        e
    }
    function I(e, t) {
        return S(e) ? (t = t || J, t.querySelector(e)) : e
    }
    function A(e, t) {
        return S(e) ? (t = t || J, [].slice.call(t.querySelectorAll(e), 0)) : e
    }
    function C(e) {
        return "string" == typeof e && "" !== e
    }
    function L(e) {
        return C(e)
    }
    function j(t) {
        var n = e.location.search.substr(1).match(new RegExp("(^|&)" + t + "=([^&]*)(&|$)"));
        return n ? decodeURIComponent(n[2]) : null
    }
    function O(e, t) {
        if (C(e)) {
            var n = String(J.cookie).match(new RegExp("(?:^|)" + e + "(?:(?:=([^;]*))|;|$)"));
            if (n) return (n = n[1]) ? t ? decodeURIComponent(n) : n: ""
        }
        return null
    }
    function z(e, t) {
        return t = t || {},
        O(L(e) ? e: "", !t.raw)
    }
    function D(e) {
        var t = [];
        return M(e || {},
        function(e, n) {
            Array.isArray(n) || (n = [n]),
            n.forEach(function(n) {
                t.push(e + "=" + encodeURIComponent(n))
            })
        }),
        t.join("&")
    }
    function P(e, t) {
        S(t) || (t = D(t)),
        e = e.split("#");
        var n = e[1];
        return e = e[0],
        t && (e += e.indexOf("?") >= 0 ? "&": "?", e += t + (n ? "#" + n: "")),
        e
    }
    function R(e) {
        e && (e.preventDefault(), e.stopPropagation())
    }
    function B() {
        return {
            w: e.innerWidth,
            h: e.innerHeight
        }
    }
    function N(e, t) {
        var n = I('meta[name="x-' + e + '"]');
        return n ? (n.getAttribute(t ? "data-" + t: "content") || "").trim() : null
    }
    function U(t) {
        var n = [V + "trackEvent", t].concat(Array.prototype.slice.call(arguments, 1).map(function(e) {
            return t + V + e
        })); ["hmt", "czc"].forEach(function(t) {
            var o = e[V + t];
            o && o.push(n)
        })
    }
    function H(e, t) {
        e = e.split("."),
        t = t.split(".");
        for (var n = 0,
        o = Math.max(e.length, t.length); o > n; n++) if (e[n] = parseInt(e[n], 10) || 0, t[n] = parseInt(t[n], 10) || 0, e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0
    }
    for (var q = ":",
    F = "/",
    Q = ".",
    W = "-",
    V = "_",
    X = "1",
    Y = "5",
    G = [], K = 97; 122 > K; K++) G.push(String.fromCharCode(K));
    var J = e.document,
    Z = "GET",
    et = "POST",
    tt = "touchstart",
    nt = "touchend",
    ot = "mousedown",
    rt = location.protocol,
    it = location.hostname,
    at = location.pathname,
    st = e.navigator.userAgent,
    ct = G[7] + G[19] + G[19] + G[15] + q + F + F,
    lt = Q + G[2] + G[14] + G[12],
    ut = {
        1003 : ["ishanku"],
        1004 : ["uc", !1, !0, !0],
        1005 : ["", !1, !1, !0],
        1006 : ["", !1, !1, !0],
        1007 : [],
        1008 : [],
        1009 : [],
        1010 : [],
        1011 : "",
        1012 : ["chetuobang"],
        1013 : ["youxiduo"],
        1014 : ["", !1, !0, !0],
        1015 : ["", !1, !0, !0],
        1016 : ["weibo", !0, !0, !0],
        1019 : ["", !1, !1, !0],
        1021 : ["meiriq", !1, !0],
        1022 : ["8864"],
        1025 : ["luoboyou"],
        1026 : [],
        2003 : ["swjoy"]
    },
    dt = 0 | j("f"),
    pt = /(?:51h5|wanh5|h5hero|h5wenhua|h5jiaoyu|h5jiaju)\.com$/.test(it),
    ht = "i1.wanh5.com" === it || /(?:\d+\.){3}\d+/.test(it) || /^dev\./.test(it),
    ft = ht ? G[3] + G[4] + G[21] + Q: "",
    gt = ct + ft + Y + X + G[7] + Y + lt,
    mt = gt + F + G[22] + G[23],
    vt = gt + F + G[0] + G[15] + G[15] + W + G[3] + G[14] + G[22] + G[13] + G[11] + G[14] + G[0] + G[3] + Q + G[7] + G[19] + G[12] + G[11],
    bt = gt + F + G[22] + G[23] + W + G[3] + G[14] + G[22] + G[13] + Q + G[7] + G[19] + G[12] + G[11],
    wt = "http://mp.weixin.qq.com/s?__biz=MzAwODE2MzEwMQ==&mid=202092460&idx=1&sn=5a901ce32da0c3f7bdb8230e5993beb3#rd",
    yt = (ct + ft + G[9] + G[20] + G[12] + G[15] + Q + Y + X + G[7] + Y + lt, ct + ft + G[18] + G[19] + G[0] + G[19] + G[8] + G[2] + Q + G[22] + G[0] + G[13] + G[7] + Y + lt),
    xt = ct + "tongji" + Q + Y + X + G[7] + Y + lt,
    kt = ct + ft + G[0] + G[15] + G[8] + Q + Y + X + G[7] + Y + lt,
    St = F + G[0] + G[15] + G[8] + G[18] + W,
    Et = rt + "//" + location.host,
    _t = Et + at.replace(/\/([^\/]+\.\w+)$/, "/").replace(/\w+$/, "$1/"),
    Mt = G[4] + G[21] + G[0] + G[11],
    Tt = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e) {
        Tt["[object " + e + "]"] = e.toLowerCase()
    });
    var It = e.ih5game = {};
    It.ver = "1.4",
    It.channel = dt,
    It.server = ft,
    It.getQuery = j,
    It.getParams = D,
    It.getXMeta = N,
    It.getScript = x;
    var At, Ct, Lt, jt, Ot = {
        GET: 1,
        SET: 2
    },
    zt = {
        init: 1,
        bt: 1,
        vt: 1,
        ui: 1,
        gv: 1,
        jf: 3,
        ph: 1,
        ok: 1,
        data: 3,
        title: 1,
        tc: 2,
        guc: 3,
        gpd: 3,
        dtc: 1,
        grlg: 1
    },
    Dt = {},
    Pt = [],
    Rt = {
        gameId: null,
        bestScore: 0,
        nick: "\u706b\u821e\u73a9\u5bb6",
        share: {
            img: N("share-icon"),
            title: N("share-title"),
            titleCustom: N("share-title", "custom"),
            desc: N("share-desc"),
            descCustom: N("share-desc", "custom"),
            link: N("share")
        }
    },
    Bt = !1,
    Nt = !1,
    Ut = !1,
    Ht = 3e3,
    qt = 1500,
    Ft = "51h5_",
    Qt = Ft,
    Wt = "51h5_user",
    Vt = "wx_user",
    Xt = {};
    It.on = function(e, t) {
        return Xt[e] = Xt[e] || [],
        Xt[e].push(t),
        It
    },
    It.once = function(e, t) {
        function n() {
            It.off(e, n),
            t.apply(this, arguments)
        }
        return n.listener = t,
        It.on(e, n),
        It
    },
    It.off = function(e, t) {
        if (0 === arguments.length) return Xt = {},
        It;
        var n = Xt[e];
        if (!n) return It;
        if (1 === arguments.length) return delete Xt[e],
        It;
        for (var o, r = 0; r < n.length; r++) if (o = n[r], o === t || o.listener === t) {
            n.splice(r, 1);
            break
        }
        return It
    },
    It.env = {},
    It.is = function(e) {
        return e = e.toLowerCase(),
        It.env.hasOwnProperty(e) && It.env[e] ? !0 : !1
    },
    function(e) {
        var t = (st.match(/Web[kK]it[\/]{0,1}([\d.]+)/), st.match(/(Android);?[\s\/]+([\d.]+)?/)),
        n = ( !! st.match(/\(Macintosh\; Intel /), st.match(/(iPad).*OS\s([\d_]+)/)),
        o = st.match(/(iPod)(.*OS\s([\d_]+))?/),
        r = !n && st.match(/(iPhone\sOS)\s([\d_]+)/),
        i = st.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        a = st.match(/Windows Phone ([\d.]+)/),
        s = (i && st.match(/TouchPad/), st.match(/Kindle\/([\d.]+)/), st.match(/Silk\/([\d._]+)/), st.match(/(BlackBerry).*Version\/([\d.]+)/)),
        c = st.match(/(BB10).*Version\/([\d.]+)/),
        l = (st.match(/(RIM\sTablet\sOS)\s([\d.]+)/), st.match(/PlayBook/)),
        u = st.match(/Chrome\/([\d.]+)/) || st.match(/CriOS\/([\d.]+)/),
        d = st.match(/Firefox\/([\d.]+)/),
        p = st.match(/MSIE\s([\d.]+)/) || st.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        h = !u && st.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        f = (h || st.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/), st.match(/MicroMessenger\/([\d.]+)/)),
        g = (st.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/) || st.match(/baiduboxapp\/([\d.]+)/) || st.match(/BaiduHD\/([\d.]+)/) || st.match(/FlyFlow\/([\d.]+)/) || st.match(/baidubrowser\/([\d.]+)/), st.match(/MQQBrowser\/([\d.]+)/) || st.match(/QQ\/([\d.]+)/), st.match(/UCBrowser\/([\d.]+)/), st.match(/SogouMobileBrowser\/([\d.]+)/), t && st.match(/MiuiBrowser\/([\d.]+)/), st.match(/LBKIT/), st.match(/Mercury\/([\d.]+)/), st.match(/Html5Plus\/([\d.]+)/)),
        m = st.match(/__weibo__([\d.]+)__/);
        m && (e.weibo = m[1]),
        f && (e.wechat = f[1]),
        a && (e.wp = a[1]),
        t && (e.android = t[2]),
        n && (e.ipad = n[2].replace(/_/g, ".")),
        o && (e.ipod = o[3].replace(/_/g, ".") || null),
        r && (e.iphone = r[2].replace(/_/g, ".")),
        (e.ipod || e.iphone || e.ipad) && (e.ios = !0),
        g && (e.app = g[1]),
        st.match(/mso_app/i) && (e.mso = "1.0"),
        /\s+weico/i.test(st) && (e.weico = "1.0"),
        e.tablet = !!(n || l || t && !st.match(/Mobile/) || d && st.match(/Tablet/) || p && !st.match(/Phone/) && st.match(/Touch/)),
        e.phone = !(e.tablet || e.ipod || !(t || r || i || s || c || u && st.match(/Android/) || u && st.match(/CriOS\/([\d.]+)/) || d && st.match(/Mobile/) || p && st.match(/Touch/)))
    } (It.env),
    It.storage = {
        driver: "localStorage" in e ? localStorage: null,
        get: function(e) {
            return this.driver ? this.driver.getItem(Qt + e) : null
        },
        set: function(e, t, n) { ! this.driver || !e || n && null !== this.get(e) || this.driver.setItem(Qt + e, t)
        },
        remove: function(e) {
            this.driver && e && null !== this.get(e) && this.driver.removeItem(Qt + e)
        },
        clear: function() {
            if (this.driver) for (var e in this.driver) 0 === e.indexOf(Qt) && this.driver.removeItem(e)
        }
    },
    e.addEventListener("storage",
    function(e) {
        if (At) {
            var t = e.key;
            if (t && 0 === t.indexOf(Qt)) {
                var o = {
                    key: t.slice(Qt.length),
                    from: e.oldValue,
                    to: e.newValue,
                    time: e.timeStamp,
                    url: e.url
                };
                null === o.from ? n("storage.add", {
                    key: o.key,
                    value: o.to,
                    time: o.time,
                    url: o.url
                }) : null === o.to ? n("storage.remove", {
                    key: o.key,
                    time: o.time,
                    url: o.url
                }) : n("storage.change", o),
                n("storage", o)
            }
        }
    }),
    It.config = function(e, t) {
        if (_(e)) for (var n in e) It.config(n, e[n]);
        else "nickName" === e && t && (Rt.nick = t);
        return It
    },
    It.init = function() {},
    It.ssoFinish = function(e) {
        It.getUser(function(e) {
            e && e.name && (Rt.nick = e.name)
        }),
        n("sso", e),
        n("init")
    },
    It.ready = function(e) {
        return Ut ? e && e() : It.once("ready", e),
        It
    },
    /complete|loaded|interactive/.test(J.readyState) && J.body ? Ut = !0 : J.addEventListener("DOMContentLoaded",
    function() {
        Ut = !0,
        n("ready")
    },
    !1);
    var Yt = "#hw-toolbar";
    It.ready(r);
    var $t = "#ih5game_sso";
    It.get = function(e, t, n) {
        var o = It[Z.toLowerCase() + u(e)];
        return o ? o(t, n) : c(Z, e, t, n),
        It
    },
    It.set = function(e, t, n) {
        var o = It[et.toLowerCase() + u(e)];
        return o ? o(t, n) : c(et, e, t, n),
        It
    };
    var Gt = [0, 0, 0, 0, 0, 0, 0];
    It.start = function(e) {
        return Gt[0] || (Gt[0] = Date.now()),
        Gt[1] = Date.now(),
        Gt[2] = Gt[3] = 0,
        s("game", "start", e),
        n("status.start", e),
        It
    },
    It.resume = function(e) {
        Gt[2] && (Gt[2] = 0, s("game", "resume", e), n("status.resume", e))
    },
    It.pause = function(e) {
        return Gt[2] || (Gt[2] = Date.now(), s("game", "pause", e), n("status.pause", e)),
        It
    },
    It.stop = function(e) {
        return Gt[3] || (Gt[3] = Date.now(), Gt[1] = Gt[2] = 0, s("game", "stop", e), n("status.stop", e)),
        It
    },
    It.levelUp = function(e) {
        e = e || {};
        var t = e.level || 1;
        if (t > Gt[4]) Gt[4] = t;
        else if (!e.force) return It;
        return s("game", "levelup", e),
        n("status.levelup", e),
        It
    },
    It.complete = function(e) {
        return Gt[5] = Date.now(),
        s("game", "complete", e),
        n("status.complete", e),
        It
    },
    It.mute = function(e) {
        return Gt[6] || (Gt[6] = 1, s("game", "mute", e), n("status.mute", e)),
        It
    },
    It.unmute = function(e) {
        return Gt[6] && (Gt[6] = 0, s("game", "unmute", e), n("status.unmute", e)),
        It
    },
    It.on("status.stop", d).on("status.levelup", d).on("status.complete", d);
    var Kt, Jt = "#hw_share";
    It.share = function(e) {
        clearTimeout(Kt);
        var t = I(Jt);
        if (t) {
            var o;
            e && (o = t.querySelector("p:last-child")) && (o.innerHTML = e)
        } else {
            var r = It.env.mso,
            i = [Jt + " {position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;box-sizing:border-box;background:rgba(0,0,0,0.85);}", Jt + " .inner {width:100%;height:100%;padding-top:100px;pointer-events:none;}", Jt + " .hw_arron {position:absolute;z-index:9999;width:100px;}", Jt + " .hw_arron_rt {top:3px;right:18px;}", Jt + " .hw_arron_rb {bottom:3px;right:18px;}", Jt + " p {color:#fff;font-size:24px;text-align:center;margin:5px auto;padding:0;}"];
            y(i.join("")),
            t = J.createElement("div"),
            t.id = Jt.slice(1),
            t.innerHTML = ['<div class="inner">', '<img src="' + yt + "/images/home/" + (r ? "arron_rb": "arron_rt") + '.png" class="hw_arron ' + (r ? "hw_arron_rb": "hw_arron_rt") + '">', r ? "<p>\u8bf7\u70b9\u51fb\u53f3\u4e0b\u89d2</p><p>\u5206\u4eab\u7ed9\u597d\u53cb</p>": "<p>\u544a\u77e5\u5c0f\u4f19\u4f34\uff0c\u5171\u4eab\u597d\u751f\u6d3b</p>", '<p style="margin: 20px auto;">' + (e || "\u706b\u821e\u6e38\u620f \u4e3a\u672a\u6765\u800c\u751f<br/><br/>" + gt.replace(ct, "")) + "</p></div>"].join(" "),
            t.addEventListener(tt, R),
            t.addEventListener(ot, R);
            var a = t.querySelector(".inner");
            a && (a.addEventListener(tt, It.hideShare), a.addEventListener(ot, It.hideShare)),
            I("body").appendChild(t)
        }
        return It.wx.showOptionMenu(),
        t.style.display = "block",
        n("share.show"),
        Kt = setTimeout(function() {
            t.querySelector(".inner").style.pointerEvents = "auto"
        },
        500),
        It
    },
    It.env.weico && (It.share = function() {
        location.href = "weico3://compose?action=present&type=weibo&content=" + It.getShare("desc") + "&gameid=" + Rt.gameId
    }),
    It.hideShare = function() {
        var e = I(Jt);
        return e && (e.style.display = "none", e.querySelector(".inner").style.pointerEvents = "none", n("share.hide")),
        It
    },
    It.more = function(e) {
        var t = It.env.wechat ? mt: gt;
        return e ? t: void(location.href = t)
    },
    It.home = function(t) {
        return t ? gt: void(e.location.href = gt)
    },
    It.follow = function(t) {
        return t ? wt: void(e.location.href = wt)
    },
    It.download = function(t) {
        var n = It.env.wechat ? bt: vt;
        return t ? n: void(e.location.href = n)
    },
    It.rank = function() {},
    It.progress = function(e, t) {
        var o = I(tn);
        if (!o) return It;
        var r = I(".progress", o);
        return r ? ("none" === r.style.display && (r.style.display = "block"), t = S(t) ? t.trim() : "", t && (r = I(".hw_info", o)) && (r.innerText = t), e = "number" === k(e) ? Math.min(100, Math.max(0, e)) : -1, e >= 0 && (r = I(".progress .bar", o)) && (r.innerText = e + "%", r.style.width = e + "%", n("progress", e, t)), It) : It
    },
    It.splashscreen = function(e) {
        return Zt = clearTimeout(Zt),
        "boolean" === k(e) ? p(e) : e > 0 ? (p(!0), Zt = setTimeout(function() {
            p(!1)
        },
        e)) : p(),
        It
    };
    var Zt, en, tn = "#hw_splashscreen",
    nn = null,
    on = null;
    It.getOrientation = function() {
        return nn
    },
    It.orientationTip = function(e) {
        return "boolean" == typeof e && (on = e, m()),
        It
    };
    var rn = "#hw_orientationtip",
    an = It.is("android") ? 350 : 100,
    sn = null;
    It.ready(function() {
        e.addEventListener("onorientationchange" in e ? "orientationchange": "resize", m, !1),
        m();
        var t = N("orientation");
        t && (t = "portrait" === t ? 1 : "landscape" === t ? 2 : parseInt(t, 10) || 0, t && It.orientationTip(1 === t))
    }),
    It.getUser = function(e, t) {
        if (E(e) ? (t = e, e = !1) : "boolean" !== k(e) && (e = !1), !t) return It;
        var o = {
            id: 0,
            name: null,
            avatar: "http://i1.wanh5.com/avatar/default/1.jpg",
            gender: 0,
            display: ""
        },
        r = z(Wt);
        return r && (r = decodeURIComponent(r).split("|"), o = {
            id: parseInt(r[0], 10) || 0,
            name: decodeURIComponent(r[1]) || null,
            avatar: decodeURIComponent(r[2]),
            gender: parseInt(r[3], 10) || 0,
            display: decodeURIComponent(r[4]) || null
        }),
        e ? c(Z, "ui",
        function(e, r) {
            null !== e ? (o = T(o, e), n("user.get", o)) : n("error", {
                type: "user.get",
                code: r
            }),
            t && E(t) && t(o, r)
        }) : (n("user.get", o), t && E(t) && t(o)),
        It
    },
    It.getWXUser = function() {
        var e = z(Vt);
        if (e) try {
            e = JSON.parse(decodeURIComponent(e)),
            n("wxuser.get", e)
        } catch(t) {
            n("error", {
                type: "wxuser.get",
                code: t.message
            })
        }
        return e || null
    },
    It.getStat = function(e) {
        return c(Z, "gv",
        function(t, o) {
            null !== t ? n("stat.get", t) : n("error", {
                type: "stat.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    It.getScore = function(e) {
        return c(Z, "jf",
        function(t, o) {
            null !== t ? n("score.get", t) : n("error", {
                type: "score.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    It.setScore = function(e, t, o) {
        if (e = parseFloat(e, 10) || 0, 0 >= e || e <= Rt.bestScore) return It;
        E(t) && (o = t, t = null);
        var r = {
            s: e
        };
        return Rt.bestScore = e,
        t = parseFloat(t, 10) || 0,
        t > 0 && (r.t = t),
        Rt.nick && (r.n = Rt.nick),
        c(et, "jf", r,
        function(e, t) {
            null !== e ? n("score.set", r.s, r.t, r.n) : n("error", {
                type: "score.set",
                code: t
            }),
            o && E(o) && o(e, t)
        }),
        It
    },
    It.setScoreWithName = function(e, t, n, o, r) {
        var i;
        return _(e) ? It.setScoreWithName(e.score, e.time, e.success, e.always, e.tip) : ((o || e > Rt.bestScore) && (i = prompt((r || "\u4f60\u83b7\u5f97\u4e86%s\u5206, \u4f7f\u7528\u4e0b\u9762\u540d\u5b57\u5e76\u901a\u77e5\u597d\u53cb\uff1f").replace(/\%s/gi, e), Rt.nick)), i ? (Rt.nick = i, It.setScore(e, t, n)) : It)
    },
    dt && dt in ut && (It.setScoreWithName = It.setScore),
    It.getRank = function(e, t) {
        return E(e) && (t = e, e = null),
        c(Z, "ph", {
            order: S(e) && "time" === e ? "time": "score"
        },
        function(e, o) {
            null !== e ? n("rank.get", e) : n("error", {
                type: "rank.get",
                code: o
            }),
            t && E(t) && t(e, o)
        }),
        It
    },
    It.getSaveData = function(e) {
        return c(Z, "data",
        function(t, o) {
            null !== t ? n("savedata.get", t) : n("error", {
                type: "savedata.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    It.setSaveData = function(e, t) {
        return S(e) ? (e = {
            d: e
        },
        c(et, "data", e,
        function(o, r) {
            null !== o ? n("savedata.set", e.d) : n("error", {
                type: "savedata.set",
                code: r
            }),
            t && E(t) && t(o, r)
        }), It) : It
    },
    It.getData = function(e) {
        return c(Z, "guc",
        function(t, o) {
            null !== t ? n("data.get", t) : n("error", {
                type: "data.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    It.setData = function(e, t) {
        return S(e) ? (e = {
            d: e
        },
        c(et, "guc", e,
        function(o, r) {
            null !== o ? n("data.set", e.d) : n("error", {
                type: "data.set",
                code: r
            }),
            t && E(t) && t(o, r)
        }), It) : It
    },
    It.getGameData = function(e, t) {
        return c(Z, "gpd", {
            p: e
        },
        function(o, r) {
            null !== o ? n("gamedata.get", e, o) : n("error", {
                type: "gamedata.get",
                code: r
            }),
            t && E(t) && t(o, r)
        }),
        It
    },
    It.setGameData = function(e, t, o) {
        return S(t) ? (t = {
            p: e,
            v: t
        },
        c(et, "gpd", t,
        function(e, r) {
            null !== e ? n("gamedata.set", t.p, t.v) : n("error", {
                type: "gamedata.set",
                code: r
            }),
            o && E(o) && o(e, r)
        }), It) : It
    },
    It.getTitle = function(e) {
        return c(Z, "title",
        function(t, o) {
            null !== t ? n("title.get", t) : n("error", {
                type: "title.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    It.getHotGames = function(e) {
        return c(Z, "grlg",
        function(t, o) {
            null !== t ? n("hotgames.get", t) : n("error", {
                type: "hotgames.get",
                code: o
            }),
            e && E(e) && e(t, o)
        }),
        It
    },
    function(t) {
        function o(e, t) {
            return /^(?:\w+)?:/.test(e) || t && !/\.(?:png|jpg)$/.test(e) ? void 0 : (e = e.replace(/^\/+/, ""), e = e.replace(/^(\.+\/+)+/, ""), _t + e)
        }
        function r(t, n) {
            l && pt && e.wx && e.wx[t](n)
        }
        function i(e, t, o) {
            return l && d ? void r("onMenuShare" + w[e], {
                title: t.title,
                desc: t.desc,
                link: t.link,
                imgUrl: t.img,
                trigger: function() {
                    n("share.open", e)
                },
                success: function(e) {
                    o("success", e)
                },
                cancel: function(e) {
                    o("cancel", e)
                },
                fail: function(e) {
                    o("fail", e)
                }
            }) : void k.push(arguments)
        }
        function a(e, t) {
            var o = x[e + "Link"] || x.link;
            jt && (o = o + (o.indexOf("?") >= 0 ? "&": "?") + "fu=" + encodeURIComponent(jt)),
            o = o + (o.indexOf("?") >= 0 ? "&": "?") + "ft=" + (new Date).getTime(),
            i(e, {
                img: x.img,
                link: o,
                title: e === m ? x.desc: x.title,
                desc: e === m ? x.title: x.desc
            },
            function(o) {
                var r = {
                    type: e
                };
                r[o] = !0,
                n("share", r),
                n("share.close"),
                "cancel" !== o && s("share", o),
                t && E(t) && t(r)
            })
        }
        function c(t) {
            var o = e.wx;
            o.config({
                debug: !1,
                appId: t.appId,
                timestamp: t.timestamp,
                nonceStr: t.nonceStr,
                signature: t.signature,
                jsApiList: h
            }),
            o.ready(function() {
                d = !0,
                a(g),
                a(m),
                a(v),
                a(b),
                k.forEach(function(e) {
                    i.apply(null, e)
                }),
                k = []
            }),
            o.error(function(e) {
                n("error", {
                    type: "wx",
                    code: e.errMsg || 0
                })
            })
        }
        var l = !!t.env.wechat,
        u = !0;
        l && t.env.android && H(t.env.wechat, "6.0.2.58") < 0 && (u = !1);
        var d, p = !l || "no" === N("wxbridge"),
        h = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
        f = t.wx = t.wx || {},
        g = f.SHARE_TYPE_APP = "app",
        m = f.SHARE_TYPE_TIMELINE = "timeline",
        v = f.SHARE_TYPE_WIEBO = "weibo",
        b = f.SHARE_TYPE_QQ = "qq",
        w = {};
        w[g] = "AppMessage",
        w[m] = "Timeline",
        w[v] = "Weibo",
        w[b] = "QQ";
        var y = Rt.share,
        x = {
            img: y.img || _t + "icon.png",
            link: (u ? y.link: "") || _t,
            query: "",
            title: y.title || J.title || "\u706b\u821e\u6e38\u620f",
            desc: y.desc || J.title || "\u706b\u821e\u6e38\u620f"
        };
        t.getShare = function(e) {
            return x[e]
        },
        t.setShare = function(e, r, i) {
            if (_(e)) {
                i = !!r;
                for (var s in e) t.setShare(s, e[s], i)
            } else if (e && x.hasOwnProperty(e) && S(e) && S(r) && r) {
                if ("link" === e) {
                    if (r = o(r, !1), !r) return t
                } else if ("img" === e) {
                    if (r = o(r, !0), !r) return t
                } else "query" === e ? x.link = P(x.link, r) : u && pt || "title" !== e && "desc" !== e || r && (J.title = r);
                var c = x[e];
                x[e] = r,
                n("share.set", e, c, r),
                !i && d && (a(g), a(m), a(v), a(b))
            }
            return t
        },
        f.sendFriend = function(e, n) {
            return t.setShare(e, !0),
            i(g, n),
            this
        },
        f.sendTimeline = function(e, n) {
            return t.setShare(e, !0),
            i(m, n),
            this
        },
        f.sendWeibo = function(e, n) {
            return t.setShare(e, !0),
            a(v, n),
            this
        },
        pt && t.env.wechat ? h.slice(5).forEach(function(t) {
            f[t] = function(n) {
                e.wx && e.wx[t](n)
            }
        }) : f.hideOptionMenu = f.showOptionMenu = function() {};
        var k = [];
        if (pt && !p) {
            J.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
            var M = "__cbhoowu" + Date.now();
            e[M] = function(t) {
                e[M] = null,
                c(t)
            },
            J.write('<script src="http://api.wx.51h5.com/web/share/sign/id/ihoowu?cb=' + M + '"></script>')
        }
    } (It);
    var cn, ln;
    It.setBanner = function(e) {
        return v(cn, e),
        It
    },
    function() {
        var t = N("banner");
        t && (cn = t, ln = N("banner", "type"), cn > 0 && It.ready(function() {
            if (e.BAIDU_DUP_require || x("http://dup.baidustatic.com/js/zm.js"), "1" === ln) {
                var t = J.createElement("div");
                t.id = "hw_banner_" + cn,
                I("body").appendChild(t),
                It.setBanner(t.id)
            }
        }))
    } (),
    It.showAd = function() {},
    It.hideAd = function() {},
    It.isAd = function() {
        return "no" !== Rt.appBanner
    },
    It.notify = function(e) {
        e && "object" === k(e) && n("message.notify", e)
    },
    It.ready(o),
    It.ready(function() {
        for (var t, n = "//hm.baidu.com/hm.js?0c906e9f94713174584881c774a94212",
        o = V + "hmt",
        r = J.getElementsByTagName("script"), i = r.length; i > t; t++) if (r[t].src.indexOf(n) >= 0) return;
        e[o] = e[o] || [];
        var a = J.createElement("script");
        a.src = n,
        r[0].parentNode.insertBefore(a, r[0])
    }),
    It.ready(function() {
        for (var t, n = 1253472040,
        o = "//w.cnzz.com/q_stat.php?id=" + n,
        r = V + "czc",
        i = J.getElementsByTagName("script"), a = i.length; a > t; t++) if (i[t].src.indexOf(o) >= 0) return;
        e[r] = e[r] || [];
        var s = J.createElement("script");
        s.src = o,
        i[0].parentNode.insertBefore(s, i[0])
    })
} (this),
~
function(e) {
    function t(e) {
        return e && (e.score = e.score || e.time || 0, e.score) ? e: null
    }
    function n(e, t) {
        r(),
        s && (t = t || {},
        s.src = d + e + "?sig=" + l + ("end" === e ? "&score=" + t.score: "") + (t.free ? "&free=1": "") + "&domain=" + encodeURIComponent(location.hostname))
    }
    function o(e) {
        s && (s.style.display = e ? "": "none")
    }
    function r() {
        s || (s = document.createElement("iframe"), s.setAttribute("allowtransparency", !0), s.setAttribute("frameborder", 0), s.style.cssText = "display:none;position:fixed;top:0;left:0;z-index:999999999;margin:0;padding:0;border:none;background-color:transparent;", s.width = s.height = "100%", document.body.appendChild(s))
    }
    var i = e.ih5game,
    a = parseInt(i.getQuery("act"), 10) || 0;
    if (a) {
        var s, c = "http://" + i.server + "kiip.51h5.com",
        l = i.getQuery("sig") || "",
        u = !1,
        d = c + "/popup/";
        i.on("status.stop",
        function(e) {
            e = t(e),
            e && (u && (u = !1, e.free = !0), n("end", e))
        }),
        i.on("message.notify",
        function(e) {
            if (e.kiip) {
                var t = e.act;
                "show" === t ? o(!0) : "error" === t ? o(!1) : "start" === t || "again" === t ? o(!1) : "end" === t ? o(!0) : "skip" === t ? (u = !0, o(!1)) : "back" === t && (location.href = c + "/item/back?sig=" + l)
            }
        }),
        i.ready(function() {
            n("start")
        })
    }
} (this),
~
function(e, t, n) {
    var o = e.ih5game;
    if (o.channel === t) {
        var r = parseInt(o.getXMeta("hook"), 10) || 0;
        //r & n && document.write('<script src="//hd.51h5.com/open/hook.php?f=' + t + '"></script>')
    }
} (this, 1008, 4),
~
function(e, t) {
    function n(e) {
        a.score = e,
        a.gtime = Math.round((new Date).getTime() / 1e3),
        (new Image).src = i + "?" + r.getParams(a)
    }
    function o(e) {
        return e && (e.score = e.score || e.time || 0, e.score) ? e: null
    }
    var r = e.ih5game;
    if (r.channel === t) {
        var i = "http://gapi.wonaonao.com/score",
        a = {};
        "uid,t,sign,gid".split(",").forEach(function(e) {
            a[e] = r.getQuery(e)
        }),
        r.on("status.stop",
        function(e) {
            e = o(e),
            e && n(e.score)
        })
    }
} (this, 1024),
~
function(e, t) {
    var n = e.ih5game;
    if (n.channel === t) {
        var o = n.home(!0) + "/op-",
        r = o + "zte.html";
        n.more = function(t) {
            return t ? r: void(e.location.href = r)
        },
        n.download = n.home = n.more
    }
} (this, 1014),
~
function(e, t) {
    var n = e.ih5game;
    if (n.channel === t) {
        var o, r = n.getXMeta("weibo-key"),
        i = "sinaweibo://snggame",
        a = "http://weibo.com/u/5126161537",
        s = "http://" + n.server + "api.51h5.com",
        c = n.env.weibo ? i: a,
        l = n.getXMeta("weibo-share-tip") || "\u5206\u4eab\u6210\u529f";
        n.share = function() {
            if (o && (o = clearTimeout(o)), r) {
                var e = s + "/api-weibo-share.html?key=" + r + "&msg=" + encodeURIComponent(n.getShare("desc"));
                n.getScript(e),
                l && (o = setTimeout(function() {
                    alert(l)
                },
                800))
            }
            return n
        },
        n.more = function(t) {
            return t ? c: void(e.location.href = c)
        },
        n.download = n.home = n.more
    }
} (this, 1016),
~
function(e, t) {
    var n = e.ih5game;
    if (n.channel === t) {
        var o = "http://h5.play.cn/";
        n.more = function(t) {
            return t ? o: void(e.location.href = o)
        }
    }
} (this, 1019),
~
function(e, t) {
    var n = e.ih5game;
    //n.channel === t && document.write('<script src="//hd.51h5.com/open/hook.php?f=' + t + '"></script>')
} (this, 1026);