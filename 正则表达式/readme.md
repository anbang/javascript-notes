程序员必备的知识；

最起码要能写出常用替换、匹配的正则；实在不行也要能看懂的；

# RegExp 类型

主要是以下几个方面

- 创建
- 元字符
- 修饰符
- 属性
- 方法

# 创建

有两种方法，字面量和构造函数模式

- 字面量

	    var reg=/\d+/g;
	    console.log(reg.test("789456"));//true

- 构造函数

	    var reg2=new RegExp("\\d+","g");
	    console.log(reg2.test("1234444456"));//true
	    console.log(reg2.test("asdsa"));//false

# 元字符

- 单个字符数字
	- . 匹配除换行符以外的任意字符
	- [a-zA-Z0-p] 与 [^a-zA-Z0-p] 匹配方括号中的任意字符，前面代^是匹配不在方括号中的任意字符；
 	- \d 与 \D	匹配数字和匹配非数字；
 	- \w 与 \W	匹配字符和匹配非字母
- 空白字符
	- \O		匹配null字符
	- \b		匹配空格字符
	- \f		匹配换页符
	- \n		匹配换行符
	- \r		匹配回车符
	- \s 和 \S		匹配空白字符，空格、制表符或换行符。大写的S是匹配非空字符
	- \t		匹配制表符
- 定位符
	- ^		行首匹配
	- $		行尾匹配
	- \A		只匹配字符串的开始处
	- \b \B	匹配单词便捷，词在[]内无效，匹配非单词边界
	- G		匹配当前搜索的开始位置
	- \Z \z	匹配字符串结束处或行尾，只匹配字符串结束处
- 限定符
	- x?		匹配0个或一个x
	- x*		匹配0个或者任意多个x
	- x+		匹配一个或者多个
	- x{m,n}	匹配m-n个x；
- 分组
	- (?:x)		匹配x但不记录匹配结果（匹配不捕获）
	- x(?=y)		当x后面接y时匹配x
	- x(?!y)		当x后不是y时匹配x
- 引用
	- \1...\9	$1...$9		返回就割在模式匹配期间找到的，最近保存的部分
- 或模式
	- x|y|z		匹配x或者y或者z

# 修饰符
可以记img，这样方便记住；

- i 		忽略大小写模式
- m		多行匹配
- g		全局模式

# 属性

- 实例属性
	- global			布尔值，检测是走设置g标记
	- ignoreCase		布尔值，检测是否设置i标记
	- nultiline		布尔值，检测是否设置了m标记
	- lastIndex		整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。
	- source			返回正则表达式的字符串表示,按照字面量形式而非传入构造函数中的字符串模式返回。

通过这些属性可以获知一个正则表达式的各方面信息，但却没有多大用处，因为这些信息全都包含在模式声明中

    var pattern1 = /\[bc\]at/i;
    console.log(pattern1.global); //false
    console.log(pattern1.ignoreCase); //true
    console.log(pattern1.multiline); //false
    console.log(pattern1.lastIndex); //0
    console.log(pattern1.source); //"\[bc\]at"
    var pattern2 = new RegExp("\\[bc\\]at", "i");
    console.log(pattern2.global); //false
    console.log(pattern2.ignoreCase); //true
    console.log(pattern2.multiline); //false
    console.log(pattern2.lastIndex); //0
    console.log(pattern2.source); //"\[bc\]at"

尽管第一个模式使用的是字面量，第二个模式使用了 RegExp 构造函数，但它们的source 属性是相同的。可见， source 属性保存的是规范形式的字符串，即字面量形式所用的字符串。

- 构造函数属性
	- $_		input	返回最近一次匹配的字符串
	- $&		lastMatch	返回最近一次的匹配项
	- $+		lastParen	返回最近一次匹配的捕获组
	- $`		leftContext	返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符
	- $'		rightContext	返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符
	- $*		multiline		检测表达式是否采用多行匹配m

# 方法

- 实例方法
	- test	在字符串中检测模式匹配，返回true或false
	- exec	该方法是专门为捕获组而设计的
		- 功能：正则捕获的数据，一个数组；
		- 参数：要应用模式匹配的字符串
		- 特性：
			- 使用全局标记g；持续查找所有匹配项并返回
			- 不使用全局标记g；始终返回第一个匹配项信息
		- 执行的过程
			- 检测字符串参数，获取正则表达式匹配文本
			- 找到匹配文本则返回一个数组
				- 第0个元素：与整个模式匹配的字符串
				- 其他元素：与捕获组匹配的字符串
			- 否则返回null
		- 派生属性
			- index		匹配项在字符串中的位置
			- input		应用正则表达式的字符串
			- length		返回数组元素的个数

    var text = "cat, bat, sat, fat";
    var pattern1 = /.at/;
    var matches = pattern1.exec(text);
    console.log(matches.index); //0
    console.log(matches[0]); //cat
    console.log(pattern1.lastIndex); //0
    matches = pattern1.exec(text);
    console.log(matches.index); //0
    console.log(matches[0]); //cat
    console.log(pattern1.lastIndex); //0

    var pattern2 = /.at/g;
    var matches = pattern2.exec(text);
    console.log(matches.index); //0
    console.log(matches[0]); //cat
    console.log(pattern2.lastIndex); //3

    matches = pattern2.exec(text);
    console.log(matches.index); //5
    console.log(matches[0]); //bat
    console.log(pattern2.lastIndex); //8

第一个模式 pattern1 不是全局模式，因此每次调用 exec() 返回的都是第一个匹配项（ "cat" ）。而第二个模式 pattern2 是全局模式，因此每次调用 exec() 都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。此外，还应该注意模式的 lastIndex 属性的变化情况。在全局匹配模式下， lastIndex 的值在每次调用 exec() 后都会增加，而在非全局模式下则始终保持不变。\

> IE 的 JavaScript 实现在 lastIndex 属性上存在偏差，即使在非全局模式下，lastIndex 属性每次也会变化。


- 字符串方法
	- match		找到一个或者多个正则表达式的匹配
	- replace	替换与正则表达式匹配的子串
	- search		检索与正则表达式匹配的值
	- split		把字符串分割为字符串数组