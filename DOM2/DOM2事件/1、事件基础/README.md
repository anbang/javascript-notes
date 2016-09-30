#事件基础

**事件是什么**：就是一件事，包括硬件的一些行为；
 
- click
- mouseover
- mouseout
- keydown
- keyup

**什么是绑定**：事件监听；

**具体某一个事件和事件整体的区别**：一件事，和一套事件系统

**什么是事件对象**：实现事件系统，事件的机制，浏览器自己有一套机制；类似人的神经系统，这个内置第机制就是事件对象；


事件演示：
>     var oDiv=document.getElementById("div1");
    oDiv.onmousemove=function(event){
        //直接把一个方法赋值给一个事件属性.这个方法运行的时候，浏览器会自动的给这个方法传一个对象；这个对象就是事件对象；
        event=event||window.event;//IE下的事件对象，是一个全局的event；这种的是兼容写法；
        event.clientX;//鼠标的X轴坐标；
        event.clientY;//鼠标的Y轴坐标；
        //时间有即时行；
        event.type;//事件类型；只和当时发生的类型有关；只能同时处理一个事件；
        this.innerHTML="X:"+event.clientX+" Y："+event.clientY;
    };
    document.documentElement.onkeydown= function (event) {
        event=event||window.event;
        oDiv.innerHTML=event.keyCode;
    }


    //pageX;pageY;鼠标距离文档(当前页面的)最上角的距离；不支持IE678;
    //clientX;clientY;指的是浏览器；
    //onmouseover和onmouseenter区别；over会传播，enter是不传播的；
    //onmouseout和onmouselive区别；

取消冒泡的方法；

>          //阻止事件传播/冒泡的方法；
    this.appendChild(ele);
    ele.onmouseover=function(event){
        event=event||window.event;
        if(event.stopPropagation){
            event.stopPropagation();//标准留言器中禁止冒泡；
            // preventDefault中文意思是阻止默认行为；
        }else{
            e.cancelBubble=true;//IE浏览器禁止冒泡；IE678
        }
    }


onmouseenter的优势；
>     // onmouseover和onmouseenter很像，但是可以避免；onmouseover的一些问题；
    // 如果是从父元素到子元素，不会触发onmouseover;
    // 如果是从子元素到父元素，也不会触发onmouseover；

事件的冒泡和捕获

>      function fn(){
        console.log(this.nodeName)
    }
    eles=document.documentElement.getElementsByTagName("*");
    for(var i=0;i<eles.length;i++){
        //eles[i].addEventListener("click",fn,false);//SPAN、LI、UL、DIV、BODY
        eles[i].addEventListener("click",fn,true);//BODY、DIV、UL、LI、SPAN
    }


冒泡和捕获是事件的两个阶段，我们可以在不同阶段来绑定(监听)处理方法；
如果用false是冒泡，如果是true是捕获；
一般都是用false来处理的

事件委托：
>     document.documentElement.onclick=function(event){
        event=event||window.event;
        //事件源委托给documentElement
        target=event.target||event.srcElement;//事件源
        console.log(target.nodeName)
    }
下面是具体应用

>     document.documentElement.onclick=function(event){
        event=event||window.event;
        //事件源委托给documentElement
        target=event.target||event.srcElement;//事件源
        console.log(target.nodeName)
    };
    //下面是动态创建的
    var p=document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML="222312312312";
    /*事件委托也可以实现动态绑定*/
    /*所有的事件，都可以用事件委托来实现；时间委托是一个高级技巧*/