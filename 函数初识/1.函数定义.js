//function语句的定义方法
function test1(arg1,arg2){
    console.log("function语句的定义方法:",arg1+arg2);
}

//函数直接量的定义方法
var test2 = function(arg1,arg2){
    console.log("函数直接量的定义方法:",arg1+arg2);
};
var utility={
    init:function () {
        console.log("执行")
    }
};

//构造函数的定义方法
var test3 = new Function("arg1","arg2","console.log('构造函数的定义方法:',arg1+arg2)");