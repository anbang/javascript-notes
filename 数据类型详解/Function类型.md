# Function 类型
- 函数也是对象，函数名也是变量
- 

函数是JavaScript里最有意思的了；而有意思的根源，则在于函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。**由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。**

 在前面的连接里有介绍函数的三种创建方法；
[https://github.com/Broszhu/zhuanbang-javascript-notes/blob/master/JavaScript-%E5%9F%BA%E7%A1%80/6.%E5%87%BD%E6%95%B0%E5%88%9D%E8%AF%86.md](https://github.com/Broszhu/zhuanbang-javascript-notes/blob/master/JavaScript-%E5%9F%BA%E7%A1%80/6.%E5%87%BD%E6%95%B0%E5%88%9D%E8%AF%86.md "1.6函数的初识")

	```
	//function语句的定义方法
	function test1(arg1,arg2){
		console.log("function语句的定义方法:",arg1+arg2);
		return;
	}

	//函数直接量的定义方法
	var test2 = function(arg1,arg2){
		console.log("函数直接量的定义方法:",arg1+arg2);
		return;
	}

	//构造函数的定义方法
	var test3 = new Function("arg1","arg2","console.log('构造函数的定义方法:',arg1+arg2)");//不推荐

	```

有人可能会有疑问；test2的变量中， function 关键字后面没有函数名。这是因为在使用函数表达式定义函数时，没有必要使用函数名——通过变量 test2 即可以引用函数。另外，还要注意函数末尾有一个分号，就像声明其他变量时一样。

test3是使用 Function 构造函数。 Function 构造函数可以接收任意数量的参数，但最后一个参数始终都被看成是函数体，而前面的参数则枚举出了新函数的参数。

从技术角度讲，test3是一个函数表达式。但是，不推荐使用这种方法定义函数，因为这种语法会导致解析两次代码（第一次是解析常规 ECMAScript代码，第二次是解析传入构造函数中的字符串），从而影响性能。不过，这种语法对于理解“函数是对象，函数名是指针”的概念倒是非常直观的。

**由于函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量没有什么不同**

    >  例子

            function sum(num1, num2){
                return num1 + num2;
            }
            console.log(sum(10,10)); //20
            var anotherSum = sum;
            console.log(anotherSum(10,10)); //20
            sum = null;
            console.log(anotherSum(10,10)); //20

以上代码首先定义了一个名为 sum() 的函数，用于求两个值的和。然后，又声明了变量 anotherSum ，并将其设置为与 sum 相等（将 sum 的值赋给 anotherSum ）。注意，使用不带圆括号的函数名是访问函数指针，而非调用函数。此时， anotherSum 和 sum 就都指向了同一个函数，因此 anotherSum() 也可以被调用并返回结果。即使将 sum 设置为 null ，让它与函数“断绝关系”，但仍然可以正常调用anotherSum() 。

![](http://i.imgur.com/fW3p8hv.png)

