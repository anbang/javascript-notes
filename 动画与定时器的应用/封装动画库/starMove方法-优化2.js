function startMove(ele, json, fnEnd) {//json是一个包含样式的JSON格式字符串,也可以是对象格式；
    var MAX=18;//如果是匀速运动，可以通过这个数控制匀速；如果是变速运动，则不需要这一行；
    clearInterval(ele.timer);
    ele.timer=setInterval(function (){
        var booleanTarget=true;
        for(var name in json) {//枚举JSON里面的属性和目标值；
            var iTarget=json[name];//目标值；
            if(name=='opacity') {//透明度因为要写兼容性处理,2种写法，所以opacity需要X100；
                var cur=Math.round(parseFloat(setCss(ele, name))*100);
            } else if(name=='background'){
                var cur=json[name];
            } else {
                var cur=parseInt(setCss(ele, name));//对象的初始值；
            }
            var speed=(iTarget-cur)/5;//速度=(目标值-初始值)/一个数，属于减速运动；
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//减速运动的，速度的取整；
            if(Math.abs(speed)>MAX)speed=speed>0?MAX:-MAX;//如果是匀速，可以通过这个来控制速度；和上面的speed只能取一个计算；

            if(name=='opacity') {//如果输入透明度，需要为80这种的，不能是0.8
                ele.style.filter='alpha(opacity:'+(cur+speed)+')';
                ele.style.opacity=(cur+speed)/100;
            }else if(name=='background'){
                ele.style[name]=cur;
            } else {
                ele.style[name]=cur+speed+'px';
            }
            if(cur!=iTarget) {
                booleanTarget=false;
            }
        }
        if(booleanTarget) {
            clearInterval(ele.timer);
            if(typeof fnEnd==="function") {
                fnEnd();
            }
        }
    }, 20);
};

function setCss(curEle,attr,value) {//设置CSS属性值和获取CSS；如果三个参数就是设置，2个参数就是获取；att是attribute的缩写；
    if(typeof value==="undefined"){//如果有第三个参数，就是设置Css；如果没有就是获取Css；
        var reg = /^(?:margin|padding|border|float|position|display|background|backgroundColor)$/;
        var value = this.flag ? window.getComputedStyle(curEle, null)[attr] : curEle.currentStyle[attr];
        return !reg.test(attr) ? parseFloat(value) : value;
    } else{
        switch (attr) {
            case "opacity":
                curEle["style"][attr] = value;
                curEle["style"]["filter"] = "alpha(opacity=" + (value * 100) + ")";
                break;
            case "float":
                curEle["style"].cssFloat = value;
                curEle["style"].styleFloat = value;
                break;
            case "backgroundColor":
                curEle["style"][attr] = value;
                break;
            case "zIndex":
                curEle["style"][attr] = value;
                break;
            default:
                curEle["style"][attr] = !isNaN(value) ? value += "px" : value;
        }
    }
}