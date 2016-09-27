**DOM面向对象**

**，低版本IE 中的所有 DOM 对象都是以 COM对象的形式实现的。这意味着 IE 中的DOM 对象与原生 JavaScript 对象的行为或活动特点并不一致。这些差异需要注意。**

- DOM节点的层次
- Node类型
- Document类型
- Element类型
- Text类型
- DocumentFragment类型
- Attr类型

# DOM节点的层次

DOM是树形的结构，

	<!doctype html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Document</title>
	    <link rel="stylesheet" href="./a.css"/>
	</head>
	<body>
	    <p>hello word</p>
	    <script src="index.js"></script>
	</body>
	</html>

DOM的结构如下

![](http://i.imgur.com/tY1ymHt.png)

节点间的各种关系可以用传统的家族关系来描述，相当于把文档树比喻成家谱。在 HTML 中，可以将 <body> 元素看成是 <html> 元素的子元素；相应地，也就可以将 <html> 元素看成是 <body> 元素的父元素。而 <head> 元素，则可以看成是 <body> 元素的同胞元素，因为它们都是同一个父元素 <html> 的直接子元素。


# Node类型

DOM 可以将任何 HTML 或 XML 文档描绘成一个由多层节点构成的结构。节点分为几种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。每个节点都拥有各自的特点、数据和方法，另外也与其他节点存在某种关系。节点之间的关系构成了层次，而所有页面标记则表现为一个以特定节点为根节点的树形结构

文档节点只有一个子节点，即 <html> 元素，我们称之为**文档元素**。文档元素是文档的最外层元素，文档中的其他所有元素都包含在文档元素中。每个文
档只能有一个文档元素。在 HTML 页面中，文档元素始终都是 <html> 元素。在 XML 中，没有预定义的元素，因此任何元素都可能成为文档元素。

每一段标记都可以通过树中的一个节点来表示：HTML 元素通过元素节点表示，特性（attribute）通过特性节点表示，文档类型通过文档类型节点表示，而注释则通过注释节点表示。总共有 12 种节点类型(nodeType)，这些类型都继承自一个基类型。

    <p>hello word</p>
    <p id="test1">hello word</p>
    <p>hello word</p>
    <p>hello word</p>

    <script>
        var testOne=document.getElementById("test1");
        console.dir(testOne);//p#test1
        console.dir(testOne.__proto__);//HTMLParagraphElement
        console.dir(testOne.__proto__.__proto__);//HTMLElement
        console.dir(testOne.__proto__.__proto__.__proto__);//Element
        console.dir(testOne.__proto__.__proto__.__proto__.__proto__);//Node,重点关注这个属性；
        console.dir(testOne.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget
        console.dir(testOne.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);//Object
    </script>

可以输出看下Node上面的属性和方法；

![](http://i.imgur.com/8Rc7GSh.png)

重点关心下面几个**属性**；

- nodeType  节点类型
- nodeName  节点名称
- nodeValue 节点值
- childNodes    获取所有的子节点
- children      获取所有的元素子节点
- firstChild    获取第一个子节点（不一定是元素节点）
- lastChild     获取最后一个子节点
- nextSibling   获取下一个弟弟节点（不一定是元素节点）
- previousSibling   获取上一个哥哥节点
- parentNode        获取父亲节点

Node上面的**方法**

- appendChild   将节点添加到指定容器的最后面
- insertBefore  将新的节点添加到指定容器中某一个节点的前面
- replaceChild  把原有的元素进行替换
- removeChild   删除元素
- cloneNode     复制原有的节点，如果传递的值是true，代表将子子孙孙的后代元素一起赋值，false代表只复制当前元素本身
- hasChildNodes 返回一个布尔值,表明当前节点是否包含有子节点.
- normalize

DOM1 级定义了一个 Node 接口，该接口将由 DOM 中的所有节点类型实现。这个 Node 接口在JavaScript 中是作为 Node 类型实现的；除了 IE 之外，在其他所有浏览器中都可以访问到这个类型。JavaScript 中的所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。

### Node的属性

##### nodeType / nodeName / nodeValue

NodeType 有以下几种；但是并不需要都记住的；

- ELEMENT_NODE:1
- ATTRIBUTE_NODE:2
- TEXT_NODE:3
- CDATA_SECTION_NODE:4
- ENTITY_REFERENCE_NODE:5
- ENTITY_NODE:6
- PROCESSING_INSTRUCTION_NODE:7
- COMMENT_NODE:8
- DOCUMENT_NODE:9
- DOCUMENT_TYPE_NODE:10
- DOCUMENT_FRAGMENT_NODE:11
- NOTATION_NODE:12

在JS中常用的只有几个，元素节点，文本节点，注释节点，document，他们对应的值是

    名次      数字  nodeName的值    nodeValue的值
    元素节点    1   大写的标签名      null
    文本节点    3   #text           文本内容
    注释节点    8   #comment        注释内容
    document   9   #document       null

> 如果四个还记住，记住一个元素节点就可以了；（元素节点 ELEMENT_NODE:1，）

在标准浏览器中会把空格，Enter当作文本节点;

    if (someNode.nodeType == 1){ // 适用于所有浏览器，注意不要用Node.ELEMENT_NODE进行比较，在低版本IE中不兼容；
        console.log("Node is an element.");
    }

**nodeName 和 nodeValue ** 这两个属性。这两个属性的值完全取决于节点的类型。在使用这两个值以前，最好是像下面这样先检测一下节点的类型。

    if (someNode.nodeType == 1){
        testNodeName = someNode.nodeName; //nodeName 的值是元素的标签名
        testNodeValue = someNode.nodeValue; //nodeValue 的值是null
    }

在这个例子中，首先检测节点类型，看它是不是一个元素，如果是则取得并保存nodeName的值，对于元素节点nodeName中保存的始终都是元素的标签名，而nodeValue的值则始终为null；

##### childNodes

    <p>hello word1</p>
    <!--<p>这是一行注释</p>-->
    <p id="test1">hello word2</p>
    <p>hello word3</p>
    <p>hello word4</p>
    <div class="test1"></div>

    <script>
        var selectAll=document.getElementsByTagName("p");
        var selectLength=selectAll.length;
        var firstChild=selectAll[0],
            secondChild=selectAll.item(1),
            lastChild=selectAll[selectLength-1];
        console.log(selectAll,firstChild,secondChild,lastChild,selectLength);
    </script>

每个节点都有一个 childNodes 属性，其中保存着一个 NodeList 对象。 NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。请注意，虽然可以通过方括号语法来访问 NodeList 的值，而且这个对象也有 length 属性，但它并不是 Array 的实例。

上面例子展示了如何访问保存在 NodeList 中的节点——可以通过方括号，也可以使用 item()方法 ， 个人喜欢用方括号。

> 注意 length 属性表示的是访问 NodeList 的那一刻，其中包含的节点数量，如果改变之后，再次访问它的length，会看到变化。

        //检测数据类型
        console.log({}.toString.call(selectAll));//[object HTMLCollection]

        //类数组转为真正的数组
        var arrayOfNodes = Array.prototype.slice.call(selectAll);
        console.log(arrayOfNodes);
        console.log({}.toString.call(arrayOfNodes));//[object Array]

上面的方法IE678不兼容，

        //类数组转为真正的数组,兼容写法
        function convertToArray(nodes){
            var array = [];
            try {
                array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
            } catch (e) {
                for (var i= 0,len=nodes.length; i < len; i++){
                    array.push(nodes[i]);
                }
            }
            return array;
        }
        var arrayOfNodes = convertToArray(selectAll);
        console.log({}.toString.call(arrayOfNodes));//[object Array]

** childNodes需要注意的（元素的子节点方法；）**

看下面的代码

	<ul id="myList1">
	    <li>Item 1</li>
	    <li>Item 2</li>
	    <li>Item 3</li>
	</ul>
	<ul id="myList2"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
	<script>
	    var test1=document.getElementById("myList1");
	    var test2=document.getElementById("myList2");
	    console.log(test1.childNodes);//[text, li, text, li, text, li, text]
	    console.log(test2.childNodes);//[li, li, li]
	</script>


myList1的childNodes是7，myList2的chilNodes是3；(myList1里面有Text 类型)

如果在myList1中获取全部的li，可以直接用getElementByTagName；

    var test1=document.getElementById("myList1");
    var lis=test1.getElementsByTagName("li");
    console.log(lis);

这样就拿到了，先确定范围，然后通过标签名来获取；还可以判断元素的是否为原来来获取

    var test1=document.getElementById("myList1");
    var ary=[];
    for(var i=0,len=test1.childNodes.length;i<len;i++){
        if(test1.childNodes[i].nodeType===1){
            ary.push(test1.childNodes[i]);
        }
    }
    console.log(ary);

**Text 类型的介绍**

	<!-- 没有内容，也就没有文本节点 -->
	<div></div>
	<!-- 有空格，因而有一个文本节点 -->
	<div> </div>
	<!-- 有内容，因而有一个文本节点 -->
	<div>Hello World!</div>

上面代码给出的第一个 <div> 元素没有内容，因此也就不存在文本节点。开始与结束标签之间只要存在内容，就会创建一个文本节点。因此，第二个 <div> 元素中虽然只包含一个空格，但仍然有一个文本子节点；文本节点的 nodeValue 值是一个空格。第三个 <div> 也有一个文本节点，其 nodeValue 的值为 "Hello World!" 。


##### parentNode、firstNode、lastNode、nextSibling、previousSibling

DOM结构如下

    <div class="parent-test">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>

![](http://i.imgur.com/9p097e3.png)

总结：

- 1、父节点的 firstChild 和 lastChild属性分别指向其 childNodes 列表中的第一个和最后一个节点。firstChild等于childNodes[0]，lastChild原理一样；
- 2、在只有一个子节点的情况下， firstChild 和lastChild 指向同一个节点。如果没有子节点，那么 firstChild 和 lastChild 的值均为 null 。
- 3、如果列表中只有一个节点，那么该节点的 nextSibling 和 previousSibling 都为 null 

### Node的方法

- appendChild
- insertBefore
- replaceChild
- cloneNode
- hasChildNodes

##### appendChild 

将节点添加到指定容器的最后面,返回新增的节点。

    <div class="parent-test">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>

    <script>
        var parent=document.getElementsByClassName("parent-test")[0];
        var newNode = document.createElement("p");
        newNode.innerText="hello appendChild";
        newNode.className="test-class";
        parent.appendChild(newNode);

        var newNode2=document.getElementById("test1");
        parent.appendChild(newNode2);//会把test1为ID的p标签，移动到末尾，原理是先删除，然后再push；

    </script>

参考：[https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

##### insertBefore

将新的节点添加到指定容器中某一个节点的前面,方法接受两个参数：要插入的节点和作为参照的节点。

		var insertedNode = parentNode.insertBefore(newNode, referenceNode);

插入节点后，被插入的节点会变成参照节点的前一个同胞节点（ previousSibling ），同时被方法返回。

如果参照节点是null ，则 insertBefore() 与 appendChild() 执行相同的操作

https://developer.mozilla.org/en-US/docs/Web/API/Node/insertbefore

##### replaceChild  

把原有的元素进行替换

	replacedNode = parentNode.replaceChild(newChild, oldChild);

- 如果newChild已经存在于DOM树中，首先会被删除；
- oldChild会被newChild所取代，olcChild是被替换掉的原始节点
- replacedNode

##### cloneNode

赋值节点

	var dupNode = node.cloneNode(blooeanValue);

- node是被赋值的节点
- dupNode是赋值后的文件；
- blooeanValue 是否采用深度克隆
	- 如果为true,则该节点的所有后代节点也都会被克隆
	- 如果为false,则只克隆该节点本身.
- 虽然 blooeanValue是可选的参数，但是推荐当做必须参数用；

备注：

- 克隆一个元素节点会拷贝它所有的属性以及属性值,当然也就包括了属性上绑定的事件(比如onclick="alert(1)"),但不会拷贝那些使addEventListener()方法或者node.onclick = fn这种用JavaScript动态绑定的事件.
	- 推荐：平时写代码的时候，用事件委托的方式去写代码；
- **clonenode()可能导致文件重复的元素ID**,如果原始节点设置了ID，并且克隆节点会被插入到相同的文档中，那么应该更新克隆节点的ID以保证唯一性。name属性可能也需要进行修改
- 想要克隆一个节点来添加到另外一个文档中,请使用Document.importNode()代替本方法.

##### removeChild

该方法从指定的DOM结构中，删除一个子元素；返回值是要删除的节点;

    <div class="parent-test1">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p id="test2">hello word3</p>
        <p>hello word4</p>
    </div>
    <div class="parent-test2"></div>
    
    <script>
        var parent1=document.getElementsByClassName("parent-test1")[0];
        var parent2=document.getElementsByClassName("parent-test2")[0];
        var parent3=document.getElementsByClassName("parent-test666")[0];
        var oTest1=document.getElementById("test1");
        var oTest2=document.getElementById("test2");
        var returnValue1=parent1.removeChild(oTest1);
        console.log(returnValue1);//<p id="test1">hello word2</p>
        //var returnValue2=parent2.removeChild(oTest2);//Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
        var returnValue666=parent2.removeChild(parent3);//Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    </script>

- oTest1和parent1是父子节点的关系；
- returnValue===oTest1，
- 如果要删除的和被删除的节点不是父子关系，会报错
	- 子元素不存在：parameter 1 is not of type 'Node'.
	- 要删除的子元素，不是父元素内的子元素：The node to be removed is not a child of this node.

参考：[https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

##### hasChildNodes

返回一个布尔值,表明当前节点是否包含有子节点.

> 语法：element.hasChildNodes()
> 注意:Node.hasChildNodes是个方法,而不是普通属性,使用时必须加括号才能调用.

	var foo = document.getElementById("foo");
	if ( foo.hasChildNodes() ) { 
	  foo.removeChild( foo.childNodes[0] );
	}

如果id为foo的这个元素有子节点,则从dom树中删除它的第一个子节点.


# Document类型

- 查找元素
- 特殊集合
- 文档写入
- 文档的子节点
- 文档信息
- DOM一致性检测

输出document，查看有哪些属性和方法；

        console.dir(document);

### 查找元素

查看 Document 上的方法，最常用的就是查找元素的方法了；document的意思是整个页面的

    console.log(document)

输出看一下；

- getElementById
- getElementsByClassName
- getElementsByName
- getElementsByTagName
- querySelector
- querySelectorAll

###### document.getElementById()
**在整个文档中，通过元素的ID获取这个元素的对象，如果页面中没有这个ID，则获取的内容为null；**

需要注意的
> getElementById这个方法的写法，不能改变大小写；
> document.getElementById("id"); 前面的范围，必须是document；
> id是大小写敏感的字符串，代表了所要查找的元素的唯一ID.element是一个元素的，一个，找到的也是第一次找到id的所在元素；
> getElementById方法不会搜索不在文档中的元素。当创建一个元素，并且分配ID后，你必须要使用insertBefore或其他类似的方法把元素插入到文档中之后才能使用 getElementById 获取到:如果不插入文档中，属于游离状态，此时获取是获取不到的；

        var element = document.createElement("div");
        element.id = 'testId';
        console.log(document.getElementById('testId'));//null

        document.body.appendChild(element);
        console.log(document.getElementById('testId'));//<div id="testId"></div>


    <div id="parent-test1">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p id="test2">hello word3</p>
        <p>hello word4</p>
    </div>
    <script>

        var parentTest1 = document.getElementById("parent-test1");
        var test1=parentTest1.getElementById("test1");//parentTest1.getElementById is not a function;
        // 使用getElementById的前面范围，必须是document；
    </script>


###### document.getElementsByClassName()
**在整个文档中，通过元素class样式类的值来获取一组元素，IE678不兼容**

	var elements = document.getElementsByClassName(names); 
	// or:
	var elements = rootElement.getElementsByClassName(names);

- elements 是复数，多个class的意思，查找到的所有元素的集合 HTMLCollection .返回的是一个类数组，如果找到某一个class，可以借助前面的范围，并且[0],这样的方式来确定某一个元素；
- names 是一个字符串，表示用于匹配的 class 名称列表; 多个 class 名称通过空格分隔
- getElementsByClassName 可以在任意的元素上调用，不仅仅是 document。 调用这个方法的元素将作为本次查找的根元素（范围）；

###### document.getElementsByTagName()   
**在整个文档中，通过元素的标签名来获取一组元素(HTMLcollection集合)，获取的是一个类数组，获取的个数可以通过length获取，获取集合的某一个元素，通过对象的索引即可查找；**

 即使一个文档里面，只有一个元素集合；这个元素也需要用[0]的方式给选出来，否则操作的是一个类数组；

###### document.getElementsByName()
**在整个文档中，通过元素的name值来获取一组元素（NodeList集合），在IE浏览器中，此方法只对表单元素起作用；**

    <div id="parent-test1">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p id="test2">hello word3</p>
        <span>hello word4</span>
    </div>
    <script>
        var parentTest1 = document.getElementById("parent-test1");
        var test1=parentTest1.getElementsByTagName("p");
        var test2=parentTest1.getElementsByTagName("p span");
        console.log(test1);//[p, p#test1, p#test2, test1: p#test1, test2: p#test2]
        console.log(test2);//[]
    </script>

###### document.querySelector()      在整个文档中，通过不同的选择器获取一个元素对象,IE678不兼容

###### document.querySelectorAll()   在整个文档中，通过不同的选择器获取一组元素对象集合，IE678不兼容；

###### document.documentElement  获取整个HTML对象

###### document.body             获取整个body对象

### 特殊集合

除了属性和方法，document对象还有一个特殊的集合，这些集合都是HTMLCollection对象，为了访问文档常用的部分提供的快捷方式；

正常工作中，很少直接这么用的；

- document.anchors      包含文档中所有带name特性的<a>元素；
- document.links        包含文档中所有带href特性的<a>元素，
- document.forms        包含文档中所有带form的元素，与document.getElementsByName("form")相同；
- document.imges        包含文档中所有带<img>的元素，与document.getElementsByName("img")相同；


### 文档写入

将输出流写入到网页中，有4个方法；

- write(string)       原样写入
- writeIn(string)     在字符串的末尾添加一个换行符(\n)；
- open()
- close()

write和writeIn

    <!doctype html>
    <htm>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script>
            window.onload=function(){
                document.write("<strong>"+(new Date()).toString()+"</strong>");
                document.write("22222");
                document.writeln("11111");
                document.writeln("11111");
                document.write("22222");
                document.write("22222");
            };
        </script>
    </head>
    <body>
    <p>now time is:</p>
    </body>
    </htm>

open()和close()分别用于打开和关闭网页的输出流；如果是加载期间使用write()或者writeIn()方法，则不需要用到这两个方法；

### 文档的子节点

- document.documentElement;//拿到<html>这个标签；
- document.body//拿到body这个层的标签；

主要就是这两个方法的，当然也可以用别的方法来获取同样的效果的；

比如

    document.childNodes[0];
    document.firstChild;

这两个都可以获取到html标签；

### 文档信息

- document.title        设置文档的标题
- document.URL          获取或者设置完整的URL
- document.domain       获取或者设置域名
- document.referrer     取得来源页面的URL


### DOM一致性检测

- hasFeartrue()

# Element类型

- HTML元素
- 操作特性
- attributes属性
- 创建元素

Element和Document类型一样，都是非常使用的类型；

Element的类型，nodeType的值为1、nodeName为元素的标签名，nodeValu是null；如果要访问元素的标签名，可以使用nodeName属性，也可以使用tagName属性；两个属性返回相同的值；

    <div id="test">这是一个ID为test的div内容</div>
    <script>
        var test=document.getElementById("test");
        console.log(test.nodeType,test.nodeName,test.nodeValue,test.tagName);//1 "DIV" null "DIV"
    </script>

返回的标签名是大写的DIV；一般比较都会转成小写然后比较；如下；

    if(test.tagName.toLowerCase()=="div"){
        console.log("目标的元素是div标签，开始执行代码");
    }

### HTML元素

所有的HTML元素都是由HTMLElement类型表示，如果不是直接通过这个类型，也是通过它的子类型表示；可以输出看下，HTMlElement类型继承自ELement类型的；

    <div id="test">这是一个ID为test的div内容</div>
    <script>
        var test=document.getElementById("test");
        console.log("test本身："+test);//div#test
        console.log("test向上找1级："+test.__proto__);//HTMLDivElement
        console.log("test向上找2级："+test.__proto__.__proto__);//HTMLElement
        console.log("test向上找3级："+test.__proto__.__proto__.__proto__);//Element
        console.log("test向上找4级："+test.__proto__.__proto__.__proto__.__proto__);//Node
        console.log("test向上找5级："+test.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget
        console.log("test向上找6级："+test.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);//Object
        console.log("test向上找7级："+test.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);//null
        console.dir(test);//顺着原型链查找；
    </script>

输出的图片的如下；

![](http://i.imgur.com/Mto2IWP.png)

每个HTML元素都存在下面的标准特性

- id        元素在文档中的唯一标识符
- title     有关元素的附加说明信息，鼠标放上去会显示，（以前我以为只有a标签才有，其实是都有的）
- lang      元素内容的语言代码，很少使用
- dir       语言的方向，值为ltr或者rtl，很少使用（left-to-right和right-to-left）;rtl可以起到右对齐的效果；
- className 与元素的class特性对应，是元素指定的CSS类，没有将这个属性命名为class，是因为class是ECMAscript的保留字；【*】

    <div id="test" title="鼠标放上来的提示" class="test-class-name" lang="en" dir="rtl">
        这是一个ID为test的div内容!!!ddddd.
        <p>这是一段文字</p>
    </div>
    <script>
        var test=document.getElementById("test");
        console.log(test.id);//test
        console.log(test.className);//test-class-name
        console.log(test.title);//鼠标放上来的提示
        console.log(test.lang);//en
        console.log(test.dir);//rtl(最后一个字符不能是符号，否则符号在前面显示)
    
        test.id="testChange";//
        test.className="test-class-name-change";//
        test.title="鼠标放上来的提示-change";//
        test.lang="cn";//
        test.dir="ltr";//
    
        console.log(test.id);//testChange
        console.log(test.className);//test-class-name-change
        console.log(test.title);//鼠标放上来的提示-change
        console.log(test.lang);//cn
        console.log(test.dir);//ltr
    </script>

### 操作特性

- getAttribute()
- setAttribute()
- removeAttribute()

**getAttribute**:

    var test=document.getElementById("test");
    console.log(test.getAttribute("id"));//test
    console.log(test.getAttribute("className"));//null
    console.log(test.getAttribute("class"));//test-class-name
    console.log(test.getAttribute("title"));//鼠标放上来的提示
    console.log(test.getAttribute("lang"));//en
    console.log(test.getAttribute("dir"));//rtl(最后一个字符不能是符号，否则符号在前面显示)
    console.log(test.getAttribute("diy-data"));//hehe

这个属性要注意的是，如果想获取到属性，必须先取得这个属性所在的元素；然后再进行相关的Attribute操作；这个属性可以获得自定义属性，根据HTML5规范，自定义的特性应该加上data-前缀进行验证；

转给getAttribute的特性名，与实际的特性名相同，因此要想得到class特性值，应该传入class而不是calssName；


但是有两类特殊的特性，虽然有对应的属性名，但是属性的值与通过getAttribute返回的不同；

- 1、style
- 2、onclick

    <!doctype html>
    <htm>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
        <style>
            #test{
                padding: 50px;
                background-color: red;
            }
        </style>
    <body>
    <div style="color: #999;" id="test">这是一段测试文字；</div>
    <script>
        var test=document.getElementById("test");
        test.onclick=function(){
            console.log("test被点击了")
        };
        console.log(test.getAttribute("style"));//只能获取到行内的样式；
        console.log(test.getAttribute("onclick"));//null
        
    </script>
    </body>
    </htm>

通过JS操作DOM的时候，一般不适应getAttribute，而是只使用对象的属性，在取得自定义特性质的情况下，才会使用getAttribute的方法；


**setAttribute**：

接受两个参数，第一个参数是特性名，第二个参数是特性值；如果特性已经存在，setAttribute会以指定的值替换现有的值；如果没有的值会创建并且新增；

通过这个方法设置的特性名会被统一转换为小写的形式；"ID"会最终变成id，"CLASS"会被变为"class"；

    var test=document.getElementById("test");
    test.setAttribute("CLASS","dddddd");//class="dddddd"


**removeAttribute**：

彻底删除元素的特性，调用这个方法不仅清除特性的值，而且也会从元素中完全删除特性；（IE6不支持）

### 创建元素，

document.creatElement()方法，可以创建新元素，接受一个参数，就是要创建的元素，参数可以是标签名

- div

一般都使用标签名；

创建的元素属于游离状态，还没有被添加到文档树中，因为新建的元素并不会马上看到，可以使用appendChild,inserBefore,replaceChild()方法，

    var test=document.getElementById("test");
    var creatEle=document.createElement('p');
    creatEle.id="test-id";
    creatEle.className="class-test";
    creatEle.innerHTML="innerHTML";
    test.appendChild(creatEle);

** 借助createDocumentFragment创建元素 **

文档碎片；document fragment在文档没有对应的标记，为了赋值大量数据渲染时的一种节约性能方法；

原理是：创建大量元素的时候，把元素都先放在文档碎片里，等元素创建添加完，把文档碎片统一插入到指定的元素中；

> 类似与我们生活中，发快递的时候，快递公司通过三轮车把所有的件搜收集起来，然后再统一拉回仓库去发件；

代码如下：

	<ul id="myList"></ul>
	<script>
	    var fragment = document.createDocumentFragment();
	    var oUl = document.getElementById("myList");
	    var li = null;
	    for (var i=0; i < 300; i++){
	        li = document.createElement("li");
	        li.appendChild(document.createTextNode("Item " + (i+1)));
	        fragment.appendChild(li);
	    }
	    oUl.appendChild(fragment);
	</script>


# Text类型的方法

- document.createTextNode()		 创建新文本节点
- normalize()		相邻文本节点合并
- splitText()		分割文本节点

**document.createTextNode()**

创建新文本节点，接收一个参数，要插入节点中的文本，（作为参数的文本将按照HTML或者XML的格式进行编码）

    var ele=document.createElement("div");
    var textNode=document.createTextNode('<strong>hello</strong> word');
    var anotherTextNode = document.createTextNode("lee!");

    ele.className="message";
    ele.appendChild(textNode);
    ele.appendChild(anotherTextNode);
    document.body.appendChild(ele);

如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，中间不会有空格。

**normalize**

如果在一个包含两个或多个文本节点的父元素上调用 normalize() 方法，则会将所有文本节点合并成一个节点，结果节点的 nodeValue 等于将合并前每个文本节点的 nodeValue 值拼接起来的值。

    var ele=document.createElement("div");
    var textNode=document.createTextNode('<strong>hello</strong> word');
    var anotherTextNode = document.createTextNode("lee!");

    ele.className="message";
    ele.appendChild(textNode);
    ele.appendChild(anotherTextNode);
    document.body.appendChild(ele);

    console.log("childNodes的长度："+ele.childNodes.length+",第一个节点值是"+ele.firstChild.nodeValue);//childNodes的长度：2,第一个节点值是<strong>hello</strong> word
    ele.normalize();
    console.log("childNodes的长度："+ele.childNodes.length+",第一个节点值是"+ele.firstChild.nodeValue);//childNodes的长度：1,第一个节点值是<strong>hello</strong> wordlee!

**splitText()**

和normalize()相反的方法;按照指定的位置分割 nodeValue 值。

- 原来的文本节点将包含从开始到指定位置之前的内容;(不包含所传的索引)
- 新文本节点将包含剩下的文本。

    var ele=document.createElement("div");
    var textNode=document.createTextNode('hello word');

    ele.className="message";
    ele.appendChild(textNode);
    document.body.appendChild(ele);

    console.log("childNodes的长度："+ele.childNodes.length+",第一个节点值是"+ele.firstChild.nodeValue);//childNodes的长度：2,第一个节点值是<strong>hello</strong> word
    var newNode=ele.firstChild.splitText(2);
    console.log(ele.childNodes.length);//2
    console.log(ele.firstChild.nodeValue);//he
    console.log(newNode.nodeValue);//llo word




# 精华总结

- tagName   获取元素标签的名称
- className 获取或者设置元素class属性的值
    - <div class="test1"></div>
    - 可以通过className获取test1，也可以把这个值进行修改；
    - oDiv.className="test2",此时div的calss就变为test2了，注意，这里的修改会覆盖原来的所有属性；
- style     获取或者设置元素的行内样式，在获取的时候要注意，只能获取行内上写的样式，非行内样式不能获取；
    - oDiv.style.backgroundColor="red";就是设置元素的行内北京颜色是红色；
- window.getComputerStyle   获取元素所有经过计算的样式（只要在页面中显示出来，那么该元素的样式都是经过计算的）这个方法，不兼容，一般是下面这种处理
    - window.getComputerStyle?window.getComputedStyle(ele,null)[attr]:ele.currenStyle[attr]

- document.creatElement()           创建一个元素节点，例如document.creatElement("div")就是创建一个div元素
- document.creatDocumentFragment()      创建文档碎片