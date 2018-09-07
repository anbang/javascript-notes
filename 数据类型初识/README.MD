<a name="zero"><a/>
# 数据类型初识

JS的数据类型；通过typeof来检测，得到的数据类型有 `String`、`number`、`boolean`、`null`、`undefined`、`Object` (Object是一切数据的基础)；

- 一、[String](#one)
- 二、[Number](#two)
- 三、[Boolean](#three)
- 四、[null和undefined](#four)
- 五、[Object](#five)
- 六、[null和undefined的区别和联系](#six)
- 七、[Symbol](#footer)
- 八、[练习题](#footer)

ECMAScript中有5种简单的数据类型，也称为基本数据类型；

`String`、`number`、`boolean`、`null`、`undefined`

一种复杂数据类型，也称为引用数据类型(typeof检测还有一种特殊的Funtion)

`Object` 

object本质是由一组无序的键值对组成的；

##### typeof操作符；

    console.log(typeof qqqq);//undefined，这个变量没有定义,但是不会报错；qqqq此时是变量；
    console.log(typeof (222));//number，是一个数字； typeof是操作符而不是方法，所以后面可以加()也可以不加；
    console.log(typeof "222");//string，是一个字符串
    console.log(typeof false);//boolean，是一个布尔值
    console.log(typeof {});//object 是一个对象
    console.log(typeof null);//objecy 是一个对象，在javascript里，null是一个空指针；
    console.log(typeof function(){});//function，是一个方法，也是属于object类型的；js里万物皆对象

从技术的角度上讲，函数在ECMAScript中是对象，不是一种数据类型，属于对象，在就是里万物皆对象的，但是，函数也确实有一些特殊的属性，因此通过typeof操作符来区分也是有必要的；

typeof 的返回值是一个字符串类型的数据：

typeof检测任何数据，返回的都是一个字符串，两次和两次以上的连续typeof结果肯定都是string；

    //两次检测 结果是string
    console.log("开始2次typeof");
    console.log(typeof typeof qqqq);
    console.log(typeof typeof 222);
    console.log(typeof typeof "222");
    console.log(typeof typeof {});
    console.log(typeof typeof null);
    console.log(typeof typeof function(){});

**变量和数据之间的关系和区别**

变量是数据的代言人，可以更方便快捷的操作数据；

**[↑ 返回目录](#zero)**

<a name="one"><a/>

## 知识点一、string；

##### 字符串的特性；

- 由0个或多个16位unicode字符组成； 
- 引号包裹，单引号和双引号都可以；但是单引号和双引号不能交叉使用；（放在引号内的任何东西都是属于字符串，即使里面没有东西或者空格，都属于合法的字符串 ）

	    var str1="2";
	    var str2='2';
	    var str3="";
	    var str4=" ";
	    var str5="function(){}";
	    //上面都是合法的string类型
	    console.log(typeof str1);
	    console.log(typeof str2);
	    console.log(typeof str3);
	    console.log(typeof str4);
	    console.log(typeof str5);	

- 使用.length属性可以访问字符串的长度;

length计算包括空格

	    //字符串长度
	    var strTest1="zhuanbang";//共9个
	    var strTest2="朱邦邦的JavaScript学习笔记";//共18
	    console.log(strTest1.length);//9
	    console.log(strTest2.length);//18
	    //这只是个简单的判断，如果想用JavaScript判断或者获取所占的字节，就不能这么判断了，因为中文和英文字符所占的字节长度不同，所以要想获得中文字符的真正长度，就需要对输入的字符进行判断或过滤(可以unicode区间进行判断)，如果符合中文字符，则使用不同的标准。	

- 无法精确返回双字节字符长度(上面已经做说明)
- 转义序列表示一个字符
- 字符串一旦被创建，其值是不能改变的，若要改变必须销毁原有字符串，然后用另一个包含新值的字符串填充改变量；
	- 原理后面会有总结

转义序列；
- \n 换行，常用的,这个需要记住；
- \\ 斜杠\是常用转义使用的
	- \’单引号 常用
	- \”双引号 常用

下面的仅作了解就可以了
- \t 制表符
- \b 空格
- \r 回车符
- \f 分页符
- \xnn 十六进制，n代表0-F
- \unnnn 以十六进制代码表示一个unicode字符

##### 类型转换

- toString()	
	- 把别的类型数据，转为字符串

	      适用类型
	      Number/Boolean/String/Object
	      参数：number类型的数值基数；一般不需要写，仅作了解，如果需要按照2/8/16进制来转换，需要写；
	      
toString()和String()

            var testNum=1;
            console.log(typeof testNum);//number
            var testTarget1=toString(testNum);
            var testTarget2=testNum.toString();//推荐用法
            var testTarget3=String(testNum);
            //var testTarget4=testNum.String();//错误的用法
            console.log(typeof testTarget1);//string
            console.log(typeof testTarget2);//string
            console.log(typeof testTarget3);//string

- String()

	      Null
	      Undefined
	      null和undefined没有toString方法，所以转换的时候用String()函数；

	    var testNull=null;
	    console.log(typeof testNull);//object
	    //var testString2=testNull.toString();//Uncaught TypeError:Cannot read property 'toString' of null
	    var testString3=String(testNull);
	    console.log(typeof testString3);//string

- Eval()
  - 计算字符串表达式的值并以数值形式返回；

	    //eval
	    var evalVal="1+2+5+8+10";
	    console.log(typeof evalVal);//string
	    var evalComputed=eval(evalVal);
	    console.log(evalComputed,typeof evalComputed);//26 "number"

#####如果把某个数据转化为字符串，可以有一个快捷的方式，就是把它与一个字符串""相加就可以了；


	    //+""用来转换字符串
	    var numVal=2;
	    var boolVal=false;
	    var nullVal=null;
	    var undefinedVal=undefined;
	
	    var numValPlus=numVal+"";
	    var boolValPlus=boolVal+"";
	    var nullPlus=nullVal+"";
	    var undefinedPlus=undefinedVal+"";z;
	    console.log(numValPlus,typeof numValPlus);
	    console.log(boolValPlus,typeof boolValPlus);
	    console.log(nullPlus,typeof nullPlus);
	    console.log(undefinedPlus,typeof undefinedPlus);

某个数据并不仅限于Number类型；数组也可以的；

		console.log([1,2,3,4]+"");//1,2,3,4


再看一组的加法(将字符串转为数字,注意浮点数的运算精度)；

		console.log("1.1" + 1.1);
		console.log(+"1.1" + 1.1);
		console.log((+"1.1") + (+1.1));//2.2 注：加入括号为清楚起见，不是必需的。


备注：先简单的总结，后面有专门深入总结；


**[↑ 返回目录](#zero)**

<a name="two"><a/>

## 知识点二、number;

包含：正数、负数、零、小数、以及特殊的NaN；

- 进制
  - 十进制（最常用）
  - 八进制（仅了解即可）
      - 第一位必须是0
      - 有效序列0-7（0后面跟着由0-7[包括0-7]之间的数字组成的序列）
      - 如果超出范围
        - 前导位0被忽略
        - 后续数值以十进制计数
  - 十六进制（仅了解即可）
      - 前两位必须0x
      - 有效序列
        - 0-9
        - A-F

- 浮点数；
  - 小数点后至少一位数字
  - 可以用科学计算法
    - 小数点后带有6个0的浮点数
    - 以e为底*10的正负N次幂
  - 最高精度：17位小数
  - 缺点
    - 存在舍入误差(**浮点数之间的运算也是非常不准确的，需要转成整数，然后再运算，运算后再转回对应的小数**)
    - 无法测试特定浮点数值，不要直接对浮点数进行运算；
    - 在做有浮点数运算的情况下，先转成整数，然后得到结果后再转成小数；

	    //浮点数直接运算，结果不一定是正确的;
	    var test1=0.1+0.2;
	    console.log(test1);//0.30000000000000004
	    var test2=(0.1*10+0.2*10)/10;
	    console.log(test2);//0.3

- 数值范围（仅作了解）
  - 最小值 Number.MIN_VALUE
  - 最大值 Number.MAX_VALUE：
  - 超出范围
      - 正无穷
          - Infinity
          - Number.POSITIVE_INFINTY
      - 负无穷
          - -Infinity
          - Number.NEGATIVE_INFINITY
      - 缺陷
          - 无法参与下一次计算
      - 检测方法，用isFinite
          - 超出范围 false
          - 合法范围true
- NaN
  - 含义
    - Not a Number 
    - 非数值,不是一个数值，但是NaN属于数值类型；

	    console.log(10-"zhuanbang");//NaN   Not a Number
	    var NaNVal=10-"zhuanbang";
	    console.log(typeof NaNVal);//number NaN是number类型
	    console.log(NaNVal==NaNVal);//false 自己和自己都不相等，因为NaN代表的是不是一个数，属于一个集合的统称；

  - 特点
    - 任何涉及NaN的操作都将返回NaN
    - NaN与人和数值都不相等包括其自身
    
		console.log(NaN==NaN)

  - 检测 isNaN
    - 可以转换为数值，为false
    - 不能转换为数值，为true
  
	    //isNaN
	    var age=25;
	    var ageError=25-"男";
	    console.log(isNaN(age));//false       age这个值不是一个数，对吗？      -> 不对  ->false
	    console.log(isNaN(ageError));//true   ageError这个值不是一个数，对吗？ -> 对    ->true


- 数值转换的三种方法（五种方式）；
  - Number() 最霸道的转换方法，只要不是纯数值类型，全部不能成功转换；
  - parseInt() 是Number的升级版本；有字符串出现也可能转换为数值；从前往后开始转，只要有一位可以转为数字都可以成功转换为数字；123sad可以转为123；（备注:会忽略浮点号；遇到第一个非数值的符号后直接退出转换,其中"."也是不合法的数值符号）
  - parseFloat() 属于parseInt的升级版本；可以转换为浮点数123.12dw可以转换为123.12；
  - -0  		比如"5"-0; 这个方法也属于Number()的；但是它属于隐式调用Number方法；
  - +"52"	这种也可以转化为数字；使用单目加法运算符,也是可以将字符串转换为数字的。(运算符那节会将，现在仅作了解即可；)
  
        console.log(10 + "10");
        console.log("10" + "10");
        console.log(+"10"+ + "10");
        console.log((+"10") + (+"10"));// 注：括号是非必需的
        console.log(-"10"+ 10);//了解下
                       

类型转转

##### Number()

数据类型的系统默认转换；

  - Boolean转换为数值的时候
    - true转为1；
    - flase转为0；
  - null转换为数值的时候 转换为0
  - undefined转换为数值的时候 转为NaN
  - string转换为数值的时候
    - 如果只包含数字
      - 转为十进制数
      - 前导0被忽略
    - 如果包含有效浮点格式
      - 浮点数值
      - 忽略前导0
    - 包含有效十六进制格式；相同大小的十六进制整数
    - 空字符串转为0；备注：""是空字符串 " "这个就不是空字符串了
    - 其他格式字符串NaN
  - Object 调用对象的valueOf()方法，然后依照前面的规则转换返回的值，如果转换的结果是NAN，则调用对应的toString方法，然后再次依照前面的规则转换返回的字符串值；
    - ValueOf()
    - ToString()


	      console.log(Number("hello word"));//NaN
	      console.log(Number(""));//0
	      console.log(Number("000011"));//11
	      console.log(Number("true"));//NaN
	      console.log(Number(true));//1

##### parseInt()

  - parseInt特性
    - 忽略前导空格
    - 直接找到第一个非空格字符
      - 不是数字字符或负号,退出，解析不出数字
        - 小数点不是有效数字
      - 如果第一个是数字字符
        - 解析所有后续字符
        - 遇到非数字字符结束
  - parseInt参数
    - 参数1、要解析的字符串
    - 参数2、转换时所使用的基数；为了消除在使用parentInt函数时可能导致的格式，第二个参数可以指定要解析的基数，16就是十六进制；一般不传第二个参数

	        console.log(parseInt("AF"));//NaN,默认十进制解析的
	        console.log(parseInt("AF",16));//175

##### parseFloat()

  - 从第一个字符开始解析
  - 遇到无效浮点格式后结束
  - 只有第一个小数点有效
  - 忽略前导0
  - 十六进制始终为0
  - 没有小数点或小数点后全0；转换为整数

	        //num1是多少分
	        var num1="564878.12415ssss";
	
	        var min1=Number(num1)/60,
	            min2=parseInt(num1)/60,
	            min3=parseFloat(num1)/60;
	        console.log(min1,min2,min3);
	
	        var targetMin=parseInt(min2);
	        console.log(targetMin);//9414秒


**[↑ 返回目录](#zero)**

<a name="three"><a/>
## 知识点三、boolean
- true为真，flase为假（false是布尔值，而Flase只是标识符）；通常用在if/else的判断语句中（如果需要的话，通常还会配合逻辑与&&，逻辑或||来完成）
- true不一定=1；flase不一定=0；
- 使用boolean()进行转换；任何数据类型的值调用Boolean()函数，都会返回一个Boolean值；也可以用(!/!!来转换)
  - 转为true的
    - Boolean的true本身
    - 任何非空字符串
    - 任何非零数值
    - 对象
  - 转换为flase
    - false本身
    - 空字符串
    - 0和NaN（0=-0吗？可以输出看一下，是等于的）

	          console.log(0===(-0));//true

    - null和undefined；

为false值的是，false本身、空字符串、0、NaN、null、undefined；这些值要记住，很重要；


**!和!!**：

!是取反的意思；先将其它的数据类型转换为布尔类型；然后在取反；

!!是将其他的数据类型转换为不二类型，相当于Boolean；

**自身做布尔运算时候的转换**

类型 | 规律 | 示例
--- | ---| ---
Object | 都是true | Alert(!![])
Number | 只是0和NaN是false | Alert(!!0)
String | 只有空字符串是false(不是空格字符串) | Alser(!!””)
Function | 都是true |
null，undefined | 都是false  |

**总结：0、NaN、””、null、undefined、false本身；只有这六个是false类型的；其它都是true；**


**数据类型和逻辑运算规律表**

【我手动画的转换图】
![](https://raw.githubusercontent.com/Broszhu/zhuanbang-javascript-notes/master/img/path1/typeChange.jpg)

详细解说


类型A | 类型B | 比较时候的运算原理 | 说明
----|------|----|----
对象 | 对象  | 比较是不是同一个内存地址，肯定不相等 | []==[] false
对象 | 字符串  | 对象先转化为字符串，然后做比较 | -
对象 | 布尔类型  | 两边都要先转为数字(false是0，true是1)；对象类型先转隐式调用toString方法，然后再Number() | []==false,[]==0,[1]==1,[1]==true,[2]==true
对象 | 数字  | 对象要转为数字，再进行比较(对象先隐式调用toString方法转换为字符串，然后再把这个字符串转化为数字，相当于字符串放到number这个方法中) | -
数字 | 布尔  | 是进行数字的比较，布尔转为数字 | -
数字 | 字符串  | 两边都要转换为数字再进行比较 | -
布尔 | 字符串  | 两边都要转为数字再进行比较 | -
null | undefined  | True;因为undefined派生自null | -
null/undefined | 其它所有类型  | Null和undefined和其他类型比较都是false；（这两个方法没有toString方法） | null==false,null==0,null==””




**[↑ 返回目录](#zero)**

<a name="four"><a/>

## 知识点四：null和undefined；

undefined类型只有一个值，就是undefined；null类型也只有一个值就是null；它们的名称既是类型也是值；

null是空值，是一个空指针，一般表示一个变量定义了但是没有值（值为空）；undefined是未定义；

    console.log(xxx);// xxx is not defined
    
和下面
    
    var xxx;
    console.log(xxx)

两者是不一样的；

没有发现对象，也是undefined；

    var msg={
        msg1:1,
        mag2:2
    };
    console.log(msg.msg1);//1
    console.log(msg.msg3);//undefined

- null（空值，曾经赋过值，但是目前没有值）
  - 逻辑上null表示一个空对象的指针
  - 使用typeof检测的时候会返回object；（object原型的终点也是null）
- undefined（没有值，指从没有赋过值）
  - 使用var声明变量但没有初始化/赋值的
  - 区分空对象指针与尚未定义的变量
  - 对未初始化的变量以及未声明的变量使用typeof运算符均会返回undefined；

在非严格模式和严格模式下，我们可以声明一个undefined的局部变量，因为undefined是一个标识符，可以当作变量来使用和赋值；但却不能声明一个null的局部变量，因为null是一个特殊关键字，并不是一个标识符；注意这是为了深入理解null和undefined的背后原理而挖出来的不同，请不要真的声明一个undefined的变量（这是一个非常不好的习惯，严格点的压缩工具，压缩时都不会给你通过的，直接给你抛Error；）

- undefined和null的关系；

是undefined派生自null；因为undefined派生子null；所以Null和undefined做比较的时候是true；但是null和undefined和别的人和类型比较都不想等；

  - undefined派生子null，因此在使用”==”进行比较的时候会返回true；
  - 没有必要将变量显示声明undefined；
  - 声明非空对象对应将其赋值为null；比如做定时器的时候用timer=null来重置变量；

> Undefined类只有一个值，就是特殊的undefine；（大写的Undefined是代表Undefined类的意思，就好比人类和人的关系；）

	      var test1;
	      var test2=undefined;
	      console.log(test1==undefined);//true，变量声明了，但是没有定义；
	      console.log(test1=="undefined");//false,"undefined"是一个字符串，含有undefined的字符；而不是undefined类型；
	      console.log(test2==undefined);//true，变量声明了，但是没有被定义，undefined是变量的默认值；我们声不需要显示的把某个变量设置为undefined，因为没有赋值的变量，默认就是undefined;可以试验下，这里的两个等于号和三个等于号的区别，2个是比较（会隐式转换类型，===是不转化类型的，是绝对相等）
	      console.log(test1);//undefined
	      console.log(test2);//undefined
	      console.log(test3);//Error，报错了; Uncaught ReferenceError: test3 is not defined；对于尚未声明的变量，只能执行一项操作，就是typeof检测其数据类型；（对未经声明的变量调用delete也不会导致错误，但属于脱裤子放屁，没啥意义，而且在严格模式下确实会导致错误；）

> Null是第二个只有一个值的数据类型，这个特殊的值是null，从逻辑上来看，null值表示一个空对象指针，而这也正是typeof操作符检测null时候，返回"object"的原因；
只要意在保存对象的变量还没有真正保存对象，就应该明确的让变量赋值为null值；这不仅可以体现null作为空对象指针的惯例，而且也有助于进一步却分null和undefined；



<a name="six"><a/>
## 六、null和undefined的区别和联系
Undefined是javascript中的一大特点，是javascript独有的数据和数据类型(这个数据类型只有这一个值；就是undefined，它的类型也是undefined)，既然它是javascript独有的一个数据类型，那它在javascript编程里必然有它的特点；所以本节也在重复说；

在javascript里，null和undefined都表示不存在的数据，并且undefined也是从null中继承而来的，那null是什么？undefined又是什么？他们两个都有什么共性和区别呢？看下面描述

- null和undefined都是表示没有的，不存在的值；他们两个在进行逻辑转换时候都是false；这两个值进行比较是true；
    - Null和undefined没有toString方法；所以null和undefined和人和数据比较都是false；
    - 因为undefined派生自null，所以undefined和null做数据类型比较的时候的true；
- null表示空引用，它是object类型，undefined表示未定义，它是undefined类型；
- null是object类型，但不是object的实例；用instanceof为false；
- 如果一个变量的值是null，那么必须主动的给它赋值null；
- 一个变量未定义，或者变量定义里未赋值；则是undefined；
    - 需要注意的是，一个变量如果没有定义，是不能直接在程序里使用的（就是不能直接读取，但可以赋值）；比如说，本来没有定义一个叫a的变量；但是我去aconsole.log(a);在浏览器里这个语法会报错的；但是可以用typeof去运算；但是如果a定义了，但没有赋值；可以读，它的值就是undefined；表示这个变量没有被赋值；
- 对于属性来说，如果原来没有这个属性，根本就不存在这个属性，那么它的值就是undefined；
    - 对象的属性不需要定义，如果不存在也可以直接去读，不会报错，而会给一个undefined的值；
- 如果这个对象以后要用；但是现在还没有值，一般情况下，会给他一个null的值；（如果在处理数据的时候，临时创建了一个变量，逻辑运算后，这个变量没有用了，也推荐把这个对象置为null,比如做定时器的时候）
- 在函数(方法)里，如果必须返回值；但是值又计算不出来，那就返回一个null；（这是规范，而不是语法规定，JS里遵循这个规范）
    - 比如网页中没有ID是div1的元素，则下面的这句脚本返回null；
    - Document.getElementById(“div1”)//返回null；
    - 但是没有返回值的函数，它的返回值都是undefined；

**白话文**：
- null：     你有一个种树的想法，圈一块地，说你要在这里种树；
- undefined：你有一个种树的想法，圈一块地，说你要在这里种树；同时你还挖了一个坑准备种树（仅仅是挖坑，也还没有种树）；

**[↑ 返回目录](#zero)**

<a name="five"><a/>

## 知识点五、object

Object类型包括，数组、正则等等；

- 定义：一组数据或功能的集合
- 声明  
  - var o=new Object()//Object后面的()可以省略，但不推荐
  - var o={}
  
- 属性和方法
  - constructor：保存用于创建当前对象的函数，构造函数就是Object()
  - HasOwnProperty(propertyName) 检测给定输定在当前对象实例中是否存在（而不是实例的原型中）
  - isPrototypeOf(object) ：检测传入的对象是否是另一个对象的原型（而不是在实例中）；
  - propertyIsEnumerable(propertyName)；检测给定属性是否能用for-in语句每句来枚举；
  - toLocaleString() 返回对象的字符串表示，该字符串与执行环境的地区对应；
  - toString() 返回对象的字符串表示
  - valueOf() 返回对象的字符串，数值或布尔值表示；通常与toString()的值相同；
  - 在ECMAScript中，Object是所有对象的基础，因此所有对象都具有这些基本的属性和方法；方法的具体原理，后面数据类型和原型链中具体说；
  - BOM/DOM中的对象，都是属于宿主对象，因为他们是由宿主实现提供和定义的，但是ECMAScript不负责定义宿主对象，因此宿主对象可能会也可能不会继承Object；

### 总结：精华如下：

JS的核心语言特性在ECMAScript中定义的；ECMAScript包含了所有基本用法，操作符，数据类型，以及完成基本的计算任务所必须的对象；但是没有对取得输入和产生输出的机制做出规定；

**数字类型**，包含：正数、负数、零、小数、以及特殊的NaN；

**NaN**：not a number不是一个数；但是属于number数据类型；用typeof检测的返回结果是number；NaN和NaN不相等；例如：NaN==NaN-->false；typeof NaN  等于:number；

**isNaN**:检测一个值是否为有效的数字，不是有效数字返回的是true；是有效数字返回的false；

例如：isNaN(“zhuanbang”)-->true;isNaN(“12”)-->false;

**Number**:将其他的数据类型强制转换为数字类型，如果是将一个字符串转化为数字，需要所有的字符都是有效的数字，

例如:Number(“23”)--->23；而Number(“23px”)-->NaN；

**parseIne/parseFloat**:将其他的数据类型转换为数字类型（相对于Number来说没有那么的强制），如果是将一个字符串转化为数字；只需要从左到右的依次查找即可。把有效的数字进行转化；

例如parseInt(“23px”)-->23;

parseFloat可以在parseInt的基础上转化小数（parseInt是不能转换成浮点数的）

**String**:字符串数据类型，在js中用””或者’’包起来的都是字符串；字符串由字符组成，字符的个数就是字符串的长度，每一个字符的位置都可以通过索引来表示;

例如str[0]就是找到第一个字符；

str.length就是字符串的长度；

**Boolean**:布尔类型，只有两个值：true/false；

**!和!!**：

!是取反的意思；先将其它的数据类型转换为布尔类型；然后在取反；

!!是将其他的数据类型转换为不二类型，相当于Boolean；

**Object**:对象数据类型，由多组属性名和属性值组成的（key:value）

对象中有几种常见的形式；

	{}是对象。
	[]是数组；
	/^$/是正则...；

js中规定一个对象的属性名是不可重复的(这句话一定要记住，处理很多事务的时候，经常会用到对象的属性来进行操作；)

**typeof**：检测数据类型的运算符；返回的结果是一个字符串；里面包含了对应的数据类型；例如”object”在JS中typeof null的结果也是object；

**Instanceof**：检测某一个实例是否属于这个类；在类的继承中检测的不是很严禁；

**[↑ 返回目录](#zero)**


# 七、Symbol 类型

Symbol 是JavaScript的原始数据类型，Symbol实例是唯一且不可改变的.可以作为对象属性的标识符使用;

在没有ES6的时候，属性名是很容易被覆盖的；

	比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin模式），新方法的名字就有可能与现有方法产生冲突。

**为了从根本上防止属性名的冲突，就是ES6引入Symbol的原因。**

在其他编程语言中 symbol也被称为原子(atoms).

在JavaScript中, Symbol 是 基本数据类型 的一种，Symbol 对象是 Symbol原始值的封装 ,Symbol 类型是 ECMAScript 6 (es6) 中新添加的特性，在ECMAScript 5中没有对应的类型。

Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型;

一是原来就有的字符串，
二是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

    let aloneVal = Symbol();//注意不要用new来生成new；
    console.log(typeof aloneVal);//symbol

注意不要用new来生成new；即时在ES5中，除了使用自己定义构造函数外，也不推荐加new；因为历史遗留原因，ES6中new创建string也支持，但不推荐这么用；

Symbol函数前不能使用new命令，是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

Symbol里面的参数，是描述使用的；仅仅是为了控制输出时候方便识别，没有别的用了；

    const s1 = Symbol('foo');
    const s2 = Symbol('bar');
    console.log(s1,s2);//Symbol(foo) Symbol(bar)

如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。

**注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。**

    //和NaN一样，连自己都不等于自己：因为里面的参数只是一个描述;
    console.log(Symbol("foo") == Symbol("foo"));//false
    console.log(Symbol("") == Symbol(""));//false
    console.log(Symbol() == Symbol());//false   连自己都不等于自己：
    const foo = Symbol();
    const bar = Symbol();
    const symbolVal = Symbol("11");
    console.log(typeof foo , typeof bar);//symbol symbol
    console.log(typeof foo === "symbol");//true
    console.log(typeof bar === "symbol");//true
    console.log(bar === bar);//true 当然如果用变量储存，俩个变量是相等的，但这并不说明2个相同Symbol值是相同的
    console.log(bar === foo);//false
    console.log(symbolVal);//Symbol(11)

##### Symbol值不能与其他类型的值进行运算，会报错。

Symbol值不能与其他类型的值进行运算，会报错;但是可以显式转为字符串/布尔值;但是不能转为数值;

    //Symbol不可以进行运算，但是可以转换为字符串和布尔值，但是不能转为数值；
    const sym=Symbol("flag");
    //console.log(sym+"hello baby");// Cannot convert a Symbol value to a string
    console.log(String(sym)+"hello one");//Symbol(flag)hello one
    console.log(sym.toString()+"hello two");//Symbol(flag)hello two
    console.log(Boolean(sym),typeof Boolean(sym));//true "boolean"
    console.log(Number(sym));//Cannot convert a Symbol value to a number

### 作为属性名的Symbol



**[↑ 返回目录](#zero)**

<a name="footer"><a/>
## 练习题：
- 如何让alert弹出框的信息换行
- var str=true+11+null+9+indefined+”zhuanbang”+flase+null+9+[],str的值是多少？为什么？
- 在js中，{}、[]分别代表什么意思？
- NaN是什么意思？这个值有什么特点？
- 请问alert(Number(“08”))；输出的结果是什么？
- 请写出下面表达式的结果
  - Null instanceof Object
  - Null===undefined
  - Null==undefined
  - NaN==NaN
  - False==0
  - False==-1
  - “”==0
  - []==0
  - []==[]
  - !![]
  - False==null
  - False==””
  - False==”   ”
  - 0.1+0.2==0.3
  - “5”==5
- 有哪些值转换后是false
- 下面分别输出什么?

        console.log("22"+11);
        console.log("22"-2+11);
        console.log("22"+11-2);
        console.log(+"22"+11);
        
        console.log(Number(true))
        console.log(Number(false))
        console.log(Number(""))
        console.log(Number([1,2,3]))
        console.log(parseInt([3,2,3]))
        console.log(parseFloat([1,2,3]))