#用封装好的DOM库，模块化开发选项卡

用[封装好的DOM库](https://github.com/Broszhu/zhuanbang-javascript-notes/blob/master/DOM%E6%93%8D%E4%BD%9C%E5%92%8C%E5%B0%81%E8%A3%85DOM%E5%BA%93/tool.js)来实现[模块化开发选项卡](#)；

[第一次封的模块化现象卡，借助封装的DOM库](http://taobao.fm/works/tabModel/tabModel.html)

后面还在在这两次的基础上，再次进行模块化开发；

封装思路是，先获取指定的li集合；

然后鼠标操作li，通过DOM关系来间接操作下面的DIV部分；

这次的模块化开发中，class="select"与方法耦合了；下次封装的时候；需要分离开来；

后面会再次重新封装；