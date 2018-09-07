//    数据类型的判断
console.log("-------下面是typeof判断");
console.log(typeof "22");//string 字符串
console.log(typeof 22);//number 数字类型
console.log(typeof true);//boolean 布尔 英文考试了 T / F

console.log(typeof undefined);//undefined
console.log(typeof null);//Object
console.log(typeof {});//Object
console.log(typeof function () {});//function

//    区别
console.log("-------下面是区别");
console.log(typeof "undefined");//string 字符串
console.log(typeof "true");     //string 字符串
console.log(typeof "null");     //string 字符串
console.log(typeof "{}");       //string 字符串
console.log(typeof "function () {}");//string 字符串
