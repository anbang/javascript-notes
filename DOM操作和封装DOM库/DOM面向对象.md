# DOM面向对象

**，低版本IE 中的所有 DOM 对象都是以 COM对象的形式实现的。这意味着 IE 中的DOM 对象与原生 JavaScript 对象的行为或活动特点并不一致。这些差异需要注意。**

- DOM节点的层次
- Node类型
- Document类型
- Element类型
- Text类型
- Comment类型
- CDATASection类型
- DocumentType类型
- DocumentFragment类型
- Attr类型

### DOM节点的层次

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


### Node类型

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
- hasChildNodes 
- normalize

DOM1 级定义了一个 Node 接口，该接口将由 DOM 中的所有节点类型实现。这个 Node 接口在JavaScript 中是作为 Node 类型实现的；除了 IE 之外，在其他所有浏览器中都可以访问到这个类型。JavaScript 中的所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。

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
- document.getElementByID()     在整个文档中，通过元素的ID获取这个元素的对象，如果页面中没有这个ID，则获取的内容为null；
- document.getElementsByClassName() 在整个文档中，通过元素class样式类的值来获取一组元素，IE678不兼容
- document.getElementsByTagName()   在整个文档中，通过元素的标签名来获取一组元素(HTMLcollection集合)，获取的是一个类数组，获取的个数可以通过length获取，获取集合的某一个元素，通过对象的索引即可查找；      
- document.getElementsByName()      在整个文档中，通过元素的name值来获取一组元素（NodeList集合），在IE浏览器中，此方法只对表单元素起作用；
- document.documentElement  获取整个HTML对象
- document.body             获取整个body对象
- document.querySelector()      在整个文档中，通过不同的选择器获取一个元素对象,IE678不兼容
- document.querySelectorAll()   在整个文档中，通过不同的选择器获取一组元素对象集合，IE678不兼容；
- document.creatElement()           创建一个元素节点，例如document.creatElement("div")就是创建一个div元素
- document.creatDocumentFragment()      创建文档碎片