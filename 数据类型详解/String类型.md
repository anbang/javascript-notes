# String类型

- 为什么说Javascript中万物皆对象
- 字符串的创建
- 字符串的方法

### 为什么说Javascript中万物皆对象

为了便于操作基本类型值，ECMAScript 提供了 3 个特殊的引用类型： Boolean 、 Number 和String (注意前面的是大写的，String不是string)。这些类型与引用类型相似，但同时也具有与各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。来看下面的例子。

		  var testString="朱安邦"
		  testString2=testString.indexOf("安");
		  console.log(testString,testString2);//朱安邦 1

testString是一个字符串，属于基本数据类型；按照前面按照数据类型来划分时候的理解，字符串是基本的数据类型，按照逻辑上将不应该有方法；但是上面的还是可以执行的；**在Javascript中万物皆对象**；

**下面解释为什么说Javascript中万物皆对象**

其实，为了让我们实现这种直观的操作，后台已经自动完成了一系列的处理；第一行的完整写法是
			
		var testString=new String("朱安邦");

是生成一个String的实例；我们可以通过dir打印出来看一下；

		  console.dir(new String("朱安邦"));

![](http://i.imgur.com/bk1wzI4.png)

打开chrome的控制台；可以看到上面这张图片;

			String
			0: "朱"
			1: "安"
			2: "邦"
			length: 3
			__proto__: String
			[[PrimitiveValue]]: "朱安邦"

数字的第0位是"朱"，第1位是"安"，第2位是"邦"，它的length是3;它的默认值是"朱安邦",它的原型(__proto__)是String这个类；在最开始的时候总结是，JS中万物皆对象，字符串类型(string)是字符串类(String)的一员，是会继承字符串类的所有属性。就好比人属于人类的一员，人会继承人类的所有特征一样；

点击[__proto__],打开它的原型，查看它继承String的哪些方法；String的默认值是【""】

![](http://i.imgur.com/nkvTqtf.png)

继承了String这个类的这么多方法；其中就有indexOf这个方法；

![](http://i.imgur.com/YkVzNCd.png)

这个方法的原型，指向了Function的prototype(注意constructor这个属性,默认会指向Function本身)，再次打开__proto__，会打开继承的Object这个基类；之所以说是基类，是因为Object.__proto__是null，已经到顶了；

可以输出看一下

		  console.dir((new String("朱安邦")).__proto__);//String
		  console.dir((new String("朱安邦")).__proto__.__proto__);//Object 这里查到了Object
		  console.dir((new String("朱安邦")).__proto__.__proto__.__proto__);//null 这里查到的是Object.__proto__;已经是null；

因为有原型的原因，所以可以使用indexOf方法；当然，也可以在testString.__proto__使用该方法,因为上面有indexOf这个方法；

		  var testString="朱安邦"
		  testString2=testString.indexOf("安");
		  testString3=testString.__proto__.indexOf("安");
		
		  console.log(testString,testString2,testString3);//朱安邦 1 -1

如果使用下面是就不可以了；

		  testString4=testString.__proto__.__proto__.indexOf("安");

会报下面的错误，因为在testString.__proto__.__proto__上面并没有idnexOf这个方法；

		  testString.__proto__.__proto__.indexOf is not a function 

引用类型与基本包装类型的主要区别就是对象的生存期。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。来看下面的例子：

		  var testStr = "我是一个字符串";
		  testStr.color = "我的附加的一个颜色值";
		  console.log("testStr.color的值是：",testStr.color); //testStr.color的值是： undefined

		  var testObj={};
		  testObj.color = "我的附加的一个颜色值";
		  console.log("testObj.color的值是：",testObj.color); //testObj.color的值是： 我的附加的一个颜色值

在此，第二行代码试图为字符串 testStr 添加一个 color 属性。但是，当第三行代码再次访问 testStr 时，其 color 属性不见了。问题的原因就是第二行创建的 String 对象在执行第三行代码时已经被销毁了。第三行代码又创建自己的 String 对象，而该对象没有 color 属性。

Object 构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例。例如：

		var obj = new Object("some text");
		console.log(obj instanceof String); //true

把字符串传给 Object 构造函数，就会创建 String 的实例；而传入数值参数会得到 Number 的实例，传入布尔值参数就会得到 Boolean 的实例。

> 要注意的是，使用 new 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。

例如：

		var value = "25";
		var number = Number(value); //转型函数
		alert(typeof number); //"number"
		var obj = new Number(value); //构造函数
		alert(typeof obj); //"object"

在这个例子中，变量 number 中保存的是基本类型的值 25，而变量 obj 中保存的是 Number 的实例。

### 字符串的创建

字符串的2种创建方法；

		var stringObject = new String("hello world one"); //这个是字符串对象，尽量不要这么做；bad
		var testString="hello word too"; //这个是基本的字符串值 , 推荐这么做 good，因为有原型链也可以访问到String的方法
		console.log(stringObject,stringObject.length);// string 对象 14
		console.log(testString,testString.length);//hello word too 14
		//这个例子输出了字符串 "hello world too" 中的字符数量，即 "14" 。应该注意的是，即使字符串中包含双字节字符（不是占一个字节的 ASCII 字符），每个字符也仍然算一个字符

String 类型的每个实例都有一个 length 属性，表示字符串中包含多个字符。来看下面的例子

### 字符串的方法

##### 查找方法
- 字符串方法
	- charAt(index)
		- 功能：返回指定位置的字符。
		- 参数:字符在字符串中的下标。必须；
		- 注释：字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。

	- charCodeAt(index)
		- 功能：返回在指定的位置的字符的 Unicode 编码。
		- 参数:字符在字符串中的下标。必须；
		- 注释：字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。

	- formCharCode(Unicode,Unicode,Unicode)
		- 功能：用Unicode 编码创建一个字符串。
		- 参数：一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
		- 注释：该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定。它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 String.fromCharCode()，而不是myStringObject.fromCharCode()。

	- 三者的关系
		- charAt与charCodeAt共性：都是根据下标来查询字符，一个是查找实际的字符，一个是字符对应的Unicode值，有效范围0-length-1
		- charCodeAt与fromCharCode互为方向操作;但是charCodeAt是查询，而fromCharCode是创建
- 位置方法**（ 常用 ）**
	- indexOf(searchValue)
		- 功能：返回某个指定的字符串值在字符串中首次出现的位置。
	- lastIndexOf()
	- 共性
- 匹配方法
	- natch()
	- search()
	- replace()
	- split()

#####操作方法
- 拼接方法	
	- concat()
- 截取方法
	- 根据下标截取子串
		- slice()
		- substring()
	- 根据长度截取子串
		- substr()
- 空格处理
	- trim
	- trimLeft
	- trimRight
- 比较方法
	- localCompare()


##### 编码方法
- 字符串常规编码与解码
	- escape()
	- unescape()
- URI字符串编码与解码
	- encodeURI
	- decodeURI
- URI组件编码与解码
	- encodeURIComponent()
	- decodeURIComponent()


##### 转换方法
- 大小写转换
	- 转为大写
		- toUpperCase()
		- toLocaleUpperCase()
	- 转为小写
		- toLowerCase()
		- toLocaleLowerCase()
- 代码转换
	- 用JS动态格式化HTML，不具语义性，舍弃