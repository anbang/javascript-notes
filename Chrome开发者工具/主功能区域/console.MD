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
20. **console.timeEnd()**
21. **console.timeStamp()**
22. **console.timeline()**
23. **console.limelineEnd()**
24. **console.trace()**