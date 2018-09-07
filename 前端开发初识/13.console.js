console.time("hahaha");
//    alert("22222");
console.log("info","haha");
console.log("info2"+"haha2");

console.warn("这是一段警告信息");
console.error("出错啦，你的配置信息有误");

//    alert(typeof "22");

//    断言

var a=1;
var b=2;
//=  ==
//=  这是用来赋值的;
//== 这个是用来判断的
console.assert(a===1,"这时候条件是a==1,实际a是1");
console.assert(b===1,"这时候条件是b==1，实际b是2");

//性能分析；
console.timeEnd("hahaha");//6.50390625ms

// console.dir(window);