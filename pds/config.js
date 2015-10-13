/**
 * 全局参数
 * 2015-3-25 14:22:56
 */
var conf = {
	W:null,
	H:null,
	bayBasePath:BASE_PATH+'_static/images/',
	score:0,
	bayImgList:['bay1.png','bay2.png','bay3.png','bay4.png','bay5.png','bay6.png','bay7.png','bay8.png','bay9.png'],


	saveUserInfo:SERVER_PATH + '/ajax',
	userInfo:{
		x:0,
		y:0,
		r:0,//旋转角度
		index:0,//大白表情图索引
		score:0//游戏得分
	}

};