
**jQuery中的盒子模型**:

    $("div").height();//内容的高
    $("div").innerHeight();//相当于clientHeight；
    $("div").outerHeight();//相当于offsetHeight；
    $("div").outerHeight(true);//相当于offsetHeight+上下margin；

**CSS伪类样式**：
>     <style>
        #p1{height: 2em;line-height: 2em;}
        /*CSS中设置伪类的方法*/
        #p1:before{
            /*里面【:】【::】是一样的，现在的规范是写两个冒号的，但是写一个冒号也支持；*/
            content: "我是用CSS添加在P1前面的";
            color: #ff0000;
            background: orange;
            clear: both;
        }
        #p1::after{
            content: "我是用CSS添加在P1后的";
            color: green;
            background: orange;
            clear: both;
        }
    </style>
> `<body><p id="p1">蚊子蚊子蚊子</p></body>`

>     /*JS中获取伪类的方法*/
    var ele=document.getElementById("p1");
    var strColor=window.getComputedStyle(ele,"bdfor").color;
    var fontSize=window.getComputedStyle(ele,"bdfor").fontSize;
    console.log(strColor);
    console.log(fontSize);

**计算任意DOM元素距离文档的左或上的绝对偏移**

         function offset(ele){//计算任意DOM元素距离文档的左或上的绝对偏移
            var l=ele.offsetLeft;
            var t=ele.offsetTop;
            var p=ele.offsetParent;
            while(p){
                if(window.navigator.userAgent.indexOf("MISE 8")>-1){//判断IE8的方法
                    l+= p.offsetLeft;
                    t+= p.offsetTop;
                }else{
                    l+= p.offsetLeft+ p.clientLeft;
                    t+= p.offsetTop+ p.clientTop;
                }
                p= p.offsetParent;
            }
            return {left:l,top:t}
        }



-固定宽度出现滚动条；

>         #div1{
            width: 200px;
            height: 200px;
            background: orange;
            overflow: auto;//固定高宽，出现滚动条的意思；
        } 

- 滚动条的最大值是

>     ele.scrollHeight-ele.clientHeight;



----------


# 知识点一：访问和设置元素的样式；


##### 获取样式

    <div id="myList" style="width: 100px;height: 100px;background-color: #CDE074;border: 1px dashed darkcyan;"></div>
    <script>
        var oDiv = document.getElementById("myList");
        console.log(oDiv.style.width);//100px
        console.log(oDiv.style.height);//100px
        console.log(oDiv.style.backgroundColor);//rgb(205, 224, 116)
        console.log(oDiv.style.border);//1px dashed darkcyan
        console.log(oDiv.style.borderRadius);//""
    </script>

> 需要注意2点
> 
> 1、所有css中连接符设置的属性，在JS中，必须转成小驼峰的写法；
> 2、float因为在JS中属于保留字，因为不能直接作为属性名，可以用cssFloat和styleFloat（标准浏览器用css前缀的，IE用style的）

##### 设置样式：

    <div id="myList"></div>
    <script>
        var oDiv = document.getElementById("myList");
        oDiv.style.backgroundColor="red";
        oDiv.style.width="50px";//设置的时候，px推荐带上；
        oDiv.style.height="100px";
        oDiv.style.border="1px solid blue";
        console.dir(oDiv.style);//通过这个可以查看对应的所有原生方法，
    </script>

上面的dir，可以把所有的可以方法输出来；

