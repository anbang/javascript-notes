# 全局对象(也有叫global对象的,意思是这个对象里面的函数，都是全局可以直接使用的函数)

-  isNaN() 
-  isFinite() 
-  parseInt() 与 parseFloat()
-  encodeURI() 和 encodeURIComponent()
-  decodeURI() 和 decodeURIComponent()
-  eval()


# encodeURI() 和 encodeURIComponent()

    var uri1 = "http://www.wrox.com/illegal value.htm#start";
    var uri2 = "https://www.google.com.hk/webhp?tab=Tw";

    console.log(encodeURI(uri1));//http://www.wrox.com/illegal%20value.htm#start
    console.log(encodeURI(uri2));//https://www.google.com.hk/webhp?tab=Tw
    console.log(encodeURIComponent(uri1));//http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start
    console.log(encodeURIComponent(uri2));//https%3A%2F%2Fwww.google.com.hk%2Fwebhp%3Ftab%3DTw

**encodeURI() 不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；而 encodeURIComponent() 则会对它发现的任何非标准字符进行编码。**

使用 encodeURI() 编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了%20 。而 encodeURIComponent() 方法则会使用对应的编码替换所有非字母数字字符。这也正是可以对整个 URI使用 encodeURI() ，而只能对附加在现有 URI后面的字符串使用 encodeURIComponent()的原因所在。

Global 对象的 encodeURI() 和 encodeURIComponent() 方法可以对 URI（Uniform ResourceIdentifiers，通用资源标识符）进行编码，以便发送给浏览器。有效的 URI 中不能包含某些字符，例如空格。而这两个 URI 编码方法就可以对 URI 进行编码，它们用特殊的 UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。

>使用 encodeURIComponent() 方法的时候要比使用encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础URI进行编码。

#  decodeURI() 和 decodeURIComponent()

其中， decodeURI() 只能对使用 encodeURI() 替换的字符进行解码,decodeURIComponent可以解析encodeURI的。

    var uri1 = "https%3A%2F%2Fwww.google.com.hk%2Fwebhp%3Ftab%3DTw";
    var uri2 = "http://www.wrox.com/illegal%20value.htm#start";
    console.log(decodeURI(uri1));//https%3A%2F%2Fwww.google.com.hk%2Fwebhp%3Ftab%3DTw
    console.log(decodeURIComponent(uri1));//https://www.google.com.hk/webhp?tab=Tw
    
    console.log(decodeURI(uri2));//http://www.wrox.com/illegal value.htm#start
    console.log(decodeURIComponent(uri2));//http://www.wrox.com/illegal value.htm#start

#  eval() 方法

eval()方法就像是一个完整的 ECMAScript 解析器,它只接受一个参数，即要执行的 ECMAScript （或 JavaScript）字符串。

    eval("console.log('test name')"); //"test name"

    var msg = "hello world";
    eval("console.log(msg)"); //"hello world"


> 在 eval() 中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在 eval() 执行的时候创建。

    var testVar;
    console.log(testVar);//undefined
    console.log(msg);//Uncaught ReferenceError: msg is not defined
    eval('var msg = "hello world eval"');
    eval("console.log(msg)"); //"hello world"

> 严格模式下，在外部访问不到 eval() 中创建的任何变量或函数，因此前面两个例子都会导致错误。同样，在严格模式下，为 eval 赋值也会导致错误

#### json字符串，转为json对象；

    var myJSONText = '{"bindings": [{"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},{"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},{"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}]}';

    console.log(typeof myJSONText);//string

    var testJSONObject=eval("("+myJSONText+")");
    console.log(typeof testJSONObject);//Object
    console.log(testJSONObject.bindings);

