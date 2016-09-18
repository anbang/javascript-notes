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

重点关心下面几个**属性**；

- nodeType
- nodeName
- nodeValue
- childNodes
- children
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentNode

Node上面的**方法**

- appendChild
- insertBefore
- replaceChild
- removeChild
- cloneNode
- hasChildNodes
- normalize

DOM1 级定义了一个 Node 接口，该接口将由 DOM 中的所有节点类型实现。这个 Node 接口在JavaScript 中是作为 Node 类型实现的；除了 IE 之外，在其他所有浏览器中都可以访问到这个类型。JavaScript 中的所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。

##### nodeType

ELEMENT_NODE:1
ATTRIBUTE_NODE:2
TEXT_NODE:3
CDATA_SECTION_NODE:4
ENTITY_REFERENCE_NODE:5
ENTITY_NODE:6
PROCESSING_INSTRUCTION_NODE:7
COMMENT_NODE:8
DOCUMENT_NODE:9
DOCUMENT_TYPE_NODE:10
DOCUMENT_FRAGMENT_NODE:11
NOTATION_NODE:12

