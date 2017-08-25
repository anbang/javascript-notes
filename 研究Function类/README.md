# Function 类型
- 函数也是对象，函数名也是变量
- 

函数是JavaScript里最有意思的了；而有意思的根源，则在于函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。**由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。**

 在前面的连接里有介绍函数的三种创建方法；
[数据类型初识-function](https://github.com/zhubangbang/zhubangbang-javascript-notes/blob/master/数据类型初识/README_FUNCRTION.md)

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


### 二、JavaScript中的函数没有重载的概念

将函数名想象为指针，也有助于理解为什么 ECMAScript 中没有函数重载的概念。

            function addSomeNumber(num){
                return num + 100;
            }
            function addSomeNumber(num) {
                return num + 200;
            }
            var result = addSomeNumber(100); //300 最终得到的结果是300；

显然，这个例子中声明了两个同名函数，而结果则是后面的函数覆盖了前面的函数。以上代码实际上与下面的代码没有什么区别。

            var addSomeNumber = function (num){
                return num + 100;
            };
            addSomeNumber = function (num) { //在这里再次给addSomeNumber赋值；
                 return num + 200;
            };
            var result = addSomeNumber(100); //300

通过观察重写之后的代码，很容易看清楚到底是怎么回事儿——在创建第二个函数时，实际上覆盖了引用第一个函数的变量 addSomeNumber 。

### 三、函数声明与函数表达式

函数的定义方法不同，在调用的时候，也有需要注意的地方；函数声明和函数表达式在调用的时候就会牵扯到预解释的概念；

解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

            console.log(sum(10,10));//20
            function sum(num1, num2){
                return num1 + num2;
            }

在代码开始执行之前，解析器就已经开始预解释了，先找到var和function关键字的，预先声明，var 声明的变量声明后默认的值是undefined，function在声明的时候，会把这个函数保存为一个字符串；此时函数声明的那个变量所储存的是这个字符串的引用地址，预解释后，无论在哪里都可以调用这个函数；

换成下面函数表达式，就会出错了。

            console.log(sum(10,10));//Uncaught TypeError: sum is not a function
            var sum = function(num1, num2){
                return num1 + num2;
            }

因为此时的var num；sum的值在上面调用的时候，值是undecided；只能写在函数表达式的后面 ；该为下面这种写法就可以了；

              var sum = function (num1, num2){
                  return num1 + num2;
              }
              console.log(sum(10,10));

除了什么时候可以通过变量访问函数这一点区别之外，函数声明与函数表达式的语法其实是等价的。

> 也可以同时使用函数声明和函数表达式，例如 var sum = function sum(){} 。不过，这种语法在 Safari 中会导致错误。

### 四、作为值的函数

因为 ECMAScript 中的函数名本身就是变量，所以函数也可以作为值来使用。也就是说，不仅可以像传递参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回。看一看下面的函数。

            function callSomeFunction(someFunction, someArgument){
                return someFunction(someArgument);
            }

这个函数接受两个参数。第一个参数是一个函数，第二个参数是要传递给该函数的一个值。然后，就可以像下面的例子一样传递函数了。

              function callSomeFunction(someFunction, someArgument){
                  return someFunction(someArgument);
              }
            
              function add10(num){
                 return num + 10;
              }
              var result1 = callSomeFunction(add10, 10);//add10储存是是add10这个函数的内存地址
              console.log(result1); //20
            
              function getGreeting(name){
                   return "Hello, " + name;
              }
              var result2 = callSomeFunction(getGreeting, "Word");//getGreeting储存的是getGreeting这个函数的内存地址
              console.log(result2); //"Hello, Word"

这里的 callSomeFunction() 函数是通用的，即无论第一个参数中传递进来的是什么函数，它都会返回执行第一个参数后的结果。要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号。因此上面例子中传递给 callSomeFunction() 的是 add10 和 getGreeting ，而不是执行它们之后的结果。

##### 排序的思路；

从一个函数中返回另一个函数，而且这也是极为有用的一种技术。例如，假设有一个对象数组，我们想要根据某个对象属性对数组进行排序。而传递给数组 sort() 方法的比较函数要接收两个参数，即要比较的值。可是，我们需要一种方式来指明按照哪个属性来排序。要解决这个问题，
可以定义一个函数，它接收一个属性名，然后根据这个属性名来创建一个比较函数，下面就是这个函数的定义。

              function createComparisonFunction(propertyName) {
                return function(object1, object2){
                      var value1 = object1[propertyName];
                      var value2 = object2[propertyName];
                      if (value1 < value2){
                          return -1;
                      } else if (value1 > value2){
                            return 1;
                      } else {
                         return 0;
                      }
                };
              }

这个函数定义看起来有点复杂，但实际上无非就是在一个函数中嵌套了另一个函数，而且内部函数前面加了一个 return 操作符。在内部函数接收到 propertyName 参数后，它会使用方括号表示法来取得给定属性的值。取得了想要的属性值之后，定义比较函数就非常简单了。上面这个函数可以像在下面例子中这样使用。

            var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];
            data.sort(createComparisonFunction("name"));
            console.log(data[0].name); //Nicholas
            data.sort(createComparisonFunction("age"));
            console.log(data[0].name); //Zachary

