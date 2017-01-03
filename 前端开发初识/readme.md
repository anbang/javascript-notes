# 前端开发初识
- 1、编辑器的选择/开发环境介绍
- 2、HTML文档和标签介绍
- 3、JS由哪些部分组成、DOM初识
- 4、HTML中怎么使用JS/CSS
- 5、从noscript标签引深出的两种编程思想（优雅降低，渐进增强）
- 6、变量的定义和储存值的类型判断
- 7、强类型语言和弱类型语言的区别
- 8、编程语言是做什么的？面向对象编程的真正意义是什么？
- 9、ES6的介绍和javascript文档模式
- 10、面试题
- 11、前端技术方向的选择,编程语言是做什么的？

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