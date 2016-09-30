#封装动画库
其实这不应该叫库，因为只有一个方法；
借用了以前封装[DOM库](https://github.com/Broszhu/My-JavaScript-is-a-clover/tree/master/DOM/%E5%B0%81%E8%A3%85DOM%E5%BA%93)中的setCss方法来设置的；

- 因为经常设置的，是
- 宽度
- 高度
- 距离左边位置
- 透明度
- 背景颜色

等这些的项；封装一个starMove的方法来处理这些；

startMove(ele, json, fnEnd){};

的其中ele，代表的是执行主体；json代表需要改变的样式，是一个json格式的对象；后面的fnEnd代表是回调函数；在事件发生的时候，同时回调一个函数；

动画库里面moveType 中是数学运算是网上搜的，并不是自己写的；
