console.log(null==0);//false
console.log(false==0);//true
console.log({}=="");//true

//转换分析1
console.log("zhuanbang"?true:false);//true,因为非空的字符串是一个真值；

//转换分析2
console.log("zhuanbang"==true);//这个时候输出什么呢？在分析一里非空字符串是一个true，那么非空字符串==true吗？

//转换分析3
console.log("zhuanbang"==false);//如果上面的的返回不是true，那么这个会返回true吗？

/*转换分析2-解析
* 1、右边的布尔值会转为数字,true->1;"zhuanbang"==1
* 2、左边的字符串会转为数字，"zhuanbang"因为里面有字母，所以转换为NaN;NaN==1
* 3、NaN和任何数据都不想等，包括自己，所以结果是false，并不是true；
* */

/*
* 1、右边的布尔值会转为数字,false->0;"zhuanbang"==0
* 2、左边的字符串会转为数字，"zhuanbang"因为里面有字母，所以转换为NaN;NaN==0
* 3、NaN和任何数据都不想等，包括自己，所以结果是false，结果也不是true
* */


//相同的小分析
console.log("zhuanbang"===true);
console.log("1"===1);
console.log("zhuanbang"==="zhuanbang");
var person1={name:"zhuanbang"};
var person2={name:"zhuanbang"};
console.log(person1===person2);//false, 是不同的引用地址；在堆内存中储存是不一样的；