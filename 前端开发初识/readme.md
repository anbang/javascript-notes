# 前端开发初识
- 1、编辑器的选择/开发环境介绍
- 2、HTML文档和标签介绍
- 3、JS由哪些部分组成、DOM初识
- 4、HTML中怎么使用JS/CSS
- 5、从noscript标签引深出的两种编程思想（优雅降低，渐进增强）
- 6、javascript的文档模式和ES6
- 7、变量的定义和储存值的类型判断
- 8、强类型语言和弱类型语言的区别
- 9、编程语言是做什么的？面向对象编程的真正意义是什么？
- 10、ES6的介绍和javascript文档模式
- 11、面试题
- 12、前端技术方向的选择,编程语言是做什么的？

# 一、编辑器的选择/开发环境介绍
- WebStorm/IDEA,内置支持zen coding 、nodejs、拿来即用的，遇到gulp、git、markdown文件会智能提示对应的插件等，前端开发的神器，因为需要建立索引，启动时间比较长，占用内存大；
- sublime text 启动快，短小精悍型的，配合插件，可实现强大功能，适合喜欢捣腾的，不建议没有编程基础的初学者直接使用，可以编程一段事件后再用；
- Editplus 、 Notepad  、 Dreamweaver 这些都不推荐前端开发初学者使用；很多老开发者还在使用，因为习惯，再就是配置了相关的插件，懒得折腾了，所以一直在用，毕竟干活效率才是最重要的；但是对于初学者，还是建议选择合适的；
- Atom，github；WEB端编辑器；
- 如果您会VIM，编辑器可以还可以用您以前的，主流的编辑器都有VIM语法插件；VIM+webStorm/sublime 等都比较顺手的；
- 推荐使用webStorm，把精力放在研究代码上，不要在编辑器上浪费过多时间；
- webstorm官网：http://www.jetbrains.com/webstorm/
- 因为国内环境不怎么好，不方便下载的，可以暂时用webStorm10，下载地址：http://pan.baidu.com/s/1eR3z1Km 密码: 3ret

##### 开发环境介绍
- 编辑器推荐使用webstorm；
- 浏览器用Chrome；

