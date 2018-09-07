//    var NULL=2;
console.log(typeof null);//object 这是一个空的指针；
console.log(typeof NULL);// NULL- >undefined

//结果是undefined 除了用在typeof外，会报错；
console.log(undefined*15);//NaN
//    console.log(undefined*aa);//aa is not defined
//    console.log(NULL+15);//NULL is not defined  相当于NULL 这个变量没有找到；

//
var js;
console.log(js);//undefined
console.log(typeof undefined);//undefined
console.log(typeof typeof undefined);//string


//null和undefined比较
/*
* === 相同比较，首先判断是否是同一个类型；不是的话，直接false；
* ==  比较是否相等；(如果是不一样的类型，会转为相同的类型，然后再进比较)
* */
console.log(null == null);//true
console.log(null == undefined);//true
console.log(undefined == undefined);//true
console.log(undefined === undefined);//true
console.log(null === undefined);//false null->Null undefined -> Undefined
console.log(false == 0);//true  false->0  0==0? true
console.log(Number("22") == 22);//true "22"隐士的调用Number->22  -> 22== 22 -> true


console.log("---------------------------");
console.log(null == 1);//false
console.log(null == "2312312");//false
console.log(null == false);//false
console.log(null == 0);//false
console.log(null == "");//false
console.log(null == NaN);//false

console.log("++++++++++++++++++++++++++");
console.log(undefined == 1);//false
console.log(undefined == "2312312");//false
console.log(undefined == false);//false
console.log(undefined == 0);//false
console.log(undefined == "");//false
console.log(undefined == NaN);//false


//应用场景经常出现在 做定时器的时候；
var timer=null;



//    对象的属性
var oDemo={
    // aaa:"这是oDemo的aaa值"
};
oDemo.bbb="Hello";

console.log(oDemo.aaa);//undefined
console.log(oDemo.bbb);//Hello


//ByIn
var oDiv1=document.getElementById("div1"),
    oDiv2=document.getElementById("div2");
console.log(oDiv1);
console.log(oDiv2);//null

//function 返回值 默认是undefined；

function demo() {
    return;
}
var aDemo=demo();
console.log(aDemo);//undefined