这里，我们创建了一个包含两个对象的数组 data 。其中，每个对象都包含一个 name 属性和一个age 属性。在默认情况下， sort() 方法会调用每个对象的 toString() 方法以确定它们的次序；但得到的结果往往并不符合人类的思维习惯。因此，我们调用createComparisonFunction("name") 方法创建了一个比较函数，以便按照每个对象的 name 属性值进行排序。而结果排在前面的第一项是 name为 "Nicholas" ， age 是 29 的对象。然后，我们又使用了 createComparisonFunction("age") 返回的比较函数，这次是按照对象的 age 属性排序。得到的结果是 name 值为 "Zachary" ， age 值是 28的对象排在了第一位。

### 五、函数内部属性

- arguments 在函数初始那里有研究
- arguments.callee  当前函数本身；
- this
- arguments.caller  这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null 



##### arguments.callee

在函数内部，有两个特殊的对象： arguments 和 this 。其中， arguments 是一个类数组对象，包含着传入函数中的所有参数。虽然 arguments 的主要用途是保存函数参数，但这个对象还有一个名叫 callee 的属性，该属性是一个指针，指向拥有这个 arguments 对象的函数。请看下面这个非常经典的阶乘函数

            function factorial(num){
                if (num <=1) {
                    return 1;
                } else {
                    return num * factorial(num-1)
                }
            }

定义阶乘函数一般都要用到递归算法；如上面的代码所示，在函数有名字，而且名字以后也不会变的情况下，这样定义没有问题。但问题是这个函数的执行与函数名 factorial 紧紧耦合在了一起。为了消除这种紧密耦合的现象，可以像下面这样使用 arguments.callee 。

            function factorial(num){
                if (num <=1) {
                    return 1;
                } else {
                   return num * arguments.callee(num-1)
                }
            }
            var trueFactorial = factorial;
            factorial = function(){
                return 0;
            };
            console.log(trueFactorial(5)); //120
            console.log(factorial(5)); //0

在这个重写后的 factorial() 函数的函数体内，没有再引用函数名 factorial 。这样，无论引用函数时使用的是什么名字，都可以保证正常完成递归调用。

##### this

 this引用的是函数据以执行的环境对象——或者也可以说是 this 值（当在网页的全局作用域中调用函数时，this 对象引用的就是 window ）

            window.color = "red";
            var o = { color: "blue" };
            function sayColor(){
                console.log(this.color);
            }
            sayColor(); //"red"
            o.sayColor = sayColor;//函数的名字仅仅是一个包含指针的变量而已。因此，即使是在不同的环境中执行，全局的 sayColor() 函数与 o.sayColor() 指向的仍然是同一个函数。
            o.sayColor(); //"blue"

**this是当前的执行主体，谁执行的函数，this就是谁；**

上面这个函数 sayColor() 是在全局作用域中定义的，它引用了 this 对象。由于在调用函数之前，this 的值并不确定，因此 this 可能会在代码执行过程中引用不同的对象。当在全局作用域中调用sayColor() 时， this 引用的是全局对象 window ；换句话说，对 this.color 求值会转换成对window.color 求值，于是结果就返回了 "red" 。而当把这个函数赋给对象 o 并调用 o.sayColor()时， this 引用的是对象 o ，因此对 this.color 求值会转换成对 o.color 求值，结果就返回了 "blue" 。

##### arguments.caller

这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null 。

          function outer(){
            inner();
          }
          function inner(){
            console.log(inner.caller);
          }
          outer();

以上代码会输出 outer() 函数的源代码。因为 outer() 调用了 inter() ，所以inner.caller 就指向 outer() 。为了实现去耦合，也可以通过arguments.callee.caller来访问相同的信息。

          function outer(){
            inner();
          }
          function inner(){
            console.log(inner.caller);
            console.log(arguments.callee.caller);
          }
          outer();

当函数在严格模式下运行时，访问 arguments.callee 会导致错误。ECMAScript 5 还定义了arguments.caller 属性，但在严格模式下访问它也会导致错误，而在非严格模式下这个属性始终是undefined 。定义这个属性是为了分清 arguments.caller 和函数的 caller 属性。以上变化都是为了加强这门语言的安全性，这样第三方代码就不能在相同的环境里窥视其他代码了。严格模式还有一个限制：不能为函数的 caller 属性赋值，否则会导致错误。


### 六、函数的属性和方法

