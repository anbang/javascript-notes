//string 单引号'' / 双引号""包裹的内容
/*alert(typeof "22");
alert(typeof '22');
alert(typeof "");
alert(typeof '');*/
console.log(typeof "22");
console.log(typeof '2');
console.log(typeof '');
console.log(typeof "");
console.log(typeof "false");

console.log(typeof "null");

//length,一般作为用户输入店名/用户名的长度限制；需要注意双字符精准度的问题；
var str="123123123123123123123123123123";
var chinaStr="哈喽";//双字节，不精确 4字节；
console.log(str.length);
console.log(chinaStr.length);//2

//字符串创建的原理；
var str1="12345";//把"12345"这个字符串赋值给str1这个变量；
str1="1234";//把"1234"这个字符串赋值给str1这个变量；
/*
* 并不是把"12345"修改为"1234"然后赋值给str1
*
* */
console.log(str1);//"1234"
console.log('1"23\'4\n56\'78');
//    alert("1213123\naaaaaa")

//toString方法；
//22 - > "22"
console.log(typeof 22);
console.log(typeof (22).toString());
var testStr=22+"";//隐式调用toString方法
console.log(typeof 22+"");//+ - * / 2*2+10
console.log(typeof testStr);//2*(2+10)

//eval()
console.log("00000000000000000");
console.log(eval("22+12"));//"22+12" -> 22+12 ->34


//
console.log("**********************");
console.log(typeof (22+""));//string  22 -> "22"
console.log(typeof (+"22"));//"22" -> 22 单目运算符+
console.log([1,2,3,4]+"");//1,2,3,4

console.log("**********************");
console.log("1.1" + 1.1);
console.log(+"1.1" + 1.1);
console.log((+"1.1") + (+1.1));