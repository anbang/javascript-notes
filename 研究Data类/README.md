# Date 类型

##### 首先输出看下Date有哪些方法

    var testDate=new  Date();
    console.dir(testDate);// 查看Date的方法

![](http://i.imgur.com/0hFfUAc.png)

##### Date事件函数的常用方法

	new Date()//获取客户端当前的事件（标准的事件格式数据）
    getFullYear();//获取四位年
    getMonth();//获取月0-11代表1-12月;用的时候，记得补1;
    getDate();//获取日
    getDay();//获取星期0-6代表周日-周六
    getHours();//获取小时
    getMinutes();//获取分
    getSeconds();//获取秒
    getMilliseconds();//获取毫秒
    getTime();//获取距离1970年一月一日午夜的毫秒差；

其中get对应的有set；比如有getMinutes就会有setMinutes；如果传入的值超过59就会增加小时数；

set相关的方法，只需要把get改为set就可以了；参数传入需要设置的对应值；

如果是getUTCMinutes是获取UTC日期中的分钟数；

有一个特殊的事件组件方法；getTimezoneOffset()返回本地时间与UTC时间相差的分钟数；

    var testDate=new  Date();
    console.log(testDate);
    console.log(testDate.getTimezoneOffset());//返回本地时间与UTC时间相差的分钟数；
    console.dir(testDate);// 查看Date这个类的方法


##### JS中Date对象getYear(）方法和getFullYear()方法区别

打印出来的方法中，有两个getYear；

- getYear（不推荐）
- getFullYear（推荐）

推荐getFullYear;

使用getYear()函数的本意是获取年份，如：

    var testDate=new  Date();
    console.log("testDate",testDate);//testDate Tue Sep 13 2016 17:12:15 GMT+0800 (中国标准时间)
    console.log("getYear",testDate.getYear());//getYear 116
    console.log("getFullYear",testDate.getFullYear());//getFullYear 2016 

原因是getYear 返回的是 "当前年份-1900" 的值（即年份基数是1900）
getFullYear():直接获取 Tue Sep 13 2016 17:12:15 GMT+0800 (中国标准时间) 中当前的年份；

使用js来获取年份，都是使用：getFullYear();因为这个直接就达到我们的目的了；


#### new Date()的用法；

- “月/日/年”，如 6/13/2004；
- “英文月名 日,年”，如 January 12,2016；
- “英文星期几 英文月名 日 年 时:分:秒 时区”，如 Tue May 25 2004 00:00:00 GMT-0700。
- YYYY-MM-DD HH:mm:ss.sss

	    var testDate1=new  Date();
	    var testDate2=new  Date("9/13/2016");
	    var testDate3=new  Date("09/13/2016");
	    var testDate4=new  Date("January 12,2016");
	    var testDate5=new  Date("Tue May 25 2016 00:00:00 GMT-0700");
	    var testDate6=new  Date("2004-05-25 00:01:02");
	    console.log("testDate1",testDate1);
	    console.log("testDate2",testDate2);
	    console.log("testDate3",testDate3);
	    console.log("testDate4",testDate4);
	    console.log("testDate5",testDate5);
	    console.log("testDate6",testDate6);

##### 计算程序的耗时

Data.now() 方法，返回表示调用这个方法时的日期和时间的毫秒数。这个方法简化了使用 Data 对象分析代码的工作;

    //取得开始时间
    var start = Date.now();
    //调用函数
    for(var i=0;i<10000000;i++){

    }
    //取得停止时间
    var end = Date.now();
    console.log(end-start);

支持 Data.now() 方法的浏览器包括 IE9+、Firefox 3+、Safari 3+、Opera 10.5 和 Chrome。在不支持它的浏览器中，使用+操作符把 Data 对象转换成字符串，也可以达到同样的目的。

    //取得开始时间
    var start = +Date.now();
    //调用函数
    for(var i=0;i<10000000;i++){

    }
    //取得停止时间
    var end = +Date.now();
    console.log(end-start);

# 日期的比较；

> 原理：比较的是转成毫秒数后，然后再比较毫秒数；日期越靠后，毫秒数越大；
> Date 类上有一个 valueOf() 方法，返回日期的毫秒表示（距离1970年午夜的毫秒差）。
> 如下；

    var testDate1=new  Date("8/13/2016");
    var testDate2=new  Date("9/13/2016");
    var testDate3=new  Date("1/1/1970");

    console.log(testDate1 > testDate2);//false
    console.log(testDate1 < testDate2);//true
    console.log(testDate1.valueOf());//1471017600000
    console.log(testDate2.valueOf());//1473696000000
    console.log(testDate3.valueOf()-testDate3.getTime());//1473696000000

# 推荐的日期格式化方法->toUTCString

    var testDate1=new  Date("8/13/2016");
    console.log(testDate1.toUTCString());//1471017600000

有一个名叫 toGMTString() 的方法，这是一个与toUTCString() 等价的方法，其存在目的在于确保向后兼容。不过，ECMAScript 推荐现在编写的代码一律使用 toUTCString() 方法。