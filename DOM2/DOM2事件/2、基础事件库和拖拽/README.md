#基础事件库和拖拽
标准浏览器监听：

> oDiv.addEventListener("click",fn3);
> oDiv.addEventListener("click",fn4,false);//和上面一样的，不写和写false一样的；

移除的

> this.removeEventListener("click",fn1,false);//移除

IE浏览器的监听用的是attachEvent；

绑定和移除的方法

>     var oDiv=document.getElementById("div1");
    function bind(ele,type,fn){//绑定
        if(ele.addEventListener){
            ele.addEventListener(type,fn,false);
            //ele.addEventListener(type,fn);//也可以写成这样的
        }else{
            ele.attachEvent("on"+type,fn);
        }
    }
/*  alert(typeof oDiv.addEventListener);//function

    alert(typeof oDiv.attachEvent);//在IE7里面是object*/
    function unbind(ele,type,fn){//移除
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn,false);
        }else{
            ele.detachEvent("on"+type,fn)
        }
    }

IE兼容性问题：
>     bind(oDiv,"click",fn1);
    bind(oDiv,"click",fn2);
    bind(oDiv,"click",fn3);
    bind(oDiv,"click",fn4);
    bind(oDiv,"click",fn5);
    bind(oDiv,"click",fn6);
    bind(oDiv,"click",fn7);
    bind(oDiv,"click",fn8);
    bind(oDiv,"click",fn9);
    bind(oDiv,"click",fn10);
    /*标准浏览器打印：1,2,3,4,5,6,7,8,9,10
    * IE7/8：9,8,7,10,6,5,4,3,2,1
    * */
    //IE和标准浏览器的区别：
    // 1、this不指向被绑定的DOM元素了；
    // 2、顺序是乱了，如果少，会是倒序的；
    // 3、可以在一个元素上绑定同一个方法；（正常一个方法是不能重复绑定的）

**DOM2事件绑定的兼容性总结，IE是指低版本IE**：


1. 方法不同,一个是（addEventListener/removeEventListener），IE是（attachEvent/detachEvent）
2. IE里被绑定上的方法，this关键字指向window；
3. IE里执行的顺序是混乱的 
4. IE里的方法是可以被重复绑定的；
5. 事件对象本身，IE是全局的时间对象window.event；其他的是系统自动传的
6. 事件源：标准浏览器是e.target；IE是srcElement;
7. 阻止事件的默认行为：标准浏览器是e.preventDefault(),IE是returnValue=false；
8. 在所有浏览器中，如果用DOM0的方式来绑定，方法里面用return false也可以阻止默认行为的；这个是可以阻止DOM0的，如果是DOM2级的就不可以了
8. 阻止事件的传播：标准浏览器是e.stopPropagation();IE是cancelBubble=true;
9. e.pageX,e.pageY，这两个属性IE不支持；
10. IE不支持捕获，只能支持冒泡；所以标准浏览器绑定和解绑第三个参数是false，第三个参数不写，也是没问题的；

低版本的IE事件，如果超过9个就会混乱了；9个内是倒序的；

**事件的兼容问题都在run里解决好；**以后直接传个e即可；使用也都用标准浏览器的语法；
>     /*事件兼容性问题，都在run上解决好*/
    function run(e){
        e=e||window.event;
        if(!e.target){
            e.target= e.srcElement;
            e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
            e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
            e.stopPropagation=function(){e.cancelBubble=true;}//阻止事件传播;
            e.preventDefault=function(){e.returnValue=false;}//阻止事件默认行为;
        }
        /*上面是IE不支持的*/
        var a=this["aEvent"+e.type];
        for(var i=0;i< a.length;){
            /*下面是防止数组塌陷的*/
            if(typeof a[i]=="function"){
                //a[i].call(this);//this指向当前被绑定元素；
                a[i].call(this,e);//this后面加e；就解决了e的兼容性问题；因为想this主体传了e；具体的函数就不需要再解决e的兼容了；
                i++;
            }else{
                /*如果是空的，删掉；不删也是可以的*/
                a.splice(i,1);
            }
        }
    }