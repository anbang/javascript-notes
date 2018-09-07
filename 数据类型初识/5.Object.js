var num=2;
console.dir(num);//number 实例
console.dir(num.__proto__);//Number 类
/*
*
* constructor  :Object
*
*
* */

var str="haha";
console.dir(str);//string 实例
console.dir(str.__proto__);//String 类


/*判断是否一致*/
console.log(num.__proto__.__proto__=== str.__proto__.__proto__);//true


//万物皆对象,并不等于只有一个对象类型的；
// Number / String / Object / Boolean


//key:value
//1、字面量的创建方式；推荐的方式
var o={
    name:"zhu",
    say:"hello"
};
console.log(o);//{name: "zhu", say: "hello"}

var oDemo={};
//    oDemo.name1=
if(!oDemo.flagVal){
    oDemo.flagVal="Test"
}
oDemo.name="bang";
oDemo.say="hahahahahahahha";
console.log(oDemo.flagVal);//Test
console.log(oDemo);//{flagVal: "Test", name: "bang", say: "hahahahahahahha"}

//new
var demo1=new Object();//不推荐的使用方法；
demo1.haha="hahahahahahah";
console.log(demo1);//{haha: "hahahahahahah"}

//jQuery的AJAX；
/*var options={
    url:"babababab",
    type:"",
    date:{}
};
$.ajax(options);*/


function Test(opt) {
    //bala bala
}
var testVal=Test({a:"",b:""});

//Array;
var a=[1,2,3,4,5,6,7];//var a=[1,2,3,4,5,6,7,]  低版本浏览器，length的;
console.log(a);//编程语言里，index是以0为开始的；
console.log("第一位,a[0]",a[0]);
console.log(a[1]);
console.log(a.length);//7

// -> //
