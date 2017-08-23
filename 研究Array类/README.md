# Array 数组类

除了 Object 之外， Array 类型恐怕是 ECMAScript 中最常用的类型了。而且，ECMAScript 中的数组与其他多数语言中的数组有着相当大的区别。虽然 ECMAScript 数组与其他语言中的数组都是数据的有序列表，但与其他语言不同的是，ECMAScript 数组的每一项可以保存任何类型的数据。也就是说，可以用数组的第一个位置来保存字符串，用第二位置来保存数值，用第三个位置来保存对象，以此类推。而且，CMAScript 数组的大小是可以动态调整的，即可以随着数据的添加自动增长以容纳新增数据。

- 一、数组的定义
- 二、数组的length属性
- 三、数组的使用
- 四、数组的方法

### 一、数组的定义

- 构造函数模式

            var colors = new Array("red", "blue", "green"); //创建一个包含 3 项，即字符串red", "blue", "green"的数组
            var colors = new Array(3); // 创建一个包含 3 项的数组，实际项目中，很少有人这么写；
            var colors = Array("red", "blue", "green"); //构造函数的new是可以省略的；

- 数组籽棉量表示法

> 数组字面量由一对包含数组项的方括号表示，多个数组项之间以逗号隔开

            var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
            var names = []; // 创建一个空数组
            var values = [1,2,]; // 不要这样！这样会创建一个包含 2 或 3 项的数组
            var options = [,,,,,]; // 不要这样！这样会创建一个包含 5 或 6 项的数组


在 IE 中， values 会成为一个包含 3 个项且每项的值分别为 1、2 和 undefined 的数组；在其他浏览器中， values 会成为一个包含 2项且值分别为1 和 2 的数组。原因是 IE8 及之前版本中的 ECMAScript 实现在数组字面量方面存在 bug。由于这个 bug导致的另一种情况如最后一行代码所示，该行代码可能会创建包含 5 项的数组（在 IE9+、Firefox、Opera、Safari 和 Chrome 中），也可能会创建包含 6 项的数组（在 IE8 及更早版本中）。在像这种省略值的情况下，每一项都将获得 undefined 值；这个结果与调用 Array 构造函数时传递项数在逻辑上是相同的。但是由于 IE 的实现与其他浏览器不一致，因此强烈建议不要使用这种语法。

在读取和设置数组的值时，要使用方括号并提供相应值的基于 0 的数字索引，如下所示：**数组的索引是以0开始的,一定要注意**

            var colors = ["red", "blue", "green"]; // 定义一个字符串数组
            console.log(colors[0]); // 显示第一项,可以思考下，如果访问的索引超过数组长度呢？会返回什么
            colors[2] = "black"; // 修改第三项
            colors[3] = "brown"; // 新增第四项,如果设置某个值的索引超过了数组现有项数,数组就会自动增加到该索引值加 1 的长度（就这个例子而言，索引是 3，因此数组长度就是 4）

### 二、数组的length属性

数组的项数保存在其 length 属性中，这个属性始终会返回 0 或更大的值，如下面这个例子所示：

            var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
            var names = []; // 创建一个空数组
            console.log(colors.length); //3
            console.log(names.length); //0

-  数组的 length 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。

            var colors = ["red", "blue", "green"];  // 创建一个包含 3 个字符串的数组
            colors.length = 2;
            console.log(colors[2]);                 //undefined，此时的colors数组已经被改变了；数组 colors 一开始有 3 个值。将其 length 属性设置为 2 会移除最后一项（位置为2 的那一项），结果再访问 colors[2] 就会显示 undefined 了。
            colors.length = 10;
            console.log(colors[9]);                 //undefined,虽然 colors 数组包含 2 个项，但把它的 length 属性设置成了 10。这个数组不存在位置 9，所以访问这个位置的值就得到了特殊值 undefined 。

- 利用 length 属性也可以方便地在数组末尾添加新项

            var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
            colors[colors.length] = "black"; // （在位置 3 ）添加一种颜色
            colors[colors.length] = "brown"; // （在位置 4 )再添加一种颜色
 > 由于数组最后一项的索引始终是 length-1 ，因此下一个新项的位置就是 length 。每当在数组末尾添加一项后，其 length 属性都会自动更新以反应这一变化。

**数组中的小技巧**

 获取或者修改数组的长度，例如：ary.length=ary.length-1就是删除数组的最后一项；数组中的splice相对来说实现删除的时候，每删除一项后面的索引都需要重新的计算，比较耗费性能，如果要删除数组中所谓为n这一项，我们可以这样去写；
            
            ary[n]=ary[ary.length-1];//首先把数组的最后一项替换当前的项
            ary.length=ary.length-1;//然后在删除数组的最后一项

### 三、数组的使用

- array[index] ;直接数组后面跟[索引]即可；

### 四、数组的方法

- push 向数组末尾增加新元素，返回新增后数组的长度，原有的数组改变；
- 
        var ary=[];
        ary.push(12);
  
- pop 删除数组末尾的元素，返回删除的内容，原有的数组改变；

        var ary=[1，2，3，4];
        ary.pop();

- shift 删除数组第一位元素，返回删除后的内容，原有的数组改变；

        var ary=[1，2，3，4];
        ary.shift();

- unshift 向数组开头增加新元素，返回新增后数组的长度，原有的数组改变；

        var ary=[];
        ary.unshift(12);

- splice
    - splice(n,m)   从索引n开始删除m个元素，把删除的部分当作新数组返回，原有的数组改变
    - splice(n,m,x) 从索引n开始删除m个元素，把删除的部分当作新数组返回，并且用x替换原来位置的内容，原有的数组改变
    - splice(n,0,x) 把x添加到指定索引n之前；
- slice
    - slice(n,m)    从索引n开找到索引m处(不包含m)，将找到的内容放到新数组返回，原有的数组不变
    - slice(n)      从索引n处一直找到数组末尾；
    - slice(0)      数组克隆
- concat        将两个数组进行拼接，原有数组不变，例如ary1.concat(ary2)
    - ary1.concat() 相当于clice(0)也是克隆数组
- join      将数组按照指定的分隔符拆分字符串，原有的数组不变
- toString  将数组转化为字符串，原有的数组不变
- sort      数组排序的方法，原有数组改变，我们通常这样写，ary.sort(function(a,b){return a-b;});来实现数组的升序排列 
- reverse    将数组倒过来排序，原来数组改变
- indexOf / lastIndexOf 获取数组中某一项的索引，通常用来检测数组中是否包含某一项内容，不包含返回的是-1；这个方法在IE678下不兼容；
- forEach   循环数组中每一项，然后进行相关的操作，这个方法在IE678不兼容，
    - ary.forEach(function(item,index,input){},cantext);第二个参数是指定函数中的this，不写默认是window
- map    循环数组中的每一项，然后进行相关的操作，相对于forEach来说，map有返回值，可以修改数组中某一项，IE678不兼容，
    - ary.map(function(item,index,input){},cantext);第二个参数是指定函数中的this，不写默认是window
- length