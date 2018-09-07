//正数，负数，零，NaN都是属于Number
// ***NaN -> Not a Number不是一个数，但是属于数字类型；**
console.log(typeof 222);
console.log(typeof 222.22);
console.log(typeof -10);
console.log(typeof -10.34);
console.log(typeof 0);
console.log(typeof -0);

//NaN
console.log((22*"aa"));//NaN number
console.log(typeof (22*"aa"));//number
console.log(22==22);//true 单个等于号是赋值的意思； Invalid left-hand side in assignment
//== 两个等于号才是判断；
console.log((22*"aa")==(22*"bb"));//false
console.log((22*"aa")==22);//false

//inNaN
console.log(isNaN(22*"aa"));//true  (22*"aa")计算出的值不是一个数，对吗？ 对；
console.log(isNaN(22));// 22这个值不是一个数，对吗？ 不对； false (NaN -> Not a Number不是一个数，)

//number的转换方法； 别的数据类型转为数字类型；(不一定是字符串)
/* 五种 转为数字的；
* +"22"   字符串转为数字；
* "22"-0
* Number()
* parseInt()
* parseFloat()
* */
console.log("+++++++++++++++++++++++++");//隐式
console.log(+"22");//隐式
console.log(Number("22"));//显式 22
console.log(Number(false));//显式  ->0
console.log(Number(true));//显式  ->1
console.log(Number(null));//显式 -> 0
console.log(Number(undefined));//显式 NaN
console.log(Number({}));//显式
console.log(Number("22.22"));
console.log(Number("22.22a"));//失败了 NaN


console.log(parseInt("22.22a"));//22
console.log(parseFloat("22.22a222"));//22.22
console.log(parseFloat("22.22.22"));//22.22

// + - * /

console.log(("++++++++"));
console.log(13%10); //13/10    3   多余的3 会被输出
console.log(5%3);//2

var time=623648364569346563463;//time单位是秒；转为X分X秒；
var minis=parseInt(time/60);//保存是分钟
var second=time%60;//3
var targetVal=minis+"分"+second+"秒";

console.log("  minis:"+minis+"  second:"+second);
console.log(targetVal);
//小练习：
/*
* var time=623648364569346563463;//time是怎么得到的》当前的服务器时间 - 双11 这个阶段多少秒；
* 是多少天，多少小时，多少分钟，多少秒；
* */


console.log("***********************");
console.log("22"-1);//"22" -> 22 -> (22-1) -> 21
console.log("22"-0);