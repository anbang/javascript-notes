function Parent(name,age,job){
    if(this instanceof Parent){
        console.log("Chilren用法 - 正确");
        this.name=name;
        this.age=age;
        this.job=job;
    }else{
        console.log("Chilren用法 - 不正确");
        return new Parent(name,age,job);
    }
}
function Chilren(parentName){
    Parent.call(this,"child","1","null");
    this.name=parentName;
}
Chilren.prototype = new Parent();//【加上这一行代码，让Chilren的实例可以指到Chilren即可】
var target=new Chilren("ooooo");
console.log(target);//Chilren {name: "ooooo", age: "1", job: "null"}
console.log(target.age);//1