
<a name="zero"></a>
# 函数的初识
- 知识点一、[初识函数](#one)
- 知识点二、[函数的定义](#two)
- 知识点三、[函数的调用](#three)
- 知识点四、[函数的方法](#four)
- 知识点五、[arguments对象](#five)
- 知识点六、[函数的参数](#six)
- 知识点七、[this关键字的指向](#seven)
- [面试题](#footer)s

<a name="one"></a>
# 一、初识函数

### 函数的意义：**高内聚，低耦合，复用与多态**；

可以通过函数封装任意多条语句，而且可以在任何地方，任何时候进行调用，使用非常灵活；

```$xslt
// 基本的语法
function functionName(argument1,argument2){
    /*一堆的代码*/
}
//下面是函数的一个实例，
function diff(a,b){
    console.log(a-b);
}
diff(10,5);//输出5
diff(20,2);//输出18
```

**函数可以通过它的函数名来调用，后面加()，就可以执行了**；

上面的diff分别输出的是5和18；a和b是函数的两个参数，最终的结果是打印在控制台的；

### return

函数还有一个属性，就是可以 return；

**知识点1：函数的返回值只能通过return来返回,除了return以外，没有任何声明可以表示返回值**

ECMA中函数在定义的时候，不要求函数是否返回一个值，但是每个函数都有return的权利；

任何函数在任何时候都可以通过return语句返回的值来实现把值返回给外部变量（return的位置是任意的）；

```$xslt
function diff(a,b){
    return a-b;
}
var diffNumber=diff(10,5);
console.log(diffNumber);
//diffNumber用来接收函数的返回值，如果return了一个值，但是外部没有变量去接收它，就失去了return的意义了；
```
 
知识点2：**return的特性**：无论return在哪里，只要有执行了return同一条的代码后，函数立即停止，并且立即退出，因此位于return语句之后的任何代码都永远不会执行； 
```$xslt
function diff(a,b){
    return a-b;
    console.log("测试的代码");//这条语句，永远不会执行；
}
var diffNumber=diff(10,5);
console.log(diffNumber);
```


**知识点3**：一个函数可以多条return；

写一个函数，计算两个数之间的相差多少；
   
```$xslt
function diff(a,b){
    if(a>b){
        return a-b;
    }else{
        return b-a;
    }
}
var diffNumber1=diff(10,5);
var diffNumber2=diff(5,10);
console.log(diffNumber1);//5
console.log(diffNumber2);//5
```
这个函数diff用来计算两个数之间才差值；如果a比b小，则用b-a；否则a-b；函数中用if分为两个分支，分别具有自己的return语句来执行正确的计算逻辑；
    
**知识点4**：return语句可以不带任何返回值，这种情况下，函数返回值是undefined；这种写法，一般用在需要提前停止函数又不需要返回值的情况；

```$xslt
function testReturn (arg){
    console.log("arg的值是："+arg);
    //如果传的值是空字符串，参数不对， 没必要处理了，直接return停止函数了，可以优化性能；；
    if(arg===""){return}
    console.log("一些处理参数的代码")
}
testReturn("");
```

**return的总结**

- 1、任何一个函数都有return关键字，用来导出函数内部的值；（闭包的思路）；
- 2、return是非必须的，可以写也可以不写；如果不写，或者return后面没有值，函数的返回结果都是undefined；
- 3、无论return写在哪里，只要函数执行到了return这条代码了，执行完以后，立即停止执行并且跳出函数；会导致return下面的代码将不会执行；
- 4、推荐的做法是要么让函数始终都返回一个值，要么永远不要返回值，；否则函数有时候有返回值，有时候没有返回值，调试起来不方便；


**[↑ 返回目录](#zero)**

<a name="two"></a>
# 二、函数的定义

-  function语句的定义方法
-  函数直接量的定义方法（需要考虑变量的预解释）
-  构造函数的定义方法

```
//function语句的定义方法
function test1(arg1,arg2){
    console.log("function语句的定义方法:",arg1+arg2);
}

//函数直接量的定义方法
var test2 = function(arg1,arg2){
    console.log("函数直接量的定义方法:",arg1+arg2);
};
var utility={
    init:function () {
        console.log("执行")
    }
};

//构造函数的定义方法
var test3 = new Function("arg1","arg2","console.log('构造函数的定义方法:',arg1+arg2)");

```

前两种定义方式，比较常见，最后一种做了解即可

**[↑ 返回目录](#zero)**

<a name="three"></a>
# 三、函数的调用

1.直接调用： 函数名(实参列表)

```$xslt
function test1(arg1,arg2){
    console.log("function语句的定义方法:",arg1+arg2);
    return;
}

//直接调用
test1(1,2);//function语句的定义方法: 3
```

2.在链接中调用

```$xslt
<body>
	<button type="button" name="button" onclick="test1(9,9)">click me</button>
	<script>
			function test1(arg1,arg2){
				console.log("function语句的定义方法:",arg1+arg2);
				return;
			}
	</script>
</body>
```

3.在事件中调用

```$xslt
<body>
<button type="button" name="button" id="btn1">click me</button>
<script>
    var oBtn1=document.getElementById("btn1");
    oBtn1.onclick=function(){
        test1(2,2)
    };
    
    function test1(arg1,arg2){
        console.log("function语句的定义方法:",arg1+arg2);
        return;
    }
</script>
</body>
```

4.递归调用

**在函数内部调用函数自身**

```$xslt
<button type="button" name="button" id="btn1">click me</button>
<script>
    var oBtn1=document.getElementById("btn1");
    oBtn1.onclick=function(){
      test1(10,1);
    };
    
    function test1(arg1,arg2){
      console.log("最开始的调用方法",arg1+arg2);
      arg1--;
      if(arg1>0){
        test1(arg1,arg2)
      }
      return;
    }
</script>
```

函数的调用还是非常灵活的；

**[↑ 返回目录](#zero)**
<a name="four"></a>
# 四、函数的方法

- call：将函数作为对象的方法来调用，将参数传递给该方法，在后面this关键字时候详细总结
- apply：将函数作为对象的方法来调用，将参数以数组的形式传递给该方法，在后面this关键字时候详细总结
- toString：返回函数的字符串表示

```
console.log(test1.toString());

function test1(){
    console.log("最开始的调用方法");
}
```

**[↑ 返回目录](#zero)**

<a name="five"></a>
# 五、arguments对象

### 功能：存放实参的参数列表
```
test1(1,2);//[1,2]
test1(1,2,3,4,5);//[1, 2, 3, 4, 5]
function test1(){
  console.log(arguments);
}

```
argutments在普通模式里，可以在函数内部修改函数的值，但是不建议那么做；这点在严格模式下也有限制

- 在严格模式，函数内部不能修改argument的值，即使修改了，操作也是无效的；
- 其次重写arguments值会导致语法错误，代码不执行；

### 特性：
- 仅能在函数体内使用

```
test1(1,2);//[1,2]
function test1(){
  console.log(arguments);
}
console.log(arguments);//Uncaught ReferenceError: arguments is not defined

```
- 带有下标属性，但是并非数组

```
test1(1,2);//1 2 undefined
function test1(){
  console.log(arguments[0],arguments[1],arguments[2]);
}

```
- 函数声明时自动初始化

- 属性
	- 1.length		获取函数实参的长度
		   
    ```$xslt
    test1(1,2,3,4,5);// 输出5
    function test1(){
      console.log(arguments.length);
    }
    ```
	- 2.callee		返回当前正在指向的函数
				   
    ```$xslt
    test1(1,2,3,4,5);// 输出函数本身
    function test1(){
      console.log(arguments.callee);
    }
    ```
    
	- 3.caller		返回调用当前正在执行函数的函数名;在chrome里是没有的；尽量不要用arguments的这个属性；
		- 在chrome里的callee是arguments.callee.caller
		- 对于函数来说，caller 属性只有在函数执行时才有定义。 如果函数是由 Javascript 程序的顶层调用的，那么 caller 包含的就是 null 。

        ```
        function callerDemo() {
            if (arguments.callee.caller) {
                var a = callerDemo.caller.toString();
                console.log(a);
            } else {
                console.log("this is a top function");
            }
        }
        function handleCaller() {
            callerDemo();
        }
        handleCaller();
        function calleeDemo() {
            console.log(arguments.callee);
        }
        calleeDemo();
        ```

**函数的参数是函数的灵魂**；ECMA中的函数不在乎传来多少个参数，也不在乎你传进来的是什么类型的，即使你定义的函数值接受两个参数，在调用的时候未必严格的传进两个实参，你传一个，三个，不传都是没有问题的、`这就是函数的多态`；

原理是因为ECMA是把函数用在内部用一个”数组”来表示的，函数接受到的始终都是这个数组，并不关心这个”数组”是否包含参数，已经包含的都是什么参数，可以通过`arguments[index]`这种的方式来访问，也可以通过`arguments.length`的值来确定传进来了多个参数；

```$xslt
function testArgument(){
    console.log("hello argument[0]:"+arguments[0]+" and argument[1]:"+arguments[1]);
}
testArgument("1","2");//hello argument[0]:1 and argument[1]:2
testArgument("1");//hello argument[0]:1 and argument[1]:undefined
testArgument();//hello argument[0]:undefined and argument[1]:undefined
```

函数的一个特点，形参只是提供了操作的便利，但并不是必须的；函数的定义和调用与参数是没有关系的，只有在函数内部引用了形参才与实参个数和值有关系；

如果函数只是定义了，但是没有执行，那就是脱裤子放屁了；因为对程序不会有任何意义；

```$xslt
function sum(a,b){
    if(arguments.length===2){
        console.log("第1个参数和第二个参数的和是:"+a+b);
    }else if(arguments.length===1){
        console.log("block,只传了一个参数 "+a+"，让我如何相加")
    }else{
        console.log("我拒绝运算！")
    }
}
sum(10,8);//第1个参数和第二个参数的和是:108
sum(10);//block,只传了一个参数 10，让我如何相加
sum();//我拒绝运算！
```

上面就牵扯到了函数的多态，根据不同的参数来做不同的事情;



**[↑ 返回目录](#zero)**

<a name="six"></a>
# 六、函数的参数

- 参数类型；
    1.	形参，定义函数时使用的参数，接收调用该函数时传递的参数
    2.	实参，调用函数时传递给函数的实际参数；
- 特性；
    1.	参数个数没有限制；（实参<形参，多余形参==undefined；实参>形参，多余实参被忽略；）
    2.	参数的数据类型没有限制，通过arguments对象访问参数数组；
    3.	参数始终按值传递
        - a)	基本类型-传值；
        - b)	引用类型-地址；


**[↑ 返回目录](#zero)**

<a name="seven"></a>

### 七、this关键字的指向
    
- this，指向当前操作对象；
- callee，指向参数集合所属函数
- prototype，指向函数附带的原型对象；
- constructor，指向创建该对象的构造函数；

### 面试题 