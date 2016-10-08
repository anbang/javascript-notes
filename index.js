var JSONStr = '{"title": "标题","authors": ["one","two","rhree"],"edition": 3,"year": 2016,"releaseDate": "2016,10,08 12:59:01"}';
var JSONObj1 = JSON.parse(JSONStr);
console.log(JSONObj1);
console.log(typeof JSONObj1);//object

var JSONObj2 = JSON.parse(JSONStr,function(key,value){
    if(key === "releaseDate"){
        return new Date(value);
    }else{
        return value;
    }
});
console.log(JSONObj2);
console.log(typeof JSONObj2);//object

console.log(JSONObj2.releaseDate.getFullYear()+" - "+JSONObj2.releaseDate.getMinutes());//2016 - 59