这样就可以学习javascript，这门语言了，因为JS代码是执行时候才进行编译，所以环境比较简单；
![](http://i.imgur.com/7meEaR8.png)

# 二、HTML文档和标签介绍

HTML文件是由N个标签组成的，这些标签元素构成了搭建网站的基础，每个标签都可以被多个属性所修饰；标签根据它占据其父级元素(容器)的大小分为**块级标签**和**内联标签**

- HTML文档的组成
- HTML4和HTML5的区别
- 常用标签的简单介绍
- 常用的全局属性介绍（所有比起哦前都有的属性）
- HTML书写规则

##### HTML文档的组成
常见的HTML文件，由类型声明和html标签构成；
- 类型声明（!DOCTYPE）的作用是告诉浏览器，以什么格式渲染下面的文件；
- html标签是HTML文件的基础；(HTML标签内一般还会有head和body标签)
![](http://i.imgur.com/7meEaR8.png)
例如上面这张图片中的HTML代码，就是最基础的HTML文件格式；

##### HTML4和HTML5的区别

最重要的标志，就是看类型声明；

- HTML5是用 <!DOCTYPE html> 这种的声明
- HTML4是用 <!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 4.0 Transitional//EN” “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”> 这种的声明；

因为这里是告诉浏览器的渲染方式，所以这里绝对此文件是HTML4还是5，不过并没有什么软用，现在一般都是HTML5的声明格式；记住第一个就可以了；这些都不是重点

另外HTML5为了更好的符合语义化和升级，新增了下面的标签
> header、footer、section、audio、video等；

##### 常用标签的简单介绍

div、ul、li、p、span、a、img、table、tr、th、td、br/hr、h1/h2/h3

![](http://i.imgur.com/wanAEUs.png)

上面写了常见的一些标签；

##### 常用的全局属性（所有标签都有的属性）
- class
- id
- title

**class**：一个名字可以多个class公用；

**id**：一个名字在一个页面里，只能一个标签使用；

title：title里是自定义的内容，表现是鼠标放上去时候的，文字提示；

##### HTML规则
其实个人觉得为了总结而总结是一件很痛苦的事情，记得用zencoding生成的就是标准的书写规范，然后注意下面这句话就可以了；

- 标签要闭合，层级要明确，双引号和单引号不能混合使用；

##### script标签的属性：

script是属性有async，defer，charset，languge，src，type六个；一般常用的就是src，type；而且type是属于可忽略的属性，推荐不写；

因为HTML不是这个笔记的总结重点，就先这样了；

# 三、JS由哪些部分组成、DOM初识

一个完整的javascript实现应该有下列三个不同部分组成：
![](https://raw.githubusercontent.com/Broszhu/zhuanbang-javascript-notes/master/img/path1/javascript.png)
- 核心(ECMAScript)：提供核心语言功能；
- 文档对象模型(document object model 简称DOM)：提供访问和操作网页内容的方法和接口；
- 浏览器对象模型(broser object model 简称 BOM)：提供与浏览器交互的方法和接口；BOM最蛋疼的部分是没有统一的标准；从根本上讲BOM只处理浏览器窗口和框架


##### 1、核心部分：

WEB浏览器只是ECMA的宿主环境之一，也可以不依赖浏览器，比如宿主环境可能还包括Node和Adobe Flash；
ECMAScript规定了Javascript这门语言的组成部分；主要规定了语法、类型、语句、关键字、保留字、操作符、对象；

##### 2、DOM部分

文档对象 模型把整浏览器页面映射为一个多层节点结构，页面中每个组成部分都是某种类型的节点，这些节点又包含了不同类型的数据；
```
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <title>这是显示在浏览器选项卡上的文字标题</title>
      </head>
      <body>
        <div id="page">您好啊，我是HTML</div>
      </body>
      </html>

  ```

> HTML页面，通过DOM可以看成树形图，借助DOM提供的API，可以轻松的增删改查；下面是几个标签的层级关系

```
<!DOCTYPE html>
<html>
  <head>
    <!--meta标签是head的儿子，是title的哥哥-->
    <meta charset="UTF-8">
    <!--titles head的儿子，是meta的弟弟-->
    <title>这是显示在浏览器选项卡上的文字标题</title>
  </head>

  <!--body标签是html的儿子，是head的弟弟，是id=page这个div的父亲-->
  <body>
    <!--div标签是body的儿子-->
    <div id="page">您好啊，我是HTML</div>
  </body>
  <!--html是head和body的父亲-->
</html>

```
![](http://i.imgur.com/jrTBs5t.png)

DOM的几个级别的介绍；DOM目前分为三个级别；DOM1级，DOM2级，DOM3级；

- DOM1级：是很早以前成为W3C标准的，由DOM核心和DOM HTML两部分组成，DOM核心规定是如何映射基于XML的文档结构，以便简化对文档中任意部分的访问和操作；DOM HTML模块则在DOM核心的基础上加以扩展，添加了针对HTML的对象和方法；主要目标是映射文档的结构；

- DOM2级：在原来的DOM1级基础上扩充了鼠标和用户界面事件等；主要包括DOM视图，DOM事件、DOM样式、DOM遍历和范围；

- DOM3级：引入了以统一方式加载和保存文档的方法（在DOM加载和保存模块中定义）；新增了验证文档的方法（在DOM验证模块中定义）；DOM3级也对DOM核心进行了扩展，开始支持XML1.0，涉及XML infoset，Xpath和XML Base。

  ##### 3、BOM部分；
BOM最蛋疼的部分是没有统一的标准；从根本上讲BOM只处理浏览器窗口和框架；主要有
- 弹出新浏览器窗口的功能；
- 移动、缩放和关闭浏览器窗口的功能；
- 提供浏览器详细信息的navigator对象；
- 提供浏览器所加载页面的详细信息的location对象；
- 提供用户显示器分辨率详细信息的srceen对象；
- 对cookies的支持；
- 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象；
- 有了HTML5后，DOM实现的细节有望朝着兼容性越来越高的方向发展；

JavaScript中我们学的所有的知识点其实都是基于浏览器内置类实现的，这也说明了js是由一个个类组成的，而我们要学习的就是类、实例的关系和类上面的私有或者公有的属性或者方法---这就是我们经常听到的面向对象编程

# 四、HTML中怎么使用JS/CSS

>- 1、行内使用Javascript
>- 2、嵌入式；
>- 3、外联式；

##### 1、行内使用Javascript介绍；
最常用的就是在a标签的href上使用Javascript:;

`
    <a href="javascript:;">链接ZAB</a>
`

这段代码，就是当点击连接[链接ZAB]的时候，没有任何反应；这是最常用的行内Javascript用法；

如果需要使用点击链接弹窗文字；可以如下的写法；

    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
		<div id="div1">
		    <a href="javascript:;">链接ZAB</a>
		    <a href="javascript:;" onclick="alert('这是一段测试代码')">有弹窗的链接</a>
		</div>
      <script>
      function zab(){
        alert("这是一段测试代码")
      }
      </script>
      </body>
    </html>

这时候点击连接有弹窗的链接的时候，就会弹窗"这是一段测试代码"的消息提醒；行内使用Javascript的方法，不推荐大家使用，不易维护 ；

##### 2、嵌入式是直接写在HTML页面中的；
下面的，绑定事件的，就是嵌入式的写法；


	<!doctype html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Document</title>
	</head>
	<body>
	
	<div id="div1">
	    <a href="javascript:;" onclick="zab()">222</a>
	</div>
	<div id="div2">
	    <a href="javascript:;">链接ZAB</a>
	    <a href="javascript:;">有弹窗的链接</a>
	</div>
	
	<script>
	    var oDiv=document.getElementById("div2");
	    oDiv.onclick=function(){
	        zab();
	    };
	    function zab(){
	        alert("这是一段测试代码")
	    }
	</script>
	</body>
	</html>

##### 3、外联式；
通过script的src属性引用一个文件；关于script的标签位置，按照传统的做法，是写在head元素中；这种做法的目地是把所有外部文件(CSS,JS)的引用都放在相同的地方；可是如果放在顶部；HTML加载的时候，是从上到下依次解析的；页面加载很多HTL的时候，就会堵塞后面的DOM节点加载；导致页面呈现的内容出现延迟，而延迟期间浏览器窗口将是空白的；为了避免这个问题，现在的WEB一般是全部javascript都放在</body>之前；
还有一点需要注意的，如果放在head中，直接获取元素的时候，是获取不到的;比如获取ID，就是获取不到的；需要做延迟加载才好

      <!doctype html>
      <html>
      <head>
          <meta charset="UTF-8">
          <title>Document</title>
      </head>
      <body>
      <div id="div1">
          <a href="javascript:;">链接ZAB</a>
          <a href="javascript:;">有弹窗的链接</a>
      </div>
      </body>
      <!--嵌入式-->
      <script>
          var oDiv=document.getElementById("div1");
          oDiv.onclick=function(){
              zab();
          };
          function zab(){
              alert("这是一段测试代码")
          }
      </script>
      <!--外链式-->
      < script src="./jquery.js"></script>
      < /html>

所有的javascript会按照它在页面中的顺序来依次解析；一般写在页面内容的后面，推荐放在</body>前，因为放在body前可以通过W3C的校验，如果不为W3C校验，放在</html>后面也是没问题的；


##### 关于行内写JS；

项目中，很少会遇到行内写JS的，工作中我只在给wifi组做支撑的时候见到过这么写的；当时他们的wifi管理页面，用luci lua 一个开源项目修改的，页面的HTML CSS,JS是直接渲染出来的，里面的CSS,JS大都是行内写的，维护起来真的太坑了；我在写JS的时候，把需要我写的JS代码和模块，全部外链式引导页面，把CSS，JS和他们lua代码分开；不和他们的代码掺合在一起，否则以后维护起来就太蛋疼了；

##### 嵌入式与外链式的区别？

在HTML中嵌入javascript代码虽然没有问题，但是一般认为最好的做法还是尽可能使用外部文件来包含javascript代码，不过，并不存在必须使用外链式的规定；但外链式的优点如下
- 维护性好：JS代码和HTML代码混在一起，维护的时候需要改动HTML页面，而现在为了专注和分工明确，基本都是前后端分离的做法；页面输入都是后端的页面；如果是外链式的，只需要维护自己的JS文件即可，不需要接触HTML文件；
- 可缓存：浏览器能够具体的设置缓存连接的所有javascript文件，也就是说如果两个页面都使用同一个文件，那么这个文件只需要下载一次，最终结果就是能够加快页面加载的速度（每次上新的时候，修改时间戳即可，）；

	a.xxx.com/project/test.js?t=2016101301 （?t=2016101301 就是时间戳）

- 适用未来：XHTML和HTML文件会出现javascript代码解析方面的差异；因为外链式不需要接触XHTML/HTML所以不存在这些问题；
注意，在使用嵌入式写法的时候，不要标签内任何地方都不要出现< script >的字符串；即使是alert，console.log这些输出；如果需要用，请使用转移字符"/"来解决；


##### HTML外部资源引入

- href: hypertext reference
- src: source

href 用于标示资源和文档关系,src 用于替换标签内容

	<img src="xxx.jpg"/>
	<script type="text/javascript" src="xxx.js"></script>
	
	<a href="http://www.baidu.com">百度</a>

** 为什么 style不用src**

至于说为什么当初就决定外部样式表用link href来链接，而不是用style src来载入，可能是因为第一批互联网人认为样式表更符合外部链接资源的特征，它更接近附属的资源，而不是内嵌的内容。比如考虑alternate stylesheets，在同一时间只需要链接一组样式表，而不是载入所有。当然你可以简单的归结为历史遗留（也就是当初某个浏览器开发者的一个偶然决定导致）。这是一个扯淡的问题，制作标准的人不是中国人，是老外；

** 其它的一些意外**

有些名词是中国第一批程序员，翻译的问题；最明显的一个名次[上下文]，就是代码所在的执行环境，英文

context，这个应该翻译成[代码运行环境] 才更符合语义，但是第一批互联网人翻译成中文书，都这么写，然后我们这些小辈们为了统一，也都这么叫了；

在HTTP协议的知识里，有一个叫HTTP Referer的；属于请求头（header）的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器我是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。

比如从我的博客链接到一个朋友那里，他的服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上。链接访问他的网站，以前自己倒腾过网站的朋友，在百度统计,55LA统计之类的，会有这方面的统计信息供查看；

这里的Referer其实应该是英文单词referrer，也不知道是拼错的人太多了导致标准跟着拼错，还是编写标准的人拼错了，开发者讲错纠错，反正现在的情况就都写成HTTP Referer了，只能将错就错的写了。历史遗留问题，无解的；

**css中的行内、嵌入式、外链式**
下面就是css的各种写法；
![](http://i.imgur.com/waxA6un.png)

他的优缺点和js一样；如果简单的样式，可能感觉差不多，但是如果在项目里，重复利用等各方面考虑，还是外链式是最佳选择；

![](http://i.imgur.com/CHBbrxq.png)

上面这种可以看出最明显的区别；

- 行内写，每一个标签都需要重复写N多代码，这当然是不明智的；
- 嵌入式，相比行内，容易维护，但是不能缓存
- 外链式，相比嵌入式，不仅容易维护，而且还可以缓存；

# 五、从noscript标签引深出的两种编程思想（优雅降低，渐进增强）

在一些页面不支持javascript或者javascript被禁用的时候；script标签内的内容是失效的，这个时候会显示noscript；

      <!doctype html>
      <html>
      <head>
          <meta charset="UTF-8">
          <title>Document</title>
      </head>
      <body>
      <script src="./jquery.js"></script>
      <noscript>
          <p>你这么牛逼，咋不上天呢，连Javascript都禁用，赶紧回家种田去吧</p>
      </noscript>
      < /body>
      < /html>

上面的noscript在启用脚本的浏览器中，用户也看不到，但是禁用的时候，会出现；这也牵扯到一个优雅降级的编程思想，后面会有介绍；

![](http://i.imgur.com/Ml6lfAX.png)

为了适用不同的版本，前端开发的时候，一般会有两个思路:

- 优雅降级，
- 渐进增强；

> 优雅降低，就是按照支持度最高的浏览器标准来写代码，一般是以chrome为准，对于技术支持较旧的浏览器，只要不影响使用都可以不处理（比如圆角效果border-radius在低版本IE中是没有圆角效果的，但却并不影响正常阅读，那就不管了），如果有功能方面在低版本无法正常，就做低版本的兼容，比如兼容到IE8/IE6；我自己走的路线是优雅降级；

> 渐进增强，是以技术支持最低的浏览器为准，假设以IE6为准(如果兼容到IE8，就以IE8为准)，写的代码在IE6/8中没问题后，在补充一些高级浏览器支持的效果；

广义来说，其实要定义一个基准线，在此之上的增强叫做渐进增强，在此之下的兼容叫优雅降级。这个基准线对于我，是允许使用javascript、cookie和css的IE8浏览器。

不过狭义而言，渐进增强一般说的是使用CSS3技术，在不影响老浏览器的正常显示与使用情形下来增强体验，而优雅降级则是体现html标签的语义，以便在js/css的加载失败/被禁用时，也不影响用户的相应功能。

#####CSS3中的方案

.transition {   /* 渐进增强写法 */
  -webkit-transition: all .5s;
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;  
} 
.transition {   /* 优雅降级写法 */ 
          transition: all .5s;
       -o-transition: all .5s;
     -moz-transition: all .5s;
  -webkit-transition: all .5s;
}

推荐第一种写法[渐进增强]；写transition可能看不出两种写法的区别；看下多个属性的时候的border-radius

        .test-one {
            width: 500px;
            height: 300px;
            background-color: #37C7D4;
            border-radius: 30px 10px;
            -webkit-border-radius: 30px 10px;
        }
        .test-two {
            width: 500px;
            height: 300px;
            background-color: #d46c4d;
            -webkit-border-radius: 30px 10px;
            border-radius: 30px 10px;
        }
上面是在chrome测试的两种不同写法；

我想要的是让box左上和右下角为30像素圆弧，左下角和右上是10像素圆弧。

![](http://i.imgur.com/xRaa5Uf.png)

CSS3 前缀 o webkit moz ms 分别对应不同的内核；

- -moz-对应 Firefox, 
- -webkit-对应 Safari and Chrome
- -o- for Opera（记忆中，在一篇国外的文档上看到，欧朋是没有明确用 -o 这个前缀的，把他写上是为了向后兼容，适应未来；现在一时翻不到那篇文章了，感兴趣的可以多了解下）
- -ms- for Internet Explorer

CSS不是笔记的重点，所以就不多写了；

- 在写CSS3的时候，推荐渐进增强； 
- 在写JS的时候，推荐优雅降级；

# 六、Javascript的文档模式；

分为普通模式和严格模式，正常的都是普通模式，严格模式是解决javascript本身的语法问题；

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

进入严格模式的方式，加入"use strict";字符串就可以了；在js文件全局放，就是全部严格模式；在function内放，就是当前的方法是严格模式；一般我们都是用普通模式；现在的插件类库框架，一般都会基于严格模式下开发以确保程序的稳健；

##### ES6

ECMAScript 是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言,解决了一些ES5中代码不严谨的规则；

但是遗憾的是现在即时你写ES6，也需要babel之类的转码器转成ES5，否则浏览器会报错；

要学习Javascript，ES5是必须会的，如果ES5的基础打的好，ES6一个礼拜就熟练入手了，因为他是ES6是基于ES5的改变和优化，你知道其中的原理后，很容易过渡，现在浏览器也没有全面支持，你有大把的时间研究ES5，ES5才是根基，等ES6,ES7全面普及了，笔记里会总结ES6,但是正常的演示代码基于ES5；
