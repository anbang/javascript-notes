#兼容性处理、错误处理与调试

**查看报错**

所有浏览器都是按F12调出控制台；

在console里面看错误；良好的错误机制可以让用户及时得到提醒，知道到底发生了什么事，因而不会恼羞成怒；作为开发者，我们必须理解在处理JavaScript错误的时候，都有哪些手段和工具可以利用；
#一、错误的处理
**1、try catch语句**  
只有在不兼容的，在浏览器中发生了异常的错误，我们才可以用try catch捕获到，才能判断兼容(基本上不兼容的在执行的时候都会报错)；需要运行，然后才能判断，属于撞墙式处理；A行A就上；A不行就试试B；
>     function testError(){
        try{
            console.log("执行了try里面的代码");
            return "返回1";
        }catch (error){
            console.log("执行了catch里面的代码");
            return "返回2";
        }
    };
    var a=testError();
    console.log(a);
    //返回结果是：
    // 执行了try里面的代码；
    // 返回1；

**如果用try-catch-finally；**

虽然try-catch语句中是可选的，但是finally子句只要用；里面的代码都会执行；无论try和catch里面是什么代码都阻止不了执行finally里面的代码；即时是用了return语句；

>     function testError(){
        try{
            console.log("执行了try里面的代码");
            return "返回的是1";
        }catch (error){
            console.log("执行了catch里面的代码");
            return "返回的是2";
        }finally{
            console.log("无论是否报错finally里的代码都执行，finally就是这么屌！");
            return "返回的是3";
        }
    };
    var a=testError();
    console.log(a);
    //返回结果是：
    // 执行了try里面的代码；
    // 无论是否报错finally里的代码都执行，finally就是这么屌！
    // 返回3；【！注意此时的return忽略了try；而是return了finally里的返回值；】

正常情况是return后，函数中只要读取到return就停止执行本函数；但是在这里是特殊；

**原理分析如下**

因为函数还有一条规则是函数只能有一个返回值，当执行try的时候，遇到return，确实退出本次执行了，此时的返回值也是try内的返回值，但是因为finally的机制，必须还要再执行一次，finally里面的代码，此时return被改写成了finally里的返回值；【因为函数只能有一个返回值】；所以此时返回的是3！（catch的时候思路一样）

再测试下，把finally里面的return去掉；代码如下
>     function testError(){
        try{
            console.log("执行了try里面的代码");
            return "返回的是1";
        }catch (error){
            console.log("执行了catch里面的代码");
            return "返回的是2";
        }finally{
            console.log("无论是否报错finally里的代码都执行，finally就是这么屌！");
        }
    };
    var a=testError();
    console.log(a);
    //返回结果是：
    // 执行了try里面的代码；
    // 无论是否报错finally里的代码都执行，finally就是这么屌！
    // 返回1；【！注意此时finally里面没有返回值，所以函数的返回值又是1了；】
结果果然就是返回1里面的值；如果用finally，那么catch就是可选的了；（catch或finally可以单独只出现一个；）；不过IE7以及以前的版本有bug，除非有写catch子句；否则finally中的代码不会执行；解决办法是，只要写finally，就写一个catch子句，哪怕里面什么都没有；

**处理兼容性问题时，不用try-catch、用判断对象中是否有这个属性的原理**

在明知道自己代码哪些会出错，哪些不会出错；也就是最常见的处理兼容性问题时候，用try-catch语句就不合适了；处理兼容性问题可以用下面的；

   + if(document.getElementsByClassName){}
   
   获取document下getElementsByClassName的属性值，如果不兼容返回的值undefined，如果兼容返回的是一个function，然后我们把返回值转换成布尔类型判断真假；

   + if("getElementsByClassName" in document){}
   
   直接用in来判断是不是document的一个属性,是的话返回true，不是的话返回false；判断属性，直接返回布尔值，**用in来判断属性的性能最好**！
  
   + if(typeof document.getElementsByClassName==="function"){}
   
