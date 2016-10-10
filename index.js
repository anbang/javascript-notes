/*
//function curry(fn){
function bind(fn,context){
    //var args=Array.prototype.slice.call(arguments,1);
    var args=Array.prototype.slice.call(arguments,2);
    return function (){
        var innerArgs=Array.prototype.slice.call(arguments);
        var finnalArgs=args.concat(innerArgs);
        console.log("args->"+args+"  innerArgs->"+innerArgs+"   finnalArgs->"+finnalArgs);
        //return fn.apply(null,finnalArgs);
        return fn.apply(context,finnalArgs);
    }
}

var handler = {
    message: "Event handled",
    handleClick: function(name, event){
        alert(this.message + ":"+ name + ":"+ event.type);
    }
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "my-btn"));*/
