function resize(){function n(){var t=$("html").width(),n=$("html").height();document.body.style.width=n*1280/720+"px";document.body.style.height=n+"px";document.getElementById("rotateScreen")!==null&&(t=window.innerWidth,n=window.innerHeight,t>n?(document.body.classList.remove("limit"),document.getElementById("rotateScreen").className="rotateScreen none"):($(".code").removeClass("see"),document.body.classList.add("limit"),document.getElementById("rotateScreen").className="rotateScreen "));/Mobile/.test(navigator.userAgent)||(document.body.classList.add("limit"),document.getElementById("rotateScreen").classList.remove("none"))}$("body").append($("<div id='rotateScreen' class='rotateScreen none'><\/div>"));n();window.onresize=n}(function(){"use strict";var n=new Audio("css/music.mp3");n.loop=!0;n.play()})();window.win=0;console.log=function(){};jQuery.fn.extend({hp:function(n,t){n.hp>0&&$(".hp"+t).removeClass("none").text("+"+n.hp).addTimeClass("bounceIn add",1999,function(){$(".hp"+t).addClass("none")});n.hp<0&&$(".hp"+t).removeClass("none").text(n.hp).addTimeClass("bounceIn act",1999,function(){$(".hp"+t).addClass("none")})},nav:function(n){$("body").addTimeClass("animated fadeOut ",400,function(){document.body.className="";document.body.innerHTML="<div class='none'><img src='icon.png' /><\/div>";new WinJS.UI.HtmlControl(document.body,{uri:n});$("body").addTimeClass("animated fadeIn ",400,function(){});resize()})},speak:function(n){var t=$(this);t.text(n).removeClass("none");setTimeout(function(){t.addClass("none")},5e3)},setCard:function(n){var t,i;if(window.curCard=n,t=$(this),typeof n=="undefined"||n==null){$("body > div.role.computer > div.msg").speak("无效卡");return}i=JSON.stringify(n);t.attr("data",i).removeClass("card1 card2 card3 card4 card5 card6 card7 card8 card9 card10 card11 card12 card13 card14 card15 card16 card17 card18 card19 card20 card21 card22 card23 card24 card25 card26 card27 card28 card29 card30").addClass("card animated card"+n.no).addTimeClass("flipInY",1e3,function(){})},setCardCount:function(){var n=parseInt($("body > div.tips > span").text());n--;$("body > div.tips > span").text(n)},playEffect:function(n){document.getElementById("effect").className="";$("#effect").addTimeClass("animated fadeIn effect"+n.no,7e3,function(){$("#effect").addClass("none")});$("div.effect.word").removeClass("none animation").addTimeClass("text"+n.no+" animation",14e3,function(){$("div.effect.word").addClass("none")})},gameOver:function(n){$("#gameOver").removeClass("none").addTimeClass(n,8e3,function(){$.fn.nav("pages/HtmlPage6.html")})},addTimeClass:function(n,t,i){var r=$(this);r.addClass(n);setTimeout(function(){r.removeClass(n);typeof i=="function"&&i()},t)}}),function(){"use strict";WinJS.UI.Pages.define("pages/HtmlPage0.html",{ready:function(n){var t,r,i,f,u;for(n.className+=" pages page0",t=["bg.png","bg0.jpg","bg2.jpg","bgCard.png"],r=new createjs.LoadQueue,r.addEventListener("fileload",function(){var n=$("body > div.preload > progress").val();n++;console.log(n*100/t.length);$("body > div.preload > div").text("已加载"+parseInt(n*100/t.length)+"%");$("body > div.preload > progress").val(n);n>=t.length&&$.fn.nav("pages/HtmlPage1.html")}),$("body > div.preload > progress").attr("max",t.length),i=0;i<t.length;i++)f=1e3+u*333,u=i,setTimeout(function(){r.loadFile("css/img/"+t[u])},f)}});WinJS.UI.Pages.define("pages/HtmlPage1.html",{ready:function(n){n.className+=" pages page1";WinJS.Utilities.query("#startButton").listen("click",function(){$.fn.nav("pages/HtmlPage2.html")})}});WinJS.UI.Pages.define("pages/HtmlPage2.html",{ready:function(n){n.className+=" pages page2";WinJS.Utilities.query("#startButton1").listen("click",function(){$.fn.nav("pages/HtmlPage5.html")});WinJS.Utilities.query("#startButton2").listen("click",function(){$.fn.nav("pages/HtmlPage4.html")})}});WinJS.UI.Pages.define("pages/HtmlPage3.html",{ready:function(n){n.className+=" pages page3";WinJS.Utilities.query("#startButton1").listen("click",function(){$.fn.nav("pages/HtmlPage5.html")});WinJS.Utilities.query("#startButton2").listen("click",function(){$.fn.nav("pages/HtmlPage4.html")})}});WinJS.UI.Pages.define("pages/HtmlPage4.html",{ready:function(n){n.className+=" pages page4";WinJS.Utilities.query("#startButton").listen("click",function(){$.fn.nav("pages/HtmlPage5.html")})}});WinJS.UI.Pages.define("pages/HtmlPage5.html",{ready:function(n){n.className+=" pages page5 ";setTimeout(function(){$("div.role.player,div.role.computer,div.tips, div.computer.contorl,div.player.contorl,div.desktop").removeClass("fadeInUp fadeInLeft fadeInDown fadeInRight  flipInY  bounceIn delay")},4500);WinJS.Utilities.query("#helpButton").listen("click",function(){$(".wf-content").removeClass("none")});WinJS.Utilities.query("#shareButton").listen("click",function(){document.getElementById("shareScreen").className="shareScreen"});WinJS.Utilities.query(".shareScreen").listen("click",function(){document.getElementById("shareScreen").className="shareScreen none"});WinJS.Utilities.query("#leaveButton").listen("click",function(){$("body > div.window.leave").removeClass("none")});WinJS.Utilities.query("#backButton").listen("click",function(){$("body > div.window.leave").addClass("none")});WinJS.Utilities.query("#closeButton,div.close").listen("click",function(){$(".wf-content").addClass("none")});WinJS.Utilities.query("#leaveButton2").listen("click",function(){location.href="http://m.huobaoyx.com/\t"});WinJS.Utilities.query("#sendButton").listen("click",function(){var n,t;if($(this).attr("lock")=="true"){$("body > div.role.computer > div.msg").speak("出牌阶段结束，点击结束出牌");return}if(window.tools=new xiaok,n=$("body > div.player.contorl > div.card  div.item.active").attr("data"),console.log(n),typeof n=="undefined"||n==null)return $("body > div.role.computer > div.msg").speak("未选择任何牌"),!1;if($(this).attr("lock","true"),$("div.lock").removeClass("none"),$("div.lock").addTimeClass("think",2e3),$.fn.setCardCount(),$("#cancelButton").removeAttr("lock"),n=JSON.parse(n),console.log("哪吒发出牌",n),n.type=="normal"&&$("body > div.role.player > div.msg").speak(n.tips),$("body > div.card").setCard(n),console.log("哪吒卡片效果生效",n.hp),n.hp>=0?($.fn.hp(n,".role"),console.log("哪吒给自己加血",n.hp),document.querySelector("body > div.role.player > div.status > progress").value+=n.hp):($.fn.hp(n,".computer"),console.log("哪吒给太2减血",n.hp),document.querySelector("body > div.role.computer > div.status > progress").value+=n.hp,$("body > div.role.computer").addTimeClass("shake shake-constant",1e3)),$("div.player.contorl > div.card div.item.active").addTimeClass("fadeOutLeft",1e3,function(){$("div.player.contorl > div.card div.item.active").remove()}),n.type=="death"){console.log("哪吒打出死亡牌死了！");document.querySelector("body > div.role.player > div.status > progress").value=0;$("body > div.role.player > div.status > h2").html("0年<br /><span class='smalltext'>所有桥的寿命:<\/span>");setTimeout(function(){$.fn.playEffect(n);setTimeout(function(){window.win=1;$.fn.gameOver("computer")},2e3)},2e3);return}if(document.querySelector("body > div.role.computer > div.status > progress").value<=0){console.log("太乙没血死了");window.win=2;$.fn.gameOver("player");return}t=document.querySelector("body > div.role.player > div.status > progress").value;$("body > div.role.player > div.status > h2").html(t+"年<br /><span class='smalltext'>所有桥的寿命:<\/span>");t=document.querySelector("body > div.role.computer > div.status > progress").value;$("body > div.role.computer > div.status > h2").html("<span class='smalltext'>所有桥的寿命:<\/span><br />"+t+"年");$(".arrowtips").removeClass("none");setTimeout(function(){$("#cancelButton").trigger("click")},2e3)});WinJS.Utilities.query("#cancelButton").listen("click",function(){var t=this,n;if($(t).attr("lock")=="true"){$("body > div.role.computer > div.msg").speak("请先出牌");return}if($.fn.setCardCount(),$(t).attr("lock","true"),$(".arrowtips").addClass("none"),$("#sendButton").removeAttr("lock"),$("body > div.tips.animated > span").text()<18&&($("div.computer.contorl").append($("<div class='card card0 animated '><\/div>")),$("div.computer.contorl > div.card:nth-child(2)").addTimeClass("animated fadeInRight",1e3,function(){})),console.log("新回合开始机率死亡",page.getRound()*10),tools.isTrueOrFalse(page.getRound()*10)){n=page.getBugCard();document.querySelector("body > div.role.player > div.status > progress").value=0;console.log("太2打出死亡牌",n);$("body > div.card").setCard(n);console.log("太2打出死亡牌"+n.name);$("div.computer.contorl > div.card:nth-child(1)").addTimeClass("animated fadeOutLeft",1e3,function(){$("div.computer.contorl > div.card:nth-child(1)").remove();var t=document.querySelector("body > div.role.player > div.status > progress").value;$("body > div.role.player > div.status > h2").html(t+"年<br /><span class='smalltext'>所有桥的寿命:<\/span>");setTimeout(function(){$.fn.playEffect(n)},0);setTimeout(function(){window.win=3;$.fn.gameOver("computer")},1999)});return}setTimeout(function(){var n=page.getComputerCard();console.log("太2打出卡片",n);n.type=="normal"&&$("body > div.role.computer > div.msg").speak(n.tips);$("body > div.card").setCard(n);n.hp>0?($.fn.hp(n,".computer"),console.log("太2给自己加血",n.hp),document.querySelector("body > div.role.computer > div.status > progress").value+=n.hp):($.fn.hp(n,".role"),console.log("太2给哪吒减血",n.hp),document.querySelector("body > div.role.player > div.status > progress").value+=n.hp,$("body > div.role.player ").addTimeClass("shake shake-constant",1e3));$.fn.hp(n);document.querySelector("body > div.role.computer > div.status > progress").value<=0&&(console.log("哪吒没血死了"),window.win=2,$.fn.gameOver("computer"));$("div.computer.contorl > div.card:nth-child(1)").addTimeClass("animated fadeOutLeft",1e3,function(){var t;$("div.computer.contorl > div.card:nth-child(1)").remove();t=document.querySelector("body > div.role.player > div.status > progress").value;$("body > div.role.player > div.status > h2").html(t+"年<br /><span class='smalltext'>所有桥的寿命:<\/span>");t=document.querySelector("body > div.role.computer > div.status > progress").value;$("body > div.role.computer > div.status > h2").html("<span class='smalltext'>所有桥的寿命:<\/span><br />"+t+"年");page.next();setTimeout(function(){n=page.getPlayerCard();console.log("哪吒换到新卡",n);$("div.player.contorl > div.card>div.center").append($("<div class='item active animated '><\/div>"));$("div.player.contorl > div.card div.item.active").setCard(n);$("div.player.contorl > div.card div.item.active").addTimeClass("fadeInRight",1e3,function(){$("div.player.contorl > div.card div.item.active").removeClass("active");$("div.lock").addClass("none")})},1e3)})},1e3)});WinJS.Utilities.query("#gameOver").listen("click",function(){});$("body > div.player.contorl > div.card ").delegate(" div.item","click",function(){$(this).siblings().removeClass("active");$(this).toggleClass("active")});$(".player.contorl").removeClass("none");window.page=new page5;var t=page.getPlayerCard(),i=page.getPlayerCard();console.log("哪吒游戏开始时获取的2张卡片组",t,i);$("body > div.player.contorl > div.card div.item:nth-child(1)").addClass("card"+t.no).attr("data",JSON.stringify(t));$("body > div.player.contorl > div.card div.item:nth-child(2)").addClass("card"+i.no).attr("data",JSON.stringify(i));document.getElementById("nav").addEventListener("click",function(){$("body.pages.page5 > .buttons").toggleClass("none animated  fadeInUp")})}});WinJS.UI.Pages.define("pages/HtmlPage6.html",{ready:function(n){$(".code").on("click",function(){$(this).toggleClass("see")});WinJS.Utilities.query("#shareButton").listen("click",function(){document.getElementById("shareScreen").className="shareScreen"});WinJS.Utilities.query(".shareScreen").listen("click",function(){document.getElementById("shareScreen").className="shareScreen none"});n.className+=" pages page6";$("div.itema").addClass("w"+window.win);var i=window.curCard,t="你被太2真人使用 "+i.name+" 打败了，快喊你的玲珑可爱学识渊博智勇双全德艺双馨的小伙伴来一起打败他吧！";document.title="我居然被太2真人使用 "+i.name+" 打败了";window.win==2&&(t="你居然打败了太2真人，太牛X了，快发给你的玲珑可爱学识渊博智勇双全德艺双馨的小伙伴们炫耀一下吧！",document.title="我居然打败了太2真人，太牛X了");window.win==1&&(t="你居然出炸弹炸毁了自己所有的桥，快喊找玲珑可爱学识渊博智勇双全德艺双馨的小伙伴来帮你吧！",document.title="我居然出炸弹炸毁了自己所有的桥");$("div.msg").text(t);$("#againButton").on("click",function(){$.fn.nav("pages/HtmlPage1.html")});$("#moreButton").on("click",function(){location.href="http://m.huobaoyx.com/"})}});$.fn.nav("pages/HtmlPage0.html")}()