# JS中的常见算法

- 冒泡排序
- 快速排序
- 插入排序
- 数组去重复
- 从一个长度10万的数组中，随机取出100条数据（取出的数据不能重复）;


# 冒泡排序

基本思想：就是把数据像泡泡一样网上冒，让体积最轻的泡泡浮在最上面，然后按照重量往下依次排列；

冒泡排序的操作原理：

        var ary=[11,2,31,45,6,78,37,33,21];

用循环的方式，循环数组的长度，然后比较数组的数据

- 第一次循环把**ary**的最大值放在ary[ary.length-1]的位置；
    - ary[0]>ary[1],如果是true，说明第一项比第二项大，交换ary[0]和ary[1]的位置；如果是false则不改变位置；
    - ary[1]>ary[2],如果是true，说明第二项比第三项大，交换ary[1]和ary[2]的位置；如果是false则不改变位置；（此时的ary[1]肯定比ary[0]大的，因为开始的时候已经把ary[0]和ary[1]比较了）
    - ……
    - ary[ary.length-2]>ary[ary.length-1];比较到这个时候，ary[ary.length-1]的位置肯定是最大的数据了；
- 第二次循环，把倒数第二大的数据，放在数组的ary[ary.length-2]位置;
    - 备注：第二次循环的时候，只需要比较到ary[ary.length-2]的位置就可以了，因为ary[ary.length-1]已经是最大值了，无需再次比较；
   
> 注意：交换位置的时候，需要一个中间变量来协助，假设让a和b进行数据交换； var temp=a;a=b;b=temp; 这样就可以把a和b的数据交换好了；


        var ary=[11,2,31,45,6,78,37,33,21];

        function sortAry(ary){
            var aryLen=ary.length;//获取数组的长度；有aryLen个数在排序；
            var temp=null;//临时变量，交换数据中用的
            for(var i= 0,iLen=aryLen-1;i<iLen;i++){//外层循环n-1次；
                for(var j= 0,jLen=aryLen-1-i;j<jLen;j++){//每次循环完，都能从剩下的数组中找出个最大的数组放在aryLen-1-i的位置；
                    if(ary[j]>ary[j+1]){
                        temp=ary[j];
                        ary[j]=ary[j+1];
                        ary[j+1]=temp;
                    }
                }
            }
            return ary;
        }

        var newAry=sortAry(ary);
        console.log(newAry);//[2, 6, 11, 21, 31, 33, 37, 45, 78]

> 避免无效循环的方法；

        var ary=[11,2,31,45,6,78,37,33,21];

        function sortAry(ary){
            var aryLen=ary.length;//获取数组的长度；有aryLen个数在排序；
            var temp=null;//临时变量，交换数据中用的
            var flag=false;//设置标志位，初始化为false
            for(var i= 0,iLen=aryLen-1;i<iLen;i++){//外层循环n-1次；
                for(var j= 0,jLen=aryLen-1-i;j<jLen;j++){//每次循环完，都能从剩下的数组中找出个最大的数组放在aryLen-1-i的位置；
                    if(ary[j]>ary[j+1]){
                        temp=ary[j];
                        ary[j]=ary[j+1];
                        ary[j+1]=temp;
                        flag=true;//如果交换好了，做个标记，避免无效的循环；
                    }
                }
                if(!!flag){//只要交换了位置，flag的值就重新设置为false了；
                    flag=false;
                }else{//如果没有交换，说明数组已经排好序了，可以结束循环了；
                    break;
                }
            }
            return ary;
        }

        var newAry=sortAry(ary);
        console.log(newAry);//[2, 6, 11, 21, 31, 33, 37, 45, 78]

# 快速排序；
