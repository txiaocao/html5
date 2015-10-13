var fs = require('fs');
var request = require('request');
var path="http://www.baidu.com/aladdin/xiaodu/images/emo/";
var js = [{id:1,name:"喜欢",thum:"emo_like_thum.png",motion:"emo_like.png"},{id:2,name:"发怒",thum:"emo_angry_thum.png",motion:"emo_angry.png"},{id:3,name:"哀伤",thum:"emo_sad_thum.png",motion:"emo_sad.png"},{id:4,name:"乐",thum:"emo_happy_thum.png",motion:"emo_happy.png"},{id:5,name:"害羞",thum:"emo_shy_thum.png",motion:"emo_shy.png"},{id:6,name:"奋斗",thum:"emo_fight_thum.png",motion:"emo_fight.png"},{id:7,name:"酷",thum:"emo_cool_thum.png",motion:"emo_cool.png"},{id:8,name:"嘲笑",thum:"emo_jeer_thum.png",motion:"emo_jeer.png"},{id:9,name:"爱",thum:"emo_love_thum.png",motion:"emo_love.png"},{id:10,name:"拥抱",thum:"emo_hug_thum.png",motion:"emo_hug.png"},{id:11,name:"孤单",thum:"emo_alone_thum.png",motion:"emo_alone.png"},{id:12,name:"想念",thum:"emo_miss_thum.png",motion:"emo_miss.png"},{id:13,name:"震惊",thum:"emo_surprise_thum.png",motion:"emo_surprise.png"},{id:14,name:"生病",thum:"emo_sick_thum.png",motion:"emo_sick.png"}];

for(var num in js){
//console.log(js[item]["motion"]);
var filepath = path + js[num]["motion"];
console.log(filepath);
// var data = fs.createReadStream(filepath);
request(filepath).pipe(fs.createWriteStream(js[num]["motion"]));
// fs.writeFile(js[num]["motion"],data);
}
