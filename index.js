var testStr = 'cccccccc';
var testAry = [2,3,4,5];
var testObj = {
    name:"zhu",
    age:26,
    gender:"man"
};

console.log(Object.prototype.toString.call(testStr));//[object String]
console.log({}.toString.call(testAry));//[object Array]
console.log({}.toString.call(testObj));//[object Object]
