#JS中的盒子模型

    clientWidth;//获取元素的可见宽度。width+左右padding；
    clientHeight;//获取元素的可见高度。width+上下padding；
    clientLeft;//获取元素的左边框宽度
    clientTop;//获取元素的上边框高度；

    offsetWidth;//获取元素width+左右padding+左右border；
    offsetHeight;//获取元素的width+上下padding+上下border；
    offsetLeft;//获取元素距离父级参照物的左偏移量；
    offsetTop;//获取元素距离父级参照物的上偏移量；
    offsetParent;//获取元素的父级参照物/上级参照物（和parentNode区分开）

	window.onscroll;//随时的计算当前页面距离body顶部的偏移量(左上角)；
    scrollWidth;//获取元素实际内容的宽，在没有内容溢出的情况下和clientWidth一样，有内容的溢出，则是width+左padding；
    scrollHeight;//获取元素实际内容的宽，在没有内容溢出的情况下和clientWidth一样，有内容的溢出，则是width+左padding；
    scrollLeft;//横向滚动条卷去的高度，这是一个可读写的属性；设置scrollLeft=0；就回到了页面横向第一屏最上边；
    scrollTop;//纵向滚动条卷去的高度，这是一个可读写的属性；设置scrollTop=0；就回到了页面纵向第一屏最上边；


JS中没有直接获取margin值的属性；


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


# 知识点：访问和设置元素的样式；


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
