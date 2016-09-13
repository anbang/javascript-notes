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

