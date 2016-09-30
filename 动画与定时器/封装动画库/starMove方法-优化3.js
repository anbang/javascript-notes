function starMove(ele,jsonStr,duration,moveTypeNum,fnCallback){
    //多态：方法重载：JS如何实现方法重载。一个方法，可以有不同类型或个数的参数
    //方法重写：子类上的方法覆盖了父类上的方法
    var typeNum=moveType.jiansu4.starOut;
    if(typeof moveTypeNum =="number"){
        if(moveTypeNum===4){
            typeNum=moveType.jiansu4.starOut;
        }else if(moveTypeNum ===6){
            typeNum=moveType.jiansu4.starOut;
        }else if(moveTypeNum ===7 ){
            typeNum=moveType.jiansu7.starOut;
        }else if(moveTypeNum===8){
            typeNum=moveType.dabai.starOut;
        }else if(moveTypeNum===9){
            typeNum=moveType.xiaobai.starOut;
        }else if(moveTypeNum===10){
            typeNum=moveType.fantan.starOut;
        }
    }else if(typeof moveTypeNum=="object"){
        if(moveTypeNum instanceof Array){
            /*输入模式是["fantan","starInOut"]*/
            if(moveTypeNum.length==1){
                typeNum=moveType[moveTypeNum[0]];//moveTypeNum[0]是获取line方法
            }else if(moveTypeNum.length==2){
                typeNum=moveType[moveTypeNum[0]][moveTypeNum[1]]//moveType.jiansu1.starIn/out/inOut;
            }
        }
    }else if(typeof moveTypeNum=="function"){
        fnCallback=moveTypeNum;
    }

    var oBegin={};//不同方向的起始值；
    var oChange={};//不同方向的运动距离；
    var booleanNum=0;
    for(var attr in jsonStr){
        var begin=setCss(ele,attr);
        var target=jsonStr[attr];
        var change=target-begin;
        if(change){
            oBegin[attr]=begin;
            oChange[attr]=change;
            booleanNum++;
        }
    }
    if(booleanNum===0){
        if(typeof fnCallback=="function"){
            fnCallback.call(ele);
        }
        return;
    }else{
        var interval=13;
        var times=0;
        clearInterval(ele.timer);
        ele.timer=window.setInterval(move,interval);
        function move(){
            times+=interval;
            if(times>=duration){
                clearInterval(ele.timer);
                ele.timer=null;
                for(var attr in jsonStr){
                    setCss(ele,attr,jsonStr[attr]);
                }
                if(typeof fnCallback=="function"){
                    fnCallback.call(ele);
                }
            }else{
                for(var attr in oChange){
                    //动画效果在这里
                    var targetNumber=typeNum(times,oBegin[attr],oChange[attr],duration);
                    setCss(ele,attr,targetNumber);
                }
            }
        }
    }
};


//回调方法；
function toGreen(){
    setCss(this,"backgroundColor","green");
};

/*setCss*/
function setCss(curEle,attr,value) {//设置CSS属性值和获取CSS；如果三个参数就是设置，2个参数就是获取；att是attribute的缩写；
    if(typeof value==="undefined"){//如果有第三个参数，就是设置Css；如果没有就是获取Css；
        var reg = /^(?:margin|padding|border|float|position|display|background|backgroundColor)$/;
        var flag="getElementsByClassName" in document;
        var value = flag ? window.getComputedStyle(curEle, null)[attr] : curEle.currentStyle[attr];
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
};

/*数学计算*/
var moveType = {
    /*直线运动*///当前时间*变化量/持续时间+初始值
    line: function(t,b,c,d){ return c*t/d + b; },

    /*减速中最长用的是4、6、7*/
    jiansu1: {//二次方的缓动（t^2）；
        starIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        starOut: function(t,b,c,d){
            return -c *(t/=d)*(t-2) + b;
        },
        starInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    jiansu2: {//三次方的缓动（t^3）
        starIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        starOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        starInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    jiansu3: {//四次方的缓动（t^4）；
        starIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        starOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        starInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    jiansu4: {//5次方的缓动（t^5）；
        starIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        starOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        starInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    jiansu5: {//正弦曲线的缓动（sin(t)）
        starIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        starOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        starInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    jiansu6: {//指数曲线的缓动（2^t）；
        starIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        starOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        starInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    jiansu7: {//圆形曲线的缓动（sqrt(1-t^2)）；
        starIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        starOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        starInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    /*大摆动的效果，非常绚丽;比xiaobai好*/
    dabai: {//指数衰减的正弦曲线缓动；
        starIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        starOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        starInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    xiaobai: {//超过范围的三次方缓动（(s+1)*t^3 - s*t^2）；
        starIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        starOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        starInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    fantan: {//指数衰减的反弹缓动。
        starIn: function(t,b,c,d){
            return c - moveType.fantan.starOut(d-t, 0, c, d) + b;
        },
        starOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        starInOut: function(t,b,c,d){
            if (t < d/2) return moveType.fantan.starIn(t*2, 0, c, d) * .5 + b;
            else return moveType.fantan.starOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
};