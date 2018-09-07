var validateId={};//用来验证身份证的；
validateId.age=1900;
console.log(validateId.age);//1900

validateId.age=1940;
console.log(validateId.age);//1900

//模块内部的
validateId.demo1=Symbol();// AAXX111  demo1
console.log(validateId.demo1);//Symbol()

// 外部的
validateId.demo1=1900;  //demo1
console.log(validateId.demo1);//1900

var aaa=Symbol("a");// //AAXX222
var bbb=Symbol("a");// //AAXX333  生成的实例是唯一的，和其他任何实例都不相等，包括其他相同生成的实例
console.log(aaa);
console.log(bbb);
console.log(aaa==bbb);//相当于NaN
console.log(Symbol()==Symbol());//


var age1=2;
var age2=2;
console.log(age1,age2);
console.log(age1==age2);//true

//模块/插件里面的
var age=Symbol("age");//AAXX666
validateId[age]=222;
/*
*
*
*
*
*
* */

//other
//    var age=Symbol("age");//AAXX777
validateId[Symbol("age")]=333;


validateId.aaa=222;
validateId.bbb=222;
