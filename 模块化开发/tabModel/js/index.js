var t=new Tool();
var tabHeads=document.getElementById("tabHeads"),
    oLis= tabHeads.getElementsByTagName("li");
for(var i= 0,len=oLis.length;i<len;i++){
    oLis[i].onmouseover=tabChange;
}
var tabHeads2=document.getElementById("tabHeads2"),
    oLis2= tabHeads2.getElementsByTagName("li");
for(var j= 0,len2=oLis2.length;j<len2;j++){
    oLis2[j].onmouseover=tabChange;
}
var tabHeads3=document.getElementById("tabHeads3"),
    oLis3= tabHeads3.getElementsByTagName("li");
for(var j= 0,len3=oLis3.length;j<len3;j++){
    oLis3[j].onmouseover=tabChange;
}
function tabChange(){
    var n=t.getIndex(this);//获取当前元素的索引号；

    var siblings= t.getSiblings(this);//获取当前元素的兄弟们；
    for(var i= 0,len=siblings.length;i<len;i++){
        t.removeClassName(siblings[i],"selectTabHead");//清除当前选中tabHead兄弟们的selectTabHead属性；
    };

    var parent=this.parentNode;//获取当前元素的父级节点；
    var next=t.getNext(parent);//获取当前元素父级节点的下一个兄弟节点；
    var contents=t.getEleChildren(next,"div");//获取当前元素父节点下的所有元素子节点；
    for(var i= 0,len=contents.length;i<len;i++){
        t.removeClassName(contents[i],"selectTabContent");//删除节点的selectTabContent属性；
    }
    t.addClassName(this,"selectTabHead");//被点击元素添加tabSelectHead的class字符串；
    t.addClassName(contents[n],"selectTabContent");
    console.log(n);
}