认为只有这样才是兼容的

**错误的类型总结：**

利用不同的类型，可以熟悉更多的异常信息，有助于快速对错误做出恰当的处理；

> - Error;//基类型，其它错误类型都是继承自该类型的；因此，所有的错误类型共享了一组相同的属性（错误对象中的方法全是默认的对象方法），Error类型的报错很少见；这个基类型的主要目的是供开发者抛出自定义错误的
> - Eval错误 ，EvalError;//会在使用eval()函数而发生异常时被抛出；ECMA-262中对这个错误描述是”如果以非直接调用的方式使用eval属性的值；或者为eval属性赋值”，简单的说就是没有把eval当函数调用，就会抛出错误；但是实际中，浏览器不一定抛出的是EvalError，谷歌抛出的可能是TypeError或者ReferenceError；
 - new eval();//Uncaught TypeError: function eval() { [native code] } is not a constructor
>  - eval=zhuanbang;//Uncaught ReferenceError: zhuanbang is not defined
> -  范围错误 RangeError;//数值超过相应范围时触发；
  -  var a=new Array(-10);//Uncaught RangeError: Invalid array length
> -  变量引用错误） ReferenceError;找不到对象的时候，会报这个错误，通常，在访问不存在的变量时，就会发生这种错误；
  -  var a=luanxie;//Uncaught ReferenceError: luanxie is not defined
> -  语法错误 SyntaxError;表示函数出现语法错误，当我们把语法错误的JavaScript字符串传入eval函数时，就会导致此类型错误； 
  -   eval("a++b");//Uncaught SyntaxError: Unexpected identifier
> -  变量类型不符 TypeError;当变量保存意外类型，或者访问不存在的方法时，都会导致这个错误；抛这个类型是由于在执行特定于类型的操作时，变量类型并不符合要求；（一般存在于传递给函数的参数实现未经过检查，结果传入类型与预期类型不相符）
 - var o=new 10;//Uncaught TypeError: 10 is not a function
 - alert("string" in true )//Uncaught TypeError: Cannot use 'in' operator to search for 'string' in true
 - Function.prototype.toString.call("string");//Uncaught TypeError:Function.prototype.toString is not generic
> - URIError;在使用encodeURI()或decodeURI(),而URI不正确的时候，就会导致这个错误，这个错误很少见，因为这两个函数的容错性非常高；

错误类型的处理，可以在try-catch语句的catch语句中使用instanceof操作符；
>     try{
        someFunction();
    }catch (error) {
        if (error instanceof TypeError){
            //处理类型错误；
        }else if (error instanceof ReferenceError){
            //处理变量引用错误；
        }else{
            //处理其它错误；
        }
    }

**try-catch的合理用处**：

使用与我们无法控制的错误，假设在使用一个大型JavaScript库中的函数，这个该函可能会有意无意的抛出一些错误；由于不能修改这个库的源代码，所以大可对该代码的调用放在try-catch语句当中，万一有什么错误发生，可以恰当的处理；

一般来说，应用程序架构的较低层次中经常会抛出错误，但这个层次并不会影响当前执行的代码；因而错误通常得不到真正的处理，如果打算编写一个要在很多应用程序中使用的JavaScript库，甚至只编写一个可能会在应用程序内部多个地方使用的辅助函数，建议在抛出错误是提供详尽的信息；然后，即可在应用程序中捕获并适当地处理这些错误；

捕获错误与抛出错误：只应该捕获哪些确切知道该如何处理的错误！捕获错误的目的在于避免浏览器以默认方式处理它们，而抛出错误的目的在于提供错误发生具体原因的消息！

**2、抛出错误**
  
抛出错误的目的在于提供错误发生具体原因的消息；

与try-catch相配的还有一个throw操作符；用于随时抛出自定义错误；抛出错误的时候必须要给throw操作符一个值，这个值是什么类型，没有要求；下面代码都是可以的；
>     throw  12345;//Uncaught 12345
    throw  "this is a string";
    throw  true;
    throw {name :"javascript"};//Uncaught #<Object>

