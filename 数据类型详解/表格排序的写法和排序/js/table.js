var oTab=document.getElementById("tab");
var oBody=oTab.tBodies[0];
var oRows=oBody.rows;

var tables={
    /*下面是一个封装函数，使表格变色的*/
    changeColor:function () {
        for (var i = 0; i < oRows.length; i++) {
            var oRow = oRows[i];
            i % 2 == 0 ? oRow.className = "c" : oRow.className="";

            oRow.oldClass = oRow.className;
            oRow.onmouseover = function () {
                this.className = "cy";
            };
            oRow.onmouseout = function () {
                this.className = this.oldClass;
            }
        }
    },
    /*下面是表格引入json的*/
    show:function () {
        var str = "";
        if (jsonData && jsonData.length > 0) {
            for (var i = 0; i < jsonData.length; i++) {
                var cur = jsonData[i];
                str += "<tr>";
                str += "<td><input type='checkbox' name='tabInput'/></td>";
                for (var key in cur) {
                    str += "<td>" + cur[key] + "</td>";
                }
                str += "</tr>";
            }
        }
        oBody.innerHTML = str;
        tables.changeColor();
    },

};
tables.show();
tables.changeColor();

/*表格排序*/
function sortRows(n) {
    var oRows = oBody.rows;
    var oRowsAry = tools.likeToArray(oRows);
    //给所有行对应的数组进行排序
    oRowsAry.sort(function (a, b) {
        var as = a.cells[n].innerHTML;
        var bs = b.cells[n].innerHTML;
        if(isNaN(as)){
            return as.localeCompare(bs);
        }else{
            return as - bs;
        }
    });
    //实现升降序处理
    if (this.flag === "asc") {
        oRowsAry.reverse();
        this.flag = "desc";
    } else {
        this.flag = "asc";
    }
    //按照最新的顺序，把我们的每一行重新的添加到页面中
    var frg = document.createDocumentFragment();
    for (var i = 0; i < oRowsAry.length; i++) {
        frg.appendChild(oRowsAry[i]);
    }
    oBody.appendChild(frg);
    tables.changeColor();
}

/*oName.onclick = function () {
 sortRows.call(this, 1);
 *//*    alert("这是一个彩蛋！你真幸运！发触发了这个秘密！可凭此页面截图，到附近黄金店免费领取300克的项链一条！领取方式：拿起就跑，越快越好。 领取后还可以赢得看守所七天食宿全包超值游， 还送精美炫酷手铐脚链一条，时尚囚衣套装，警车接送等， 领的越多惊喜越多， 前十名还可享受免费剃头, 前一百名还可与警犬嬉戏， 来宾均赠棍棒按摩，电击去死皮美容保健套装， 还等什么，赶快行动吧 ！");*//*
 };
 //tools.css-js.com 在线压缩代码；
 //开始打算给每个innerHTML加onclick事件的，但是发现用循环来做，会更加的简单；下面是废弃代码
 var oScore = document.getElementById("score");
 var oAge = document.getElementById("age");
 var oName=document.getElementById("name");
 var oPhone=document.getElementById("phone");
 var oMail=document.getElementById("mail");
 */
var oThs=document.getElementsByTagName("th");
for(var i=0;i<oThs.length;i++){
    oThs[i].zhu = i;
    oThs[i].onclick=function(){
        sortRows.call(this,this.zhu);
    }
}

//选中效果；
var oChk = document.getElementsByTagName("input")[0];
selectAll(0);
oChk.onclick = function () {
    this.checked ? selectAll(1) : selectAll(0);
};
function selectAll(flag) {
    var oChk = document.getElementsByTagName("input");
    for (var i = 1; i < oChk.length; i++) {
        oChk[i].onclick = function () {
            !this.checked ? oChk[0].checked = "" : void 0;
            var tmpFlag = true;
            for(var i=1; i<oChk.length; i++){
                if(!oChk[i].checked){
                    tmpFlag = false;
                    break;
                }
            }
            if(tmpFlag){
                oChk[0].checked = "checked";
            }
        };
        flag === 0 ? oChk[i].checked = "" : oChk[i].checked = "checked";
    }
}