前面曾经提到过，ECMAScript 中的函数是对象，因此函数也有属性和方法。每个函数都包含两个属性： length 和 prototype 。其中， length 属性表示函数希望接收的命名参数的个数，如下面的例子所示

            function sayName(name){
                console.log(name);
            }
            function sum(num1, num2){
                return num1 + num2;
            }
            function sayHi(){
                console.log("hi");
            }
            console.log(sayName.length); //1
            console.log(sum.length); //2
            console.log(sayHi.length); //0

以上代码定义了 3 个函数，但每个函数接收的命名参数个数不同。首先， sayName() 函数定义了一个参数，因此其 length 属性的值为 1。类似地， sum() 函数定义了两个参数，结果其 length 属性中保存的值为 2。而 sayHi() 没有命名参数，所以其 length 值为 0。

在 ECMAScript 核心所定义的全部属性中，最耐人寻味的就要数 prototype 属性了。对于ECMAScript 中的引用类型而言， prototype 是保存它们所有实例方法的真正所在。换句话说，诸如toString() 和 valueOf() 等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访问罢了。在创建自定义引用类型以及实现继承时， prototype 属性的作用是极为重要的（第 6 章将详细介绍）。在 ECMAScript 5 中， prototype 属性是不可枚举的，因此使用 for-in 无法发现。

每个函数都包含两个非继承而来的方法： apply() 和 call() 。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。首先， apply() 方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是 Array 的实例，也可以是arguments 对象。

              var name="window name"
              function sum(num1, num2){
                var name="sum name"
                console.log(this.name,num1,num2);
              }
              function callSum1(num1, num2){
                var name="callSum1 name"
                sum.apply(this, arguments); // 传入 arguments 对象
              }
              function callSum2(num1, num2){
                var name="callSum2 name"
                sum.apply(this, [num1, num2]); // 传入数组
              }
              callSum1(10,20); //window name 10 20
              callSum2(10,30); //window name 10 30

在上面这个例子中， callSum1() 在执行 sum() 函数时传入了 this 作为 this 值（因为是在全局作用域中调用的，所以传入的就是 window 对象）和 arguments 对象。而 callSum2 同样也调用了sum() 函数，但它传入的则是 this 和一个参数数组。这两个函数都会正常执行并返回正确的结果。

              var name="window name"
              function sum(num1, num2){
                var name="sum name"
                console.log(this.name,num1,num2);
              }
              function callSum2(num1, num2){
                var name="callSum2 name"
                sum.call(this, num1, num2); // 传入单个的参数
              }
              callSum2(10,30); //window name 10 30

至于是使用 apply() 还是 call() ，完全取决于你采取哪种给函数传递参数的方式最方便。如果你打算直接传入 arguments 对象，或者包含函数中先接收到的也是一个数组，那么使用 apply()肯定更方便；否则，选择 call() 可能更合适。（在不给函数传递参数的情况下，使用哪个方法都无所谓。）

apply() 和 call() 真正的用武之地；它们真正强大的地方是能够扩充函数赖以运行的作用域。

            window.color = "red";
            var o = { color: "blue" };
            function sayColor(){
                console.log(this.color);
            }
            sayColor(); //red
            sayColor.call(this); //red
            sayColor.call(window); //red
            sayColor.call(o); //blue

这个例子是在前面说明 this 对象的示例基础上修改而成的。这一次， sayColor() 也是作为全局函数定义的，而且当在全局作用域中调用它时，它确实会显示 "red" ——因为对 this.color 的求值会转换成对 window.color 的求值。而 sayColor.call(this) 和 sayColor.call(window) ，则是两种显式地在全局作用域中调用函数的方式，结果当然都会显示 "red" 。但是，当运行 sayColor.call(o)时，函数的执行环境就不一样了，因为此时函数体内的 this 对象指向了 o ，于是结果显示的是 "blue" 。

 > 使用 call() （或 apply() ）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系

##### bind()

ECMAScript 5 还定义了一个方法： bind() 。这个方法会创建一个函数的实例，其 this 值会被绑定到传给 bind() 函数的值。

    window.color = "red";
    var o = { color: "blue" };
    function sayColor(){
        console.log(this.color);
    }
    var objectSayColor = sayColor.bind(o);
    objectSayColor(); //blue

在这里， sayColor() 调用 bind() 并传入对象 o ，创建了 o bjectSayColor() 函数。 object-SayColor() 函数的 this 值等于 o ，因此即使是在全局作用域中调用这个函数，也会看到 "blue" 。这种技巧的优点后面总结。

> 支持 bind() 方法的浏览器有 IE9+、Firefox 4+、Safari 5.1+、Opera 12+和 Chrome。

每个函数继承的 toLocaleString() 和 toString() 方法始终都返回函数的代码。返回代码的格式则因浏览器而异——有的返回的代码与源代码中的函数代码一样，而有的则返回函数代码的内部表示，即由解析器删除了注释并对某些代码作了改动后的代码。由于存在这些差异，我们无法根据这两个方法返回的结果来实现任何重要功能；不过，这些信息在调试代码时倒是很有用。另外一个继承的valueOf() 方法同样也只返回函数代码。