使用某种内置错误类型，可以更真实的模拟浏览器错误，每种错误类型的构造函数接收参数，就是实际的错误消息；浏览器会一常规方式报告这个错误；自定义错误时候；

最常用的是：Error通用类型、范围错误RangeError，变量引用错误ReferenceError、变量类型错误TypeError；
>      throw  new Error("抛出通用错误");//Uncaught Error: 抛出通用错误
    throw  new Error(抛出通用错误);//Uncaught ReferenceError,抛出通用错误 is not defined;
    throw new SyntaxError("SyntaxError语法错误");
    throw new RangeError("RangeError范围错误");
    throw new ReferenceError("ReferenceError变量引用错误");
    throw new TypeError("TypeError变量类型错误");

**抛出错误的时机**

下面的参数在参数不是数组的情况下会失败？
>     function test(ary){
        ary.sort();//如果执行这个函数时候，给它一个字符串参数，那么对sort的调用就会失败；
        for(var i= 0,len=ary.length;i<len;i++){
            var ary1=[];
            if(ary[i]>100){
                return ary1;
            }
            ary1.push(ary[i]);
			return ary1;
        }
    }

这种情况下，带有适当信息的自定义错误能够显著提升代码的可维护型；
>     function testName(ary){
        if(!(ary instanceof Array){
            throw new Error("testName():arguments must array");//手动抛出错误信息介绍，调用这个函数的时候，如果错了，一下就知道问题了
        }
        ary.sort();
        for(var i= 0,len=ary.length;i<len;i++){
            var ary1=[];
            if(ary[i]>100){
                return ary1;
            }
            ary1.push(ary[i]);
            return ary1;
        }
    }

做复杂的JS基础库的时候，一定要考虑异常处理；正确的错误处理机制应该可以确保代码中只发生你自己抛出的错误！

**错误事件**

任何没有通过try-catch处理的错误都会触发window对象的error实现；这个事件是WEB浏览器最左支持的事件之一；IE,FF,chrome为了保持向后兼容，并没有对这个事件做任何修改；但是欧朋，safari不支持error事件；

任何浏览器中，onerror事件处理程序都不会创建event对象；但它可以接受三个参数：错误消息、错误所在的URL和行号；

- 错误消息给出了错误的具体信息是最重要的；
- URL只给出了文档位置；
- 而行号所指的代码行既可能出自嵌入的JavaScript代码；也可能来自外部的文件；

要指定onerror事件处理程序；必须使用如下所示的DOM0技术，它没有遵循"DOM2级事件"的标准格式；

>     window.onerror=function(message,url,line){
        alert(message);
    };
    //只要是浏览器生成的，都会触发error事件，并执行这个事件处理程序，然后，浏览器默认的机制发挥作用，像往常一样显示出错误消息；
    //像下面这样在事件处理程序中返回false，可以阻止浏览器报告错误的默认行为；
    window.onerror=function(message,url,line){
        alert(message);
        return false;//通过返回false，这个函数实际上就充当了整个文档中的try-catch语句，可以捕获所有无代码处理的运行时错误；这个事件处理程序，是报告浏览器报告错误的最后一道防线；理想情况下，只要可能就不应该使用它，只要能够适当地使用try-catch语句，就不会有错误交给浏览器，也就不会触发error事件；

图像也支持error事件；只要图像src特性中的URL不能返回可以被识别的图像格式，就会触发error事件；此时的error事件遵循DOM格式；会返回一个以图片为目标的evern对象；下面是一个例子；
>     var image=new Image();
    EventUtil.addHandler(image,"load",function(event){
        alert("图片下载")
    });
    EventUtil.addHandler(image,"error",function(event){
        alert("图片没有下载")
    });
    image.src="smilex.gif";//指定不存在的文件；
    //加载图片失败的时候，会显示一个警告框；需要注意的是，发生error事件时，图像下载过程已结束；