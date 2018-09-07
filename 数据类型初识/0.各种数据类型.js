console.log(typeof "hello");//console.log()控制台输出内容
console.log(typeof 222);//"number"
console.log(typeof '222');//"string"
console.log(typeof false);
console.log(typeof "false");//这个上面的都是基本数据类型/
console.log(typeof null);//object//object function 是引用数据类型；
console.log(typeof {});
console.log(typeof function () {});//function

//变量是数据的代言人；
var demoStr="hello";
console.log("-----------------------");
console.log(typeof demoStr);//string
demoStr=22;//不推荐这么做 ；
console.log(typeof demoStr);//number

//typeof 总是返回string类型的； typeof()
console.time("123");
console.log("+++++++++++++++++++++");
console.log(typeof (typeof "hello"));
console.log(typeof (typeof 222));
console.log(typeof typeof '222');
console.log(typeof typeof false);
console.log(typeof typeof "false");
console.log(typeof typeof null);
console.log(typeof typeof {});
console.log(typeof typeof function () {});
console.timeEnd("123");

console.assert(1==1,"打脸了");

var aloneVal=Symbol();
console.log(typeof aloneVal);//symbol  存在的意义，避免多人开发时，变量覆盖；