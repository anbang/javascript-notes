**JSON语法**

JSON 的语法可以表示以下三种类型的值。

- 简单值：使用与 JavaScript 相同的语法，可以在 JSON 中表示字符串、数值、布尔值和 null 。但 JSON 不支持 JavaScript 中的特殊值 undefined 。
- 对象：对象作为一种复杂数据类型，表示的是一组无序的键值对儿。而每个键值对儿中的值可以是简单值，也可以是复杂数据类型的值。
- 数组：数组也是一种复杂数据类型，表示一组有序的值的列表，可以通过数值索引来访问其中的值。数组的值也可以是任意类型——简单值、对象或数组。

** JSON 不支持变量、函数或对象实例，它就是一种表示结构化数据的格式，虽然与 JavaScript 中表示数据的某些语法相同，但它并不局限于JavaScript 的范畴。**

# 简单值 (JSON 字符串必须使用双引号)

最简单的 JSON 数据形式就是简单值。

如下：

	"hello word"
	2222222

上面两个都是简单的JSON；


JavaScript字符串 与 JSON字符串的最大区别在于，JSON 字符串必须使用双引号（单引号会导致语法错误）。

布尔值和 null 也是有效的 JSON 形式。

但是，在实际应用中，JSON 更多地用来表示更复杂的数据结构，而简单值只是整个数据结构中的一部分。在接口中，用来存储键的值；

# 对象 (对象的属性名必须加双引号)

**JavaScript对象**

	var person1 = {
	    name: "person name",
	    age: 29
	};
	var person2 = {
	    "name": "person name",
	    "age": 29
	};

上面两种方式都可以的；

**JSON**

	{
	    "name": "person name",
	    "age": 29
	}

与 JavaScript 的对象字面量相比，JSON 对象有两个地方不一样。

- 1，没有声明变量（JSON 中没有变量的概念）。
- 2，没有末尾的分号（因为这不是 JavaScript 语句，所以不需要分号）。
 
再说一遍，**对象的属性必须加双引号，这在 JSON 中是必需的**。**属性的值可以是简单值，也可以是复杂类型值**，因此可以像下面这样在对象中嵌入对象

	{
	    "name": "person name",
	    "age": 29,
	    "address": {
			"name":"详细地址"
	        "city": "杭州市",
	        "location": "文一西路XX号"
	    }
	}

这个例子在顶级对象中嵌入了学校（ "address" ）信息。虽然有两个 "name" 属性，但由于它们分别属于不同的对象，因此这样完全没有问题。不过，**同一个对象中绝对不应该出现两个同名属性**。

与 JavaScript 不同，**JSON 中对象的属性名任何时候都必须加双引号**。

**手工编写 JSON 时，忘了给对象属性名加双引号或者把双引号写成单引号都是常见的错误。**,如果需要后台帮忙给数据的时候。假如JSON字符串不能成功转为JSON对象，原因一般都是JSON的数据格式不对；

# 数组

**JavaScript 中的数组字面量**：

	var values = [25, "hi", true];

**JSON中的数组**

	[25, "hi", true]

> 注意，JSON 数组也没有变量和分号。

##### 把数组和对象结合起来，可以构成更复杂的数据集合

	[
	    {
	        "title": "Professional JavaScript",
	        "authors": [
	            "Nicholas C. Zakas"
	        ],
	        edition: 3,
	        year: 2011
	    },
	    {
	        "title": "Professional JavaScript",
	        "authors": [
	            "Nicholas C. Zakas"
	        ],
	        edition: 2,
	        year: 2009
	    },
	    {
	        "title": "Professional Ajax",
	        "authors": [
	            "Nicholas C. Zakas",
	            "Jeremy McPeak",
	            "Joe Fawcett"
	        ],
	        edition: 2,
	        year: 2008
	    },
	    {
	        "title": "Professional Ajax",
	        "authors": [
	            "Nicholas C. Zakas",
	            "Jeremy McPeak",
	            "Joe Fawcett"
	        ],
	        edition: 1,
	        year: 2007
	    },
	    {
	        "title": "Professional JavaScript",
	        "authors": [
	            "Nicholas"
	        ],
	        edition: 1,
	        year: 2006
	    }
	]

这个数组中包含一些表示图书的对象。每个对象都有几个属性，其中一个属性是 "authors" ，这个属性的值又是一个数组。对象和数组通常是 JSON 数据结构的最外层形式（当然，这不是强制规定的），利用它们能够创造出各种各样的数据结构。