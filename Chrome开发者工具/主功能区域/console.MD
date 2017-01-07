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

2. **console.clear()**		清除控制台
	1. 这个方法是清空控制台的作用
	2. 同样的效果还可以点击右上角的![](https://sfault-image.b0.upaiyun.com/212/811/2128116153-56fde2dbba5f5_articlex)进行清除
	3. 快捷键ctrl+l 可以清除控制台
	
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

4. **console.debug()**	输出调试信息

	console.log方法的别称,功能和log一样，使用方法可以参考Console.log()

5. **console.dir()**
	
	详细输出信息,打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性；就像开始想知道console有哪些API的时候，dir输出就可以看有哪些方法和属性了，学习和了解新知识非常有用；

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


6. **console.log()**
7. **console.info()**
7. **console.error()**
8. **console.warn()**

7. **console.dirxml()**
8. **console.group()**
9. **console.groupCollapsed()**
9. **console.groupEnd()**
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