//基本类型
var a=2;
var b=a;
a.aaa="adjklasjdk";
console.log(a.aaa);
console.log(a,b);//2 2
b=4;
console.log(a,b);//2 4


//引用数据类型；
var oDemo1={
    name:"zhu",
    say:"hello"
};
var oDemo2=oDemo1;
console.log(oDemo1);//{name: "zhu", say: "hello"}
console.log(oDemo2);//{name: "zhu", say: "hello"}

oDemo2.name="changeName";//这个时候修改，其实已经把oDemo1的数据给修改了
console.log(oDemo1);//{name: "changeName", say: "hello"}
console.log(oDemo2);//{name: "changeName", say: "hello"}

oDemo1.hahahahahah="ddddddd";
console.log(oDemo1);//{name: "changeName", say: "hello", hahahahahah: "ddddddd"}
console.log(oDemo2);//{name: "changeName", say: "hello", hahahahahah: "ddddddd"}


var sy=Symbol();//sy是Symbol的一个实例；
console.log(sy.__proto__);
sy.aaa="hahah";
console.log(sy.aaa);


//
var oDemo3={
    name:"zhu",
    say:"hello"
};
var oDemo4=oDemo3;//AAA
console.log("---------------------");
console.log(oDemo3);
console.log(oDemo4);
oDemo4={name:"changeName"};//把{name:"changeName"} 对应的堆内存地址赋值给oDemo4 BBB
console.log(oDemo3);//{name: "zhu", say: "hello"}
console.log(oDemo4);//{name: "changeName"}

var sourcesDate={
    date:[
        {
            pro:"浙江省",
            city:"杭州市",
            cityCode:"330001",
            total:"13.05"
        },
        {
            pro:"浙江省",
            city:"宁波市",
            cityCode:"330002",
            total:"78.05"
        },
        {
            pro:"浙江省",
            city:"温州市",
            cityCode:"330003",
            total:"66.05"
        }
    ]
};
var beauDate=sourcesDate;
//$.exetend({},sourcesDate);