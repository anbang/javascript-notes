# Math对象

ECMAScript 还为保存数学公式和信息提供了一个公共位置，即 Math 对象。与我们在 JavaScript 直接编写的计算功能相比， Math 对象提供的计算功能执行起来要快得多。 Math 对象中还提供了辅助完成这些计算的属性和方法。

-  min() 和 max() 方法
-  舍入方法
-  random() 方法
-  其它方法

使用 Math 的属性和方法的语法：
        var testMin=Math.min(1,2,3,4,5,6,7);

注释：Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。

###  min() 和 max() 方法

> Math.max();获取一堆数中的最大值；
> Math.min();获取一堆数中的最小值；

          var testMin=Math.min(1,2,3,4,5,6,7),
              testMax=Math.max(1,2,3,4,5,6,7);
        
              console.log(testMin,testMax);//1,7

> 求下面数组中的最大值，最小值

          var testAry=[1,2,3,4,5,2,43,5,6,7,8,9,34];
          var testMin=Math.min.apply(null,testAry),
              testMax=Math.max.apply(null,testAry);
        
              console.log(testMin,testMax);//1,43

用的是allly的方法；

### 舍入方法

- Math.round() 四舍五入
- Math.ceil() 向上取整
- Math.floor() 向下取整
- Math.abs() 取绝对值

        console.log(Math.ceil(25.9)); //26
        console.log(Math.ceil(25.5)); //26
        console.log(Math.ceil(25.1)); //26
        console.log(Math.round(25.9)); //26
        console.log(Math.round(25.5)); //26
        console.log(Math.round(25.1)); //25
        console.log(Math.floor(25.9)); //25
        console.log(Math.floor(25.5)); //25
        console.log(Math.floor(25.1)); //25

对于所有介于 25 和 26（不包括 26）之间的数值， Math.ceil() 始终返回 26，因为它执行的是向上舍入。 Math.round() 方法只在数值大于等于 25.5 时返回 26；否则返回 25。最后， Math.floor()对所有介于 25 和 26（不包括 26）之间的数值都返回 25。

### random

获取0-1之间的随机小数

> 获取minNum到maxNum之间的随机整数
     Math.round(Math.random()*(maxNum-minNum)+minNum) 

> 随机显示一些名人名言和新闻事件。套用下面的公式，就可以利用 Math.random()从某个整数范围内随机选择一个值。

        值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)

### 其它方法

Math.abs(num)   返回 num 的绝对值
Math.asin(x)    返回 x 的反正弦值
Math.exp(num)   返回 Math.E 的 num 次幂
Math.atan(x)    返回 x 的反正切值
Math.log(num)   返回 num 的自然对数
Math.atan2(y,x) 返回 y/x 的反正切值
Math.pow(num,power) 返回 num 的 power 次幂
Math.cos(x)     返回 x 的余弦值
Math.sqrt(num)  返回 num 的平方根
Math.sin(x)     返回 x 的正弦值
Math.acos(x)    返回 x 的反余弦值
Math.tan(x)     返回 x 的正切值