console.log(!true);//false
console.log(true && false);//false
console.log(true || false);//true

var a="",
    b="B有值";
var result=a||"A的值是假的",
    result2=b||"B的值是假的";
console.log(result);
console.log(result2);