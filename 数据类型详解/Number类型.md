# Number 类型

首先输出看有哪些方法；

    console.log(new Number())

方法如下：

    toExponential
    toFixed
    toLocaleString
    toPrecision
    toString
    valueOf


![](http://i.imgur.com/PCHvpCF.png)

Number 类型也重写了 valueOf() 、 toLocaleString() 和 toString()方法。重写后的 valueOf() 方法返回对象表示的基本类型的数值，另外两个方法则返回字符串形式的数值；

> 为 toString() 方法传递一个表示基数的参数，告诉它返回几进制数值的字符串形式，

    var num = 10;
    console.log(num.toString()); //"10"
    console.log(num.toString(2)); //"1010"
    console.log(num.toString(8)); //"12"
    console.log(num.toString(10)); //"10"
    console.log(num.toString(16)); //"a"

### toFixed 保留几位小数

> 按照指定的小数位返回数值的字符串表示

    var num1 = 10,
        num2=20.1231231231232;
    console.log(num1.toFixed(2)); //"10.00"
    console.log(num2.toFixed(2)); //"20.12"

能够自动舍入的特性，使得 toFixed() 方法很适合处理货币值。但需要注意的是，不同浏览器给这个方法设定的舍入规则可能会有所不同。在给 toFixed() 传入 0 的情况下，IE8 及之前版本不能正确舍入范围在{(0.94,0.5],[0.5,0.94)}之间的值。对于这个范围内的值，IE 会返回 0，而不是1 或 1；其他浏览器都能返回正确的值。IE9 修复了这个问题。

> toFixed() 方法可以表示带有 0 到 20 个小数位的数值。但这只是标准实现的范围，有些浏览器也可能支持更多位数。


### 不建议直接实例化 Number 类型

    var numberObject = new Number(10);
    var numberValue = 10;
    console.log(typeof numberObject); //"object"
    console.log(typeof numberValue); //"number"
    console.log(numberObject instanceof Number); //true
    console.log(numberValue instanceof Number); //false

在使用 typeof 操作符测试基本类型数值时，始终会返回 "number" ，而在测试 Number 对象时，则会返回 "object" 。类似地， Number 对象是 Number 类型的实例，而基本类型的数值则不是。