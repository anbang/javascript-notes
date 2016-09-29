**DOM2 遍历**
DDOM2 级遍历和范围定义了2个辅助完成顺序便利DOM结构的类型；

- NodeIterator
- TreeWalker

这两个类型的作用是，基于给定的起点对DOM结构执行深度有限的遍历操作；

低版本IE不支持；

    var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0");
    var supportsNodeIterator = (typeof document.createNodeIterator == "function");
    var supportsTreeWalker = (typeof document.createTreeWalker == "function");

    console.log(supportsTraversals);
    console.log(supportsNodeIterator);
    console.log(supportsTreeWalker);

可以检测 creatNodeItartor 和 creatTreeWalker 两个方法；

一个HTML文件的基本的DOM结构如下；

	<!doctype html>
	<html>
	<head>
	    <title>Example</title>
	</head>
	<body>
	<p><b>hello </b>word!</p>
	</body>
	</html>

![](http://i.imgur.com/ad9Z3gH.png)
图片引自高程三；

从 document 开始依序向前，访问的第一个节点是 document ，访问的最后一个节点是包含"world!" 的文本节点。从文档最后的文本节点开始，遍历可以反向移动到 DOM 树的顶端。此时，访问的第一个节点是包含 "Hello" 的文本节点，访问的最后一个节点是 document 节点,** NodeIterator 和 TreeWalker 都以这种方式执行遍历**。

# NodeIterator

# TreeWalker

