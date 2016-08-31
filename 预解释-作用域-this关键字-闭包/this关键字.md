# this关键字

- this和content的区别
- 如何区分this呢


研究的this都是指[函数执行中的this]

### this和content的区别

JS中this是执行的主体(谁来执行的this就是谁),context是执行所在的范围(在哪执行的上下文就是谁) -> "this和context没有必然的关系"

> 例如：张三在沙县吃饭,this->张三  context->沙县小吃；张三和沙县小吃没有必然关系；

	   function 吃饭(){
	        this->张三
	    }
	    张三.吃饭();
	    ~function(){
	        张三.吃饭();
	    }();

### 如何的区分this呢

this:当前函数执行的主体,它和函数在哪定义的或者在哪执行的都没有任何关系；如何的区分this呢?
1、函数执行,首先看函数名前面是否有".",有的话,"."前面是谁this就是谁;没有的话this就是window
2、自执行函数中的this永远是window，（window去执行的，很多时候window可以省略）
3、给元素的某一个事件绑定方法,当事件触发的时候,执行对应的方法,方法中的this是当前的元素；比如选项卡的代码中；

	function fn() {
		console.log(this);
	}
	var obj = {fn: fn};
	fn();//this->window
	obj.fn();//this->obj

> 事件执行，不同的写法，this指向是不同的

	document.getElementById("div1").onclick = fn;//fn中的this是#div1
	document.getElementById("div1").onclick = function () {
	  fn();//this->window
	};
	function fn() {
	  console.log(this);
	}


> 不同作用域的

	function sum() {
	  console.log("sum",this);//this->window
	  fn();//this->window
	}
	sum();
	var oo = {
	    sum: function () {
	      console.log("oo.sum",this);//this->oo
	      fn();//this->window
	    }
	};
	oo.sum();
	function fn() {
	  console.log(this);
	}


你以为 你以为的 就是你以为的

