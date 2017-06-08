### 定时器
window上的方法；共四个
- window.setTimeout     单次定时器
- window.setInterval    间隔定时器
- window.clearTimeout   清除单次定时器
- window.clearInterval  清除间隔定时器

因为浏览器上最大的就是window；所以window不写的，直接写 setTimeout即可；

##### setTimeout

setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式（间隔的单位上毫秒，1s=1000ms）。

    var oBtn=document.getElementById("btn1");
    oBtn.onclick=function () {
        testClick("2222")
    };
    function testClick(arg) {
        setTimeout(function () {
            console.log("hello:"+arg)
        },2000);
    }

注意：setTimeout() 只执行 function 内的代码 一次。如果要多次调用，请使用 setInterval() 或者 在function内 自身再次调用 setTimeout()。

