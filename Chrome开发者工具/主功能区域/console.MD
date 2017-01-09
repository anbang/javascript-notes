# Console

显示各种警告和错误信息，并且提供了shell用来和文档、开发者工具交互；

![](http://i.imgur.com/28zDYpL.jpg)

1. 控制台操作
2. 信息筛选
3. 信息展示

##### 查看console的api

    console.dir(console);//查看console的api

在浏览器中，可以看到有console可以用的api如下；

![](http://i.imgur.com/QeaYwnM.jpg)

API列表如下：

1. **console.assert()**		断言
	
	判断第一个参数是否为真，false的话抛出异常并且在console输出相应信息。

		var isDebugOne=true,
	        isDebugTwo=false;
	    console.assert(isDebugOne,"isDebugOne为true时输出这段话");
	    console.assert(isDebugTwo,"isDebugTwo为false时输出这段话");

	![](http://i.imgur.com/kEdYQXO.png)

2. **console.clear()**		JS代码中此方法清除控制台
	1. console.clear这个方法是清空控制台的作用;
	2. 如果在控制台中，可以写为clear();
	3. 如果勾选了 Preserve log(保留日志)复选框,那么console.clear()将被禁用;这个时候如果想清空打印日志，可以通过清楚按钮或者通过clear+L,再或者右键clear console来清除；

	同样功能的方法有下面几种：
	1. console.clear()
	2. 点击右上角的![](https://sfault-image.b0.upaiyun.com/212/811/2128116153-56fde2dbba5f5_articlex)进行清除
	3. 快捷键ctrl+l 可以清除控制台
	4. 在console面板上右键，选择clear console
	
3. **console.count()**		执行次数
	
	以参数为标识记录调用的次数，调用时在console打印标识以及调用次数。

	    function test(){
	        //bala bala
	        console.count("test被执行的时输出，记录当前第几次执行")
	    }
	    test();
	    test();
	    test();
	    test();

	![](http://i.imgur.com/BA8rOFL.png)

		function countFn(data){
		        console.count("目标被执行的次数"+data)
		    }
		    var users=["zhu1","zhu2","zhu3"];
		    users.forEach(function (ele, index, ary) {
		        countFn(ele);
		    });
		    countFn(users[0]);


4. **console.debug()**	输出调试信息

	console.log方法的别称,功能和log一样，使用方法可以参考Console.log()

5. **console.dir()**
	
	详细输出信息,打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性；就像开始想知道console有哪些API的时候，dir输出就可以看有哪些方法和属性了，学习和了解新知识非常有用；比for in 好用多了；

	![](http://i.imgur.com/TVKNmUY.png)
	![](http://i.imgur.com/yvlnYAB.png)

	1. console.log 用于输出普通信息
	2. console.dir 用于输出详细信息{对象的__proto__，直到基类}
	3. console.info 用于输出提示性信息
	4. console.error用于输出错误信息
	5. console.warn用于输出警示信息

	上面的方法都可以使用printf风格的占位符，仅支持**字符（%s）**、**整数（%d或%i）**、**浮点数（%f）** 和 **对象（%o）**四种，但是可以混用的；

	    //printf风格的占位符
	    console.log("%s是一个字符串",'2018');//2018是一个字符串
	    console.log("%d年%d月%d日",2017,01,07);//2017年1月7日
	    console.log("%f是JS中的浮点数，计算时候容易出错，需要转换成整数再运算",1.22);//1.22是JS中的浮点数，计算时候容易出错，需要转换成整数再运算
	    console.log("第一个参数%s，第二个参数%d,第三个参数%f,第四个参数%o",2017,2018,2019,2020);//这里都是数字类的

	![](http://i.imgur.com/ss8Xrlr.png)

	CSS格式说明符允许您在控制台中自定义显示。在字符串开始的地方使用说明符,并在第二参数中给出你想要应用的样式即可。
	
		console.log("%c这里声明了是字符串，第二个参数是CSS的样式", "color: blue; font-size: x-large");





6. **console.log()**
7. **console.info()**
7. **console.error()**
8. **console.warn()**

7. **console.dirxml()**

	<table id="mytable">
	    <tr>
	        <td>A</td>
	        <td>A</td>
	        <td>A</td>
	    </tr>
	    <tr>
	        <td>bbb</td>
	        <td>aaa</td>
	        <td>ccc</td>
	    </tr>
	    <tr>
	        <td>111</td>
	        <td>333</td>
	        <td>222</td>
	    </tr>
	</table>

	    var mytable = document.getElementById('mytable');
	    console.dirxml(mytable);

	![](http://i.imgur.com/WbfcbBJ.png)

	在HTML和XML元素上调用console.dirxml()等效于调用console.log()

8. **console.group()**
9. **console.groupEnd()**

		group和groupEnd是一套使用的；group里面是该分组的标题；关闭上面的日志记录分组

	    function name(obj) {
	        console.group('groupName');
	        console.log('first: ', obj.first);
	        console.log('middle: ', obj.middle);
	        console.log('last: ', obj.last);
	        console.groupEnd();
	    }
	
	    name({"first":"Wile","middle":"E","last":"Coyote"});
	
	    function doStuff() {
	        //还可以分组里面套分组
	        console.group('doStuff()');
	        name({"first":"Wile2","middle":"E2","last":"coyote2"});
	        console.groupEnd();
	    }
	
	    doStuff();

9. **console.groupCollapsed()**

	groupCollapsed和group是一样的功能，唯一的区别就是groupCollapsed默认打印的是折叠的记录；

12. **console.markTimeline()**
13. **console.memory**
14. **console.get()**
15. **console.set()**
16. **console.profile()**
17. **console.profileEnd()**
18. **console.table()**
19. **console.time()**
	
	这个方法是和timeEnd一起配合使用的，可以用来检测某段代码的执行时间

	    console.time("timer");
	    for(var i=0;i<10000;i++){
	    }
	    console.timeEnd("timer");//timer: 0.270ms

20. **console.timeEnd()**
21. **console.timeStamp()**
22. **console.timeline()**
23. **console.limelineEnd()**
24. **console.trace()**

一些属性和方法：

["$$", "$x", "dir", "dirxml", "keys", "values", "profile", "profileEnd", "monitorEvents", "unmonitorEvents", "inspect", "copy", "clear", "getEventListeners", "undebug", "monitor", "unmonitor", "table", "$0", "$1", "$2", "$3", "$4", "$_"]

# 控制台的一些快捷键

- 方向键盘的上下键
- $_命令返回最近一次表达式执行的结果，功能跟按向上的方向键再回车是一样的

	- ![](https://sfault-image.b0.upaiyun.com/319/083/3190830157-56fdf0d7d355e_articlex)
	
	- 上面的$_需要领悟其奥义才能使用得当
- $0-4代表了最近5个你选择过的DOM节点
	- 什么意思？在页面右击选择审查元素，然后在弹出来的DOM结点树上面随便点选，这些被点过的节点会被记录下来，而$0会返回最近一次点选的DOM结点，以此类推，$1返回的是上上次点选的DOM节点，最多保存了5个，如果不够5个，则返回undefined。
	- ![](https://sfault-image.b0.upaiyun.com/282/256/2822561375-56022eab67825_articlex)
- Chrome 控制台中原生支持类jQuery的选择器(并不是jQuery选择器);
	- 也就是说你可以用$加上熟悉的css选择器来选择DOM节点，它查出来的是node或者nodelist
	- 简单理解就是 document.querySelector 而已（$$ 简单理解就是 document.querySelectorAll ）
	- ![](https://sfault-image.b0.upaiyun.com/243/706/2437068952-56fdf0df2c76c_articlex)

- keys和values前者返回传入对象所有属性名组成的数据，后者返回所有属性值组成的数组
	- ![](https://sfault-image.b0.upaiyun.com/297/867/2978671118-56fdf0e0a6169_articlex)
	- 说到这，不免想起console.table方法了
	- ![](https://sfault-image.b0.upaiyun.com/214/148/214148831-56fdf0e101121_articlex)

# console也可以作为辅助使用

主功能区有一个console，此时按ESC后，会呼出一个辅助功能区，这里也有一个console，可以配合除console以外的主功能使用，当然如果同时切换到主功能的console，和辅助区的console，只会显示一个console；

![](http://i.imgur.com/mtWDNBD.png)

console默认的情况下，如果相邻的两个数是一样的，如果不想智能折叠，可以在设置里设置下；

	settings-Preferences - console - timestamps(显示时间戳)。
	由于每个信息的时间戳不同，每条信息都显示在其自己单独的行上。

    for (let i=0;i<5;i++){
        console.log("1");
    }

	前后的区别如下；

![](http://i.imgur.com/wsVv2zU.png)

console的设置有如下的功能：

![](http://i.imgur.com/A50dcsd.jpg)


 - report input events blocked for too long
  - hide network messages
 	- 默认情况下，控制台报告网络问题。勾选此选项将指示控制台不显示这些错误的日志。例如，将不记录404和500这种系列的错误。
  - log XMLHttpRequests
 	- 决定控制台是否要记录每个XMLHttpRequest。
  - show timestamps
 	- 当调用控制台方法的时候，为显示在控制台上的每个消息预置时间戳。 这个主要用于在发生特定事件时进行调试。这将禁用消息栈（message stacking）。
  - autocomplete form history
 	- 控制台会记住你的历史消息记录，当您在控制台中键入时，控制台会自动显示自动完成下拉菜单，这个下拉菜单匹配您已键入文本的相关方法。这包括您以前执行的命令。，轻松实现自动完成功能，有合适的，安table键即可；
  - enable custom formatters
 	- 控制JavaScript对象的格式。
 	- https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
  - preserve log upon navigation
 	- 在页刷新或页面跳转期间保留控制台历史记录。
 
 ![](http://i.imgur.com/TCFC5BM.jpg)
 
 上面是几个按钮的说明，除了清除日志比较常用，别的很少用到；
 
 - 清除日志
 	- 把日志都清空，上面有介绍过的；
 - 过滤日志
 	- 很少用到的，就是对日志的一个筛选
 - 执行上下文
 	- 一般都是在top下，如果非top下，会红色警戒你；
 - 保留日志，
 	- 刷新不清空
 
 ![](http://i.imgur.com/Iw0HX5P.jpg)
 
 右键还有一个save as 可以把日志储存起来，同样没什么用处，一般用不到；
