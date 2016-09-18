var Tool = function () {//构造函数模式；用的时候需要new一下；
    this.flag = "getElementsByClassName" in document;
    //getElementsByClassName 在IE678中是不存在的。用这个来判断是不是低版本的IE浏览器；
    //每次只需要判断this.flag是否存在就可以了；如果存在就是标准浏览器，如果不存在就是IE；
};
Tool.prototype = {//方法是定义在Tool的prototype上的；
    constructor: Tool,//重写prototype后，prototype的constructor已经不是原来的Tool了；需要手动给他强制写会到Tool上去；
    /*经常用到的函数*/
    getElementsByClassName: function (context,cName) {//获取元素的ClassName
        var context = context || document;
        var ary = [];
        if (this.flag) {
            return this.listToArray(context.getElementsByClassName(cName));
        }
        var allNode = context.getElementsByTagName("*");
        var reg = new RegExp("(?:^| +)" + cName + "(?: +|$)");
        for (var i = 0; i < allNode.length; i++) {
            var cur = allNode[i];
            if (reg.test(cur.className)) {
                ary.push(cur);
            }
        }
        return ary;
    },
    toJSON: function (jsonStr) {//将json字符串转化为json对象
        var jsonObj = null;
        try {
            jsonObj = JSON.parse(jsonStr);//如果支持 JSON.parse则直接使用 JSON.parse将JSON字符串转换为JSON对象。
        } catch (e) {
            jsonObj = eval("(" + jsonStr + ")");
        }
        return jsonObj;
    },
    isType: function (value,type) {//判断数据类型；
        var type = arguments[1] || "Object",
            reg = new RegExp("\\[object " + type + "\\]", "i");
        return reg.test({}.toString.call(value));//{}不可以是[]，因为[]就不是Object.prototype,数组也有toString方法；
    },
    listToArray: function (likeAry) {//类数组转化为数组；
        var ary = [];
        if (this.flag) {
            ary = [].slice.call(likeAry, 0);
        } else {
            for (var i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i]);
            }
        }
        return ary;
    },

    /***下面是设置DOM***/
    getEleChildren: function (parent,tagName) {//获取指定节点名的元素节点们；第二个参数如果不传，则返回obj下的所有子元素节点；
        var allNode = parent.childNodes,
            ary = [],
            reg = new RegExp("^" + tagName + "$", "i");
        for (var i = 0; i < allNode.length; i++) {
            var cur = allNode[i];
            if (cur.nodeType === 1) {
                if (tagName) {//tahName不可能为0，false之类的数；所以可以用if直接判断传进来的参数；
                    if (reg.test(cur.nodeName)) {
                        ary.push(cur);
                    }
                    continue;
                }
                ary.push(cur);
            }
        }
        return ary;
    },
    getFirst: function (curEle) {//获取第一个元素节点；
        var children = this.getEleChildren(curEle);
        return children.length > 0 ? children[0] : null;
    },
    getLast: function (curEle) {//获取最后一个元素节点；
        var children = this.getEleChildren(curEle);
        return children.length > 0 ? children[children.length - 1] : null;
    },
    getPre: function (curEle) {//上一个哥哥节点；
        if (this.flag) {
            return curEle.previousElementSibling;
        }
        var pre = curEle.previousSibling;
        while (pre && pre.nodeType !== 1) {
            pre = pre.previousSibling;
        }
        return pre;
    },
    getPres: function (curEle) {//获得所有哥哥们；
        /*            var ary = [],
         attr = this.flag ? "previousElementSibling" : "previousSibling";
         var pre = curEle[attr];
         while (pre) {
         if (pre.nodeType === 1) {
         ary.unshift(pre);
         }
         pre = pre[attr];
         }
         return ary;*/
        var ary = [],
            next = this.getPre(curEle);
        while (next) {
            ary.unshift(next);
            next = this.getPre(next);
        }
        return ary;
    },
    getNext: function (curEle) {//下一个弟弟节点，第一个弟弟节点；
        if (this.flag) {
            return curEle.nextElementSibling;
        }
        var next = curEle.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    },
    getNexts: function (curEle) {//获取所有的弟弟们；
        var ary = [],
            next = this.getNext(curEle);
        while (next) {
            ary.push(next);
            next = this.getNext(next);
        }
        return ary;
    },
    getSibling: function (curEle) {//获取上一个哥哥和下一个弟弟；
        var ary = [],
            pre = this.getPre(curEle),
            next = this.getNext(curEle);
        pre ? ary.push(pre) : void 0;
        next ? ary.push(next) : void 0;
        return ary;
    },
    getSiblings: function (curEle) {//获取所有的兄弟们（除了自己）
        var pres = this.getPres(curEle),
            nexts = this.getNexts(curEle);
        return pres.concat(nexts);
    },
    getIndex: function (curEle) {//获取元素的索引值；
        return this.getPres(curEle).length;
    },
    insertAfter: function (newEle,oldEle) {//在目标元素oldEle后面插入新元素newEle；如果没有传指定元素，则直接添加在后面
        var next = this.getNext(oldEle),
            par = oldEle.parentNode;
        next ? par.insertBefore(newEle, next) : par.appendChild(newEle);
    },
    prependChild: function (parentEle,curEle) {//把一个元素节点添加为parentEle的第一个子节点；
        var first = this.getFirst(parentEle);//获取par中的第一个元素节点；
        first ? parentEle.insertBefore(curEle, first) : parentEle.appendChild(curEle);
    },
    innerHTML: function (curEle,str) {//获取元素的innerHTML；
        var str= str || "";
        if (!str) {
            return curEle.innerHTML;
        }
        curEle.innerHTML = str;
    },
    text:function (ele,str){//处理innerText和textContent的兼容性；传一个参数是获取；2个参数是设置；
        if(ele&&ele.nodeType&&ele.nodeType==1){
            if(str===undefined){//如果str没有传，那么方法是获取元素的文本内容；
                if(typeof ele.textContent=='string')
                    return ele.textContent;
                else
                    return ele.innerText;

            }else{//如果传了，就是添加文本内容
                if(str===null){
                    alert('text方法参数错误,str为null！');
                    return ;
                }else if(typeof str=='string'){
                    if(typeof ele.textContent=='string') {
                        ele.textContent += str;
                    }else{
                        ele.innerText+=str;
                    }
                }else{
                    alert('text方法的参数错误！')
                }
            }
        }else{
            alert('text方法的ele参数错误！')
        }
    },

    /***下面是设置CSS***/
    setCss:function (curEle,attr,value) {//设置CSS属性值和获取CSS；如果三个参数就是设置，2个参数就是获取；att是attribute的缩写；
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
    },
    setGroupCss: function (curEle,cssObj) {//给元素设置一组属性；cssObj是一个对象类型；
        for (var key in cssObj) {
            this.setCss(curEle, key, cssObj[key]);
        }
    },
    offset: function (curEle) {//获取偏移量；
        var  par = curEle.offsetParent,
            left = curEle.offsetLeft,
            top = curEle.offsetTop;
        while (par) {
            left += par.offsetLeft;
            top += par.offsetTop;
            if (navigator.userAgent.indexOf("MSIE 8.0") <= -1) {
                left += par.clientLeft;
                top += par.clientTop;
            }
            par = par.offsetParent;
        }
        return {left: left, top: top};
    },
    hasClassName: function (curEle,cName) {//判断是否有某个className；
        var reg = new RegExp("(?:^| +)" + cName + "(?: +|$)");
        return reg.test(curEle.className);
    },
    addClassName: function (curEle,cName) {//增加某个className；
        if (!this.hasClassName(curEle,cName)) {
            curEle.className += (" " + cName);
        }
    },
    removeClassName: function (curEle,cName) {//移除类样式的方法；
        var reg = new RegExp("(?:^| +)" + cName + "(?: +|$)", "g");
        if (this.hasClassName(curEle,cName)) {
            curEle.className = curEle.className.replace(reg, " ");
        }
    }
};
~function () {//在DOM库上增加方法，同时不影响原来的方法；在类的原型上增加方法；
    var strPro = String.prototype,
        aryPro = Array.prototype,
        objPro = Object.prototype;
    aryPro.removeRepeat = function () {//数组去重；
        var obj = {};
        for (var i = 0; i < this.length; i++) {
            var cur = this[i];
            if (obj[cur] == cur) {
                this.splice(i, 1);
                i--;
                continue;
            }
            obj[cur] = cur;
        }
        obj = null;
        return this;
    };
    aryPro.forEachPro = function (fn,context) {//forEach兼容性处理；
        var context = context || window;
        if (this.forEach) {
            this.forEach(fn, context);
            return this;
        }
        for (var i = 0; i < this.length; i++) {
            fn.call(context, this[i], i, this);
        }
        return this;
    };
    objPro.myHasPubProperty = function (attr) {//是否为公有属性；
        return (attr in this) && !this.hasOwnProperty(attr);
    };
    strPro.myTrim = function () {//去除首尾空格；
        return this.replace(/(^\s*|\s*$)/g, "");
    };
    strPro.mySub = function (len,isD) {//是不是有效的
        var len = len || 10,
            isD = isD || false,
            str = "",
            n = 0;
        for (var i = 0; i < this.length; i++) {
            var s = this.charAt(i);
            /[\u4e00-\u9fa5]/.test(s) ? n += 2 : n++;
            if (n > len) {
                isD ? str += "..." : void 0;
                break;
            }
            str += s;
        }
        return str;
    };
    strPro.myFormatTime = function (format) {//时间格式化；
        var reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g,
            ary = [];
        this.replace(reg, function () {
            ary = ([].slice.call(arguments)).slice(1, 7);
        });
        var format = format || "{0}年{1}月{2}日 {3}:{4}:{5}";
        return format.replace(/{(\d+)}/g, function () {
            var val = ary[arguments[1]];
            return val.length === 1 ? "0" + val : val;
        });
    };
    strPro.myQueryURLParameter = function () {//是否是有效URL
        var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });
        return obj;
    }
}();