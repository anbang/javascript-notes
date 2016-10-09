//console.log(createXHR.toString());//这么写会报错
var createXHR=(function (){
    if(typeof XMLHttpRequest != 'undefined'){
        /*return new XMLHttpRequest();*/
        return function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject != "undefined"){
        return function(){
            if (typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                for (var i=0,len=versions.length; i < len; i++){
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex){
                        //跳过
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    }else{
        return function(){
            throw new Error("浏览器不支持XHR")
        };
    }
})();
console.log(createXHR.toString());//createXHR已经是改写后的createXHR了

//执行后,createXHR
createXHR();

console.log(createXHR.toString());//createXHR已经是改写后的createXHR了