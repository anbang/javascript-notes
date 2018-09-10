//连接字符串，把数值转换为字符串
var strOne="abc",
    strTwo="xyz";
console.log(strOne+strTwo);//abcxyz
console.log(strOne+123);//abc123

//多次运算
var testOne="字符串";
console.log(testOne+2+5);//字符串25
console.log(testOne+(2+5));//字符串7

var strEmpty="";
var testNum=222;
var targetData=strEmpty+testNum;
console.log(typeof testNum);//number
console.log(typeof targetData);//string

var num=0;
num=num+2;
num=num*3;
num=num/2;
num++;
num--;
num+=1;
num-=2;
num*=3;
num/=2;
num%3;
console.log(num);

//操作数类型和结果类型
console.log("5"+"3");//53
console.log("5"-"3");//2
console.log("5"*"3");//15
console.log("15"/"3");//5