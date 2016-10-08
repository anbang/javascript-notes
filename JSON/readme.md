**JSON**

JSON(javasctipr object notation)Javascript对象表示法； 

JSON 是 JavaScript 的一个严格的子集，利用了JavaScript中的一些模式来表示结构化数据。可以把 JSON 直接传给 eval() ，而且不必创建 DOM 对象。

关于 JSON，最重要的是要理解**它是一种数据格式，不是一种编程语言。虽然具有相同的语法形式，但 JSON 并不从属于 JavaScript。而且，并不是只有 JavaScript 才使用 JSON**，毕竟 JSON 只是一种数据格式。很多编程语言都有针对 JSON 的解析器和序列化器。

** JSON 是一个轻量级的数据格式，可以简化表示复杂数据结构的工作量。JSON 使用 JavaScript 语法的子集表示对象、数组、字符串、数值、布尔值和 null **。

即使 XML 也能表示同样复杂的数据结果，但JSON 没有那么烦琐，而且在 JavaScript 中使用更便利。ECMAScript 5 定义了一个原生的 JSON 对象; 

- **JSON.stringify()**		将对象序列化为 JSON 字符串;该方法接收3个参数；
- **JSON.parse()** 			将JSON字符串解析为JS对象(JSON对象)；该方法接收2个参数；

这两个方法都有一些选项，通过它们可以改变过滤的方式，或者改变序列化的过程。

原生的 JSON 对象也得到了很多浏览器的支持，比如 IE8+、Firefox 3.5+、Safari 4+、Opera 10.5 和Chrome