![](http://i.imgur.com/3Kd4xih.png)

CSSStyleDeclaration -> CSSStyleDeclaration -> Object

在不确定某个给定的 CSS 属性拥有什么默认值的情况下，可以使用removeProperty。只要移除相应的属性，就可以为元素应用默认值。


    <div id="myList" style="width: 100px;height: 100px;background-color: #CDE074;border: 1px dashed darkcyan;"></div>
    <script>
        var oDiv = document.getElementById("myList");
        console.log(oDiv.style.border);//1px dashed darkcyan
        oDiv.style.removeProperty("border");
        console.log(oDiv.style.border);//""
    </script>

删除连接符的属性时候，因为这里是字符串穿进去的，删除的直接写原样属性即可；

    <div id="myList" style="width: 100px;height: 100px;background-color: #CDE074;border: 1px dashed darkcyan;"></div>
    <script>
        var oDiv = document.getElementById("myList");
        console.log(oDiv.style.backgroundColor);//rgb(205, 224, 116)
        oDiv.style.removeProperty("backgroundColor");
        console.log(oDiv.style.backgroundColor);//rgb(205, 224, 116)
        oDiv.style.removeProperty("background-color");
        console.log(oDiv.style.backgroundColor);//""
    </script>

如果删除 background-color，必须要用background-color，而不能用backgroundColor，需要注意的；

##### 计算最终样式

DOM2提供了getComputedStyle的方法，接受2个参数，第一个参数是需要参与计算的元素，返回一个CSSStyleDeclaration对象(与style属性的类型相同)，其中包含了当前元素的所有计算样式；
 
    <div id="myList" style="width: 100px;height: 100px;background-color: #CDE074;border: 1px dashed darkcyan;"></div>
    <script>
        var oDiv = document.getElementById("myList");
        var targetObj=getComputedStyle(oDiv,"null");
        console.log(targetObj.width);//100px
        console.log(targetObj.height);//100px
        console.log(targetObj.padding);//0
        console.log(targetObj);
    </script>

低版本IE不支持这个属性的，在低版本IE可以使用元素的currentStyle这个属性来获取；

    <div id="myList" style="width: 100px;height: 100px;background-color: #CDE074;border: 1px dashed darkcyan;"></div>
    <script>
        var oDiv = document.getElementById("myList");
        var targetObj=oDiv.currentStyle;
        console.log(targetObj.width);//100px
        console.log(targetObj.height);//100px
        console.log(targetObj.padding);//0
        console.log(targetObj);
    </script>

所有计算的样式都是只读的；不能修改计算后样式对象中的 CSS 属性。此外，计算后的样式也包含属于浏览器内部样式表的样式信息，因此任何具有默认值的 CSS 属性都会表现在计算后的样式中。例如，所有浏览器中的 visibility 属性都有一个默认值，但这个值会因实现而异。

**getComputedStyle的兼容性写法**：

     function getCss(element,value){
        if(window.getComputedStyle){
            return getComputedStyle(element,null)[value];
        }else{
            return element.currentStyle[value];
        }
    }

上面if中window一定要加，因为这个getComputedStyle在IE下是undefined。如果不加window是直接提示报错的；所以要加window;这样就不是把它作为变量，而是作为window的属性；

if的条件判断也可以变相转化为：

    if(typeof getComputedStyle=="function")

用的时候可以像下面这么用；

    alert(getCSS(ele,"fontSize"));

getComputerStyle第二种写法

     function getCss2(element,value){
        try{
            return getComputedStyle(element,null)[value];
        }else{
            return element.currentStyle[value];
        }
    }

# 知识点二：操作样式表；

- disabled
- href
- media
- ownerNode			指向拥有当前样式表的节点的指针，样式表可能是在 HTML 中通过 < link > 或 < style /> 引入的,如果当前样式表是其他样式表通过@import 导入的，则这个属性值为 null 。IE 不支持这个属性。
- parentStyleSheet	在当前样式表是通过 @import 导入的情况下，这个属性是一个指向导入它的样式表的指针。
- type			表示样式表类型的字符串。对 CSS 样式表而言，这个字符串是 "type/css" 。

除了 disabled 属性之外，其他属性都是只读的。在支持以上所有这些属性的基础上，CSSStyleSheet 类型还支持下列属性和方法

- cssRules
- ownerRule
- deleteRule
- insertRule


# 知识点三：元素大小

**JS中的盒子模型**

    clientWidth;//获取元素的可见宽度。width+左右padding；
    clientHeight;//获取元素的可见高度。width+上下padding；
    clientLeft;//获取元素的左边框宽度
    clientTop;//获取元素的上边框高度；

    offsetWidth;//获取元素width+左右padding+左右border+（可见的）垂直滚动条的宽度；
    offsetHeight;//获取元素的width+上下padding+上下border+（可见的）水平滚动条的高度；
    offsetLeft;//获取元素距离父级参照物的左偏移量；
    offsetTop;//获取元素距离父级参照物的上偏移量；
    offsetParent;//获取元素的父级参照物/上级参照物（和parentNode区分开）

	window.onscroll;//随时的计算当前页面距离body顶部的偏移量(左上角)；
    scrollWidth;//获取元素实际内容的宽，在没有内容溢出的情况下和clientWidth一样，有内容的溢出，则是width+左padding；
    scrollHeight;//获取元素实际内容的宽，在没有内容溢出的情况下和clientWidth一样，有内容的溢出，则是width+左padding；
    scrollLeft;//横向滚动条卷去的高度，这是一个可读写的属性；设置scrollLeft=0；就回到了页面横向第一屏最上边；
    scrollTop;//纵向滚动条卷去的高度，这是一个可读写的属性；设置scrollTop=0；就回到了页面纵向第一屏最上边；


JS中没有直接获取margin值的属性；

##### 客户区相关的

![](http://i.imgur.com/oaKk1jG.png)

##### 偏移量相关的

![](http://i.imgur.com/nTWwumg.png)


offsetLeft 和 offsetTop 属性与包含元素有关，包含元素的引用保存在 offsetParent属性中。 offsetParent 属性不一定与parentNode 的值相等。

**offsetParent取决于position，parentNode取决于DOM结构**

如果获取元素距离页面左上角的绝对位置，可以下面这么写；

	function getElementLeft(element){
		var actualLeft = element.offsetLeft;
		var current = element.offsetParent;
		while (current !== null){
			actualLeft += current.offsetLeft;
			current = current.offsetParent;
		}
		return actualLeft;
	}

    function getElementTop(element){
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null){
            actualTop += current. offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }

这两个函数利用 offsetParent 属性在 DOM 层次中逐级向上回溯，将每个层次中的偏移量属性合计到一块。对于简单的 CSS 布局的页面，这两函数可以得到非常精确的结果。对于使用表格和内嵌框架布局的页面，由于不同浏览器实现这些元素的方式不同，因此得到的值就不太精确了。一般来说，页面中的所有元素都会被包含在几个 <div> 元素中，而这些 <div> 元素的 offsetParent 又是<body> 元素，所以 getElementLeft() 与 getElementTop() 会返回与 offsetLeft 和 offsetTop
相同的值。

在IE中有些问题，封一个方法，可以直接获取到元素的所有绝对偏移量；

    function offset(curEle) {//获取偏移量；
        var par = curEle.offsetParent,
            left = curEle.offsetLeft,
            top = curEle.offsetTop;
        while (par) {
            left += par.offsetLeft;
            top += par.offsetTop;
            if (navigator.userAgent.indexOf("MSIE 8.0") <= -1) {
                left += par.clientLeft;
                top += par.clientTop;
            }
            par = par.offsetParent;
        }
        return {left: left, top: top};
    }

> 所有这些偏移量属性都是只读的，而且每次访问它们都需要重新计算。因此，应该尽量避免重复访问这些属性；如果需要重复使用其中某些属性的值，可以将它们保存在局部变量中，以提高性能。

##### 滚动相关的

![](http://i.imgur.com/J7WbqWk.png)
[图片引自高程三]


** scrollWidth 和 scrollHeight的作用** 

 主要用于确定元素内容的实际大小。例如，通常认为 <html> 元素是在 Web 浏览器的视口中滚动的元素（IE6 之前版本运行在混杂模式下时是 <body> 元素）。因此，带有垂直滚动条的页面总高度就是 document.documentElement.scrollHeight 。

 **document.documentElement**在不包含滚动条的时候， scrollWidth / scrollHeight 与 clientWidth / clientHeight 之间在不同浏览器的区别

- Firefox中：都是文档内容,而非视口内容
- Opera、Safari 3.1 及更高版本、Chrome 中的这两组属性是有差别的，其中 scrollWidth 和 scrollHeight 等于视口大小，而 clientWidth 和 clientHeight 等于文档内容区域的大小。
- IE（在标准模式）中的这两组属性不相等，其中 scrollWidth 和 scrollHeight 等于文档内容区域的大小，而 clientWidth 和 clientHeight 等于视口大小。

可以在不同浏览器下看属性；代码如下；

    console.log(document.documentElement.scrollHeight+"---"+document.documentElement.clientHeight);
    console.log(document.documentElement.scrollWidth+"---"+document.documentElement.clientWidth);

**在确定文档的总高度时，必须取得 scrollWidth / clientWidth  和scrollHeight/clientHeight 中的最大值,才能保证在跨浏览器的环境下得到精确的结果**

    var docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);
    var docWidth=Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);

**scrollLeft / scrollTop**可设置的； 

一般用在做返回顶部的功能；如果当前和顶部的距离不是0，说明已经滚动了；设置他的scrollTop为0就可以返回原位了；

    function scrollToTop(element){
        if (element.scrollTop != 0){
            element.scrollTop = 0;
        }
    }

##### getBoundingClientRect方法

这个方法返回会一个矩形对象，包含 4 个属性： left 、 top 、 right 和 bottom 。这些属性给出了,元素在页面中相对于视口的位置;如果用offset和offsetParent配合做距离页面的距离，需要做很多兼容；但是用getBoundingClientRect方法比较简单；但也是有兼容性问题的；

兼容问题主要在IE678这些低版本浏览器；

IE8 及更早版本认为文档的左上角坐标是(2, 2)，而其他浏览器包括 IE9 则将传统的(0,0)作为起点坐标。因此，就需要在一开始检查一下位于(0,0)处的元素的位置，在 IE8 及更早版本中，会返回(2,2)，而在其他浏览器中会返回(0,0)。

如果不兼容IE678可以直接的使用；getBoundingClientRect()方法；如果需要兼容低版本IE，可以下面这么写；


	<!doctype html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Document</title>
	    <link rel="stylesheet" href="test.css" id="test-css-link"/>
	    <style>
	        #myList{
	            width: 100px;
	            height: 100px;
	            background-color: #CDE074;
	            border: 1px dashed darkcyan;
	            padding: 5px;
	            position: absolute;
	            left: 500px;
	            top: 200px;
	        }
	    </style>
	</head>
	<body>
	<div id="myList"></div>
	<script>
	    var odiv = document.getElementById("myList");
	
	    console.log("原生的getBoundingClientRect方法");
	    console.log(odiv.getBoundingClientRect().top);//200
	    console.log(odiv.getBoundingClientRect().right);//612
	    console.log(odiv.getBoundingClientRect().bottom);//312
	    console.log(odiv.getBoundingClientRect().left);//500
	
	    console.log("自定义的getBoundingClientRect方法");
	    console.log(getBoundingClientRect(odiv).top);//200
	    console.log(getBoundingClientRect(odiv).right);//612
	    console.log(getBoundingClientRect(odiv).bottom);//312
	    console.log(getBoundingClientRect(odiv).left);//500
	
	    function getBoundingClientRect(element){
	        if (typeof arguments.callee.offset != "number"){
	            var scrollTop = document.documentElement.scrollTop;
	            var temp = document.createElement("div");
	            temp.style.cssText = "position:absolute;left:0;top:0;";
	            document.body.appendChild(temp);
	            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
	            document.body.removeChild(temp);
	            temp = null;
	        }
	        var rect = element.getBoundingClientRect();
	        var offset = arguments.callee.offset;
	        console.log("偏差值offset的值是:"+offset);
	        return {
	            left: rect.left + offset,
	            right: rect.right + offset,
	            top: rect.top + offset,
	            bottom: rect.bottom + offset
	        };
	    }
	</script>
	</body>
	</html>

getBoundingClientRect返回参数的示意图；

![](http://i.imgur.com/rhPip4F.png)

于不支持 getBoundingClientRect() 的浏览器，可以通过其他手段取得相同的信息。一般来说， right 和 left 的差值与 offsetWidth 的值相等，而 bottom 和 top 的差值与 offsetHeight相等。而且， left 和 top 属性大致等于使用本章前面定义的 getElementLeft() 和 getElementTop()函数取得的值。综合上述，就可以创建出下面这个跨浏览器的函数


    function getBoundingClientRect(element){
        var scrollTop = document.documentElement.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft;
        if (element.getBoundingClientRect){
            if (typeof arguments.callee.offset != "number"){
                var temp = document.createElement("div");
                temp.style.cssText = "position:absolute;left:0;top:0;";
                document.body.appendChild(temp);
                arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
                document.body.removeChild(temp);
                temp = null;
            }
            var rect = element.getBoundingClientRect();
            var offset = arguments.callee.offset;
            return {
                left: rect.left + offset,
                right: rect.right + offset,
                top: rect.top + offset,
                bottom: rect.bottom + offset
            };
        } else {
            var actualLeft = getElementLeft(element);
            var actualTop = getElementTop(element);
            return {
                left: actualLeft - scrollLeft,
                right: actualLeft + element.offsetWidth - scrollLeft,
                top: actualTop - scrollTop,
                bottom: actualTop + element.offsetHeight - scrollTop
            }
        }
    }
    function getElementLeft(element){
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        while (current !== null){
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return actualLeft;
    }
    function getElementTop(element){
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null){
            actualTop += current. offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }
