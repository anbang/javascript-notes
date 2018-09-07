var a=52;
var b=30;

function demoBoolean(a, b) {
    if (a>b){//2>30 -> false
        console.log(a+" 大于 " +b)
    }else if(a==b){//2==30 -> false
        console.log(a+" 等于 " +b)
    }else{
        console.log(a+" 小于 " +b)
    }
    console.log(a>b);
    console.log(a==b);


    if(null){
        console.warn("条件为真的时候才输出")
    }else{
        console.warn("if条件为假的时候才输出")
    }
}

demoBoolean(a,b);
/*
* 如果a>B； ->"a的值"大于"b的值"
* 如果a==B；->"a的值"等于"b的值"
* 如果a<B；->"a的值"小于"b的值"
*
* */


/* ................................非常重要。。。。。。。。。。
* 哪些值是false（false本身）
* 数字：0、-0 、NaN、
* 字符串：''（空字符串）
* null 、
* undefined、
* */

console.log("---------------------------------");
console.log(Boolean(0));    //false
console.log(Boolean(-0));    //false
console.log(Boolean(1));    //true
console.log(Boolean(-5));   //true
console.log(Boolean("222"));//true
console.log(Boolean(''));   //false  空的字符串
console.log(Boolean(" "));  //true 包含空格的字符串
console.log("---------------------------------");
console.log(Boolean("0"));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean({}));//true
console.log(Boolean(function () {}));//true
console.log(Boolean(false));//false
console.log("---------------------------------");
console.log(Boolean(55*"asd"));// NaN false


// !  !!
console.log("************************");
console.log(Boolean(0));//false
console.log(Boolean(!0));//true
console.log(!0);//true 原理: 0 隐式的调用Boolean方法Boolean(0) -> false -> !false ->true
console.log(!!0);// !(!false)->!true ->false
