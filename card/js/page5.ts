/**
 * 桥牌主程
 * PC: PC-20120726YXBR
 * Version: 1.0.0
 * Author: xiaok
 * Date: 2015-06-25 15:07:14
 * Desc: 
 */

class xiaok {
    

    /**
    * 提供一个数字，返回机率事件正确或失败
    * @param number 0-100
    * @return boolean true|flase
    */
    isTrueOrFalse(number): boolean {

        var num = this.random(0, 100);
        console.log("随机生成数字：",num);
        if (num <= number) {
            return true;
        }
        return false;
    }



    /**
     * 返回一个区间内的随机数
     * @param Min
     * @param Max
     */
     random(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    
    /**
     * 打乱一个数组
     * @param arr
     * @param num
     */
     randomArray(arr, num) {
        var temp_array = new Array();
        for (var index in arr) {
            temp_array.push(arr[index]);
        }

        var return_array = new Array();
        for (var i = 0; i < num; i++) {
            if (temp_array.length > 0) {
                var arrIndex = Math.floor(Math.random() * temp_array.length);
                return_array[i] = temp_array[arrIndex];
                temp_array.splice(arrIndex, 1);
            } else {
                break;
            }
        }
        return return_array;
    }
}

class role {
    card: card[];
    type: string;
    hp: number;
    constructor(type) {
        this.hp = 100;
    }
    // 摸卡
    getCard() {
        if (this.card.length <= 0) {
            alert("卡片派完了");
            return;
        }
        return this.card.shift();
        console.log("摸卡后剩余卡片",this.card);
    }
    setCard(card) {
        this.card = card;
    }
    // 角色HP处理
    getHP() {
        return this.hp;
    }
    setHP(hp) {
        this.hp += hp;
    }
}

/**
* name 卡片名称
* type 卡片类型： normal/bug
* hp   卡片效果：+20 -20 HP
*/
class card {
    no: number;
    name: string;
    type: string;
    hp: number;
    tips: string;
    constructor(no, name, type, hp:number, tips:string) {
        this.no = no;
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.tips = tips;
    }
}

/**
* 桥牌主程
*/

class page5 {
    round:number = 1;
    player: role;
    computer: role;
    normalCard: card[];
    bugCard: card[];
    deathCard: card[];
    next() {
        this.round++;
    }
    getRound():number {
        return this.round;
    }
    getBugCard() {
        return this.bugCard.shift();
    }
    constructor() {
        var tools = new xiaok();

        // 生成角色
        this.player = new role("player");
        this.computer = new role("computer");
        // 初始化卡
        this.initCard();

        var tmpPlayerCard = this.normalCard.slice(0,10);
        tmpPlayerCard.push(this.deathCard[0]);
        tmpPlayerCard.push(this.deathCard[1]);

        tmpPlayerCard = tools.randomArray(tmpPlayerCard, tmpPlayerCard.length);
        console.log("哪吒卡片", tmpPlayerCard);

        var tmpComputerCard = this.normalCard.slice(10, 20);
        console.log("太乙卡片", tmpComputerCard);

        this.player.setCard(tmpPlayerCard);
        this.computer.setCard(tmpComputerCard);

        console.log(); 
        console.log(this.player.getCard());
    }
    getPlayerCard(): any {
        return this.player.getCard();
    }
    getComputerCard(): any {
        return this.computer.getCard();
    }
    // 卡片初始化
    public initCard() {
       
        var tools = new xiaok();

        var cardList = new Array();
        cardList.push(new card(1, "长江大桥", "normal", 100,"当长江大桥在场时，场上本方桥的所有桥的寿命增加100年。"));
        cardList.push(new card(2, "九江大桥", "normal", 100, "九江大桥，雄伟无比，场上本方桥的所有桥的寿命增加100年。"));
        cardList.push(new card(3, "杨浦大桥", "normal", 100, "杨浦大桥，上海明珠，场上本方桥的所有桥的寿命增加100年。"));
        cardList.push(new card(4, "赵州桥", "normal", 100, "赵州桥，历史悠久，场上本方桥的所有桥的寿命增加100年。"));
        cardList.push(new card(5, "虎门大桥", "normal", 100, "虎门大桥，林则徐先生故地，场上本方桥的所有桥的寿命增加100年。"));
        cardList.push(new card(6, "伦敦大桥", "normal", 50, "伦敦大桥，欧洲名片，场上本方桥的所有桥的寿命增加50年。属性：HP + 50。"));
        cardList.push(new card(7, "池水沟子小桥", "normal", 50, "车水沟子小桥，能洗头来能洗脚，场上本方桥的所有桥的寿命增加50年。"));
        cardList.push(new card(8, "明石海峡大桥", "normal", 50, "明石海峡大桥，穿越大海的壮阔，场上本方桥的所有桥的寿命增加50年。"));
        cardList.push(new card(9, "西堠门大桥", "normal", 50, "西堠门大桥，国内第一大悬索桥场上本方桥的所有桥的寿命增加50年。"));
        cardList.push(new card(10, "西直门大桥", "normal", -300, "西直门大桥，所有北京司机的噩梦。场上对方桥的所有桥的寿命减少300年。"));
        cardList.push(new card(11, "大桥", "normal", 50, "三国大美女—大桥，让曹丞相垂涎欲滴。场上本方桥的所有桥的寿命增加50年。"));
        cardList.push(new card(12, "润杨大桥", "normal", -100, "润扬大桥，国内技术最牛X的大桥，场上对方桥的所有桥的寿命减少100年。"));
        cardList.push(new card(13, "享伯桥", "normal", -100, "亨伯桥，英国的贵族桥，场上对方桥的所有桥的寿命减少100年。属性：HP - 100。"));
        cardList.push(new card(14, "江阴大桥", "normal", -100, "江阴大桥，连接南北的通道，场上对方桥的所有桥的寿命减少100年。"));
        cardList.push(new card(15, "青马大桥", "normal", -100, "青马大桥，香港的名片，场上对方桥的所有桥的寿命减少100年。属性：HP - 100。"));
        cardList.push(new card(16, "费雷泽诺桥", "normal", -100, "费雷泽诺桥，美国最神秘的桥，场上对方桥的所有桥的寿命减少100年。"));
        cardList.push(new card(17, "钱塘江大桥", "normal", -50, "钱塘江大桥，被网民热捧为“桥坚强”。 场上对方桥的所有桥的寿命减少50年。"));
        cardList.push(new card(18, "东海大桥", "normal", -50, "东海大桥，龙王家的大桥。场上对方桥的所有桥的寿命减少50年。属性：HP - 50。"));
        cardList.push(new card(19, "江岛大桥", "normal", -50, "江岛大桥，日本的名片。场上对方桥的所有桥的寿命减少50年。属性：HP - 50。"));
        cardList.push(new card(20, "杭州湾跨海大桥", "normal", -50, "杭州湾跨海大桥，自然环境最恶劣的大桥，场上对方桥的所有桥的寿命减少50年。"));

        this.normalCard = cardList;
        var cardList = new Array();
        cardList.push(new card(21, "诺曼底大桥", "bug", 0, "美军部队空降，摧毁你所有的桥。"));
        cardList.push(new card(22, "蓝桥", "bug", 0, "此牌一出，场上所有桥的魂魄都会肝肠寸断，尽数垮塌。《魂断蓝桥》。"));
        cardList.push(new card(23, "卢沟桥", "bug", 0, "此牌一出，场上所有桥被战争所摧毁。"));
        cardList.push(new card(24, "金水桥", "bug", 0, "金水桥贵为中国权力中心，通过政治手段秒杀所有桥。"));
        cardList.push(new card(25, "金门大桥", "bug", 0, "此牌一出，过于雄伟，对方场上所有桥都羞愧而死了。"));
        cardList.push(new card(26, "康桥", "bug", 0, "此牌一出，对方所有桥通通告别世界。"));
        cardList.push(new card(27, "沪定桥", "bug", 0, "此牌一出，可“飞夺”对方的所有桥，尽数垮塌。"));
        cardList.push(new card(28, "断桥", "bug", 0, "此牌一出，场上所有桥尽数垮塌。"));
        
        this.bugCard = tools.randomArray(cardList, cardList.length);

        var cardList = new Array();
        cardList.push(new card(29, "独木桥", "death", 0, "oh！my god！你太重了，把独木桥压断了，你掉下桥摔死了！game over！！！"));
        cardList.push(new card(30, "卡桑德拉大桥", "death", 0, "此牌一出，为免火车上携带传染病毒者向外传播，便自行爆炸。"));
        this.deathCard = cardList;

         // 打散卡
        this.normalCard = tools.randomArray(this.normalCard, this.normalCard.length);
    }


}