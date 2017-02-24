# Boolean类型

可以先输出Boolean来观察下

            console.dir(new Boolean())

![](http://i.imgur.com/ufcUHAP.png)

这个类型只有2个方法，并且都是重写Object的方法；

- toString()
- valueOf()


Boolean对象在实际使用中，用处并不大，

因为boolean数据就是用来判断真假的，而Boolean对象是做为对象来用的，任何非空对象转换的时候，都是true、；

new Boolean(false) //这种创建的Boolean是true的；

例子如下:

    var falseObject = new Boolean(false);
    var result = falseObject && true;
    console.log(falseObject,result); //true,因为falseObject会被转为true；因为是当作对象来解析的；
    var falseValue = false;
    result = falseValue && true;
    console.log(falseValue,result); //false

    console.log(typeof falseObject); //object
    console.log(typeof falseValue); //boolean
    console.log(falseObject instanceof Boolean); //true
    console.log(falseValue instanceof Boolean); //false

理解基本类型的布尔值与 Boolean 对象之间的区别非常重要——当然，我们的建议是永远不要使用 Boolean 对象。
