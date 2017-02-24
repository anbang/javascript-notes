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
	- indexOf(searchValue，fromindex)
		- 功能：返回某个指定的字符串值在字符串中首次出现的位置。
		- 参数：searchValue是必需的，规定需检索的字符串值；fromindex是可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
		- 注释：indexOf() 方法对大小写敏感！如果要检索的字符串值没有出现，则该方法返回 -1。
	- lastIndexOf(searchValue，fromindex)
		- 功能：返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。如果在 stringObject 中的 fromindex 位置之前存在 searchvalue，则返回的是出现的最后一个 searchvalue 的位置。
		- 参数：searchValue是必需的，规定需检索的字符串值；fromindex是可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
		- 注释：lastIndexOf() 方法对大小写敏感！如果要检索的字符串值没有出现，则该方法返回 -1。
	- 共性
- 匹配方法
	- natch()
	- search(regexp)
    	- 功能：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
    	- 该参数可以是需要在 stringObject 中检索的子串，也可以是需要检索的 RegExp 对象。要执行忽略大小写的检索，请追加标志 i。
    	- 注释：search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。如果没有找到任何匹配的子串，则返回 -1。
	- replace(regexp/substr,replacement)
    	- 功能：于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    	- 参数：regexp/substr必需。规定子字符串或要替换的模式的 RegExp 对象。如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。replacement必需。一个字符串值。规定了替换文本或生成替换文本的函数。
    	- 返回值：一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
    	- 说明：字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。
    	- 注意：ECMAScript v3 规定，replace() 方法的参数 replacement 可以是函数而不是字符串。在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。该函数的第一个参数是匹配模式的字符串。接下来的参数是与模式中的子表达式匹配的字符串，可以有 0 个或多个这样的参数。接下来的参数是一个整数，声明了匹配在 stringObject 中出现的位置。最后一个参数是 stringObject 本身。
	- split(separator,howmany)
    	- 功能：把字符串分割为字符串数组。
    	- 参数：separator必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。howmany，可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
    	- 返回值：一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。
    	- 注释：如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。String.split() 执行的操作与 Array.join 执行的操作是相反的。

#####操作方法
- 拼接方法	
	- concat(stringX,stringX,...,stringX)
    	- 功能：连接两个或多个字符串。
    	- 参数：stringX	必需。将被连接为一个字符串的一个或多个字符串对象。
    	- concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 stringObject 的尾部，并返回连接后的字符串。请注意，stringObject 本身并没有被更改。stringObject.concat() 与 Array.concat() 很相似。
    	- 提示：请注意，使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
- 截取方法
	- 根据下标截取子串
		- slice(start,end)
    		- 提取字符串的片断，并在新的字符串中返回被提取的部分。
    		- 参数：start	要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。end	紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
    		- 一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
    		- String 对象的方法 slice()、substring() 和 substr() （不建议使用）都可返回字符串的指定部分。slice() 比 substring() 要灵活一些，因为它允许使用负数作为参数。slice() 与 substr() 有所不同，因为它用两个字符的位置来指定子串，而 substr() 则用字符位置和长度来指定子串。还要注意的是，String.slice() 与 Array.slice() 相似。
		- substring(start,stop)
    		- 功能：提取字符串中两个指定的索引号之间的字符。
    		- 参数：start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。stop可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
    		- 返回值：一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。
    		- 说明：substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
	- 根据长度截取子串
		- substr(start,length)
    		- 功能：在字符串中抽取从 start 下标开始的指定数目的字符。
    		- start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。length可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。- 空格处理
    		- 返回值：一个新的字符串，包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。
    		- 提示和注释：注释：substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。
    		- 重要事项：ECMAscript 没有对该方法进行标准化，因此反对使用它。
	- trim : 清除前置以及后缀空格
	- trimLeft：清除前置空格
	- trimRight：清除后缀空格
- 比较方法
	- localCompare()
    	- 功能：用本地特质顺序比较两个字符串
    	- 参数：用元字符串进行比较的字符串
    	- 返回值：说明比较结果的数字，
        	- 负数：元字符串<参数字符串
        	- 0：原字符串=参数字符串
        	- 正数：元字符串>参数字符串

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