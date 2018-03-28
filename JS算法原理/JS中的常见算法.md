##### JS中的常见算法
- 插入排序
- 冒泡排序
- 快速排序

##### 常见操作数组的

- 数组去重复
- 从一个长度10万的数组中，随机取出100条数据（取出的数据不能重复）;

##### JS中的常见算法

----------


# 插入排序

插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

**操作步骤**：首先选取数组的第一项即ary[0]，我们可以认为这个数是已经安排好序的，再取ary[1]项插入到已经排好序的元素中，此时只有ary[0]，我们比较ary[0]和ary[1]；大于ary[0]就放在后面，小于就插到ary[0]前面；要插入的元素依次为ary[1]至ary[ary.leng-1]项；插入到排序好的数组中的时候，插入每一项都需要从后面往前面遍历已经排序好的元素；

**如果排序好的元素比插入的元素大，则把该元素往后挪一位，知道已经排序的元素小于等于要插入的元素（或者已经遍历完已经排好序的数组项），则把要插入的元素放在该位置+1的索引位置中（反向排的时候，需要放在数组的第0个位置）**，对每个插入的元素都执行上面的操作，最终数组就是排序好的；

![](http://i.imgur.com/ACBXwns.gif)

有BUG的写法；

        var ary=[11,2,31,45,6,78,37,33,21];

        function insertSort(ary){
            var temp;//定义一个临时变量，保存要插入的值；
            for(var i= 1,len=ary.length;i<len;i++){
                if(ary[i]<ary[i-1]){
                    temp=ary[i];
                    ary[i]=ary[i-1];
                    ary[i-1]=temp;
                }
            }
            return ary;
        }
        var newAry=insertSort(ary);
        console.log(newAry);//[2, 11, 31, 6, 45, 37, 33, 21, 78]

因为只把小的数往前移动了一次；这里需要用到while循环，把6移动2后面；


        var ary=[11,2,31,45,6,78,37,33,21];

        function insertSort(ary){
            var temp;//定义一个临时变量，保存要插入的值；
            for(var i= 1,len=ary.length;i<len;i++){
                if(ary[i]<ary[i-1]){
                    temp=ary[i];//需要插入的值；
                    var pIndex=i-1;//需要插入值的前一个索引；
                    while(temp<ary[pIndex]&&pIndex>=0){
                        ary[pIndex+1]=ary[pIndex];//相当于ary[i]=ary[i-1];
                        ary[pIndex]=temp;//相当于ary[i-1]=temp;完成一波交换；
                        pIndex--;//准备下一波交换；
                    }
                }
            }
            return ary;
        }
        var newAry=insertSort(ary);
        console.log(newAry);//[2, 6, 11, 21, 31, 33, 37, 45, 78]

# 冒泡排序

**基本思想**：就是把数据像泡泡一样网上冒，让体积最轻的泡泡浮在最上面，然后按照重量往下依次排列；

**冒泡排序的操作原理**：

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


冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

![](http://i.imgur.com/sSwJFV2.gif)

算法步骤：

- 1）比较相邻的元素。如果第一个比第二个大，就交换他们两个。
- 2）对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
- 3）针对所有的元素重复以上的步骤，除了最后一个。
- 4）持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


# 快速排序；

**基本思想**：首先从数组ary选取一个基准点（通常我们取中间项作为基准点），然后遍历数组，把小于基准项放到基准点左边集合，把大于基准项放在基准点右边集合；然后对左边和右边两个集合分别再重复前面的操作；（直到每个集合就剩下一个元素的时候），其实就是一个**递归的思想**；

![](http://i.imgur.com/dERn9JJ.gif)

**操作步骤**：

        var ary=[11,2,31,45,6,78,37,33,21];

依旧拿上边这个数组做例子，，我们确定一个基准点，

        var ary=[11,2,31,45,6,78,37,33,21];
        var pivot=ary[Math.floor(ary.length/2)];
        console.log(pivot);//6

然后我们循环数据中的剩余项，把小于6的放在数组left中，把大于等于56的数组项放在数组right中，第一轮操作结束后left=[2],right=[11,31,45,78,37,33,21]

然后对left重复以上的操作，直到left和right仅剩一项或者空时候结束，最终返回left+pivot+right;

        var ary=[11,2,31,45,6,78,37,33,21];

        function quickSort(ary){
            var aryLen=ary.length;//获取ary的长度；
            if(aryLen<=1){//如果ary小于等于1的长度，就直接返回了;这一步非常重要，是判断是否循环完的标志；
                return ary;
            }
            var pINdex=Math.floor(ary.length/2);//基准项的所引值
            var pivot=ary.splice(pINdex,1);//删除基准项，并把基准项赋值给pivot；
            var left=[],right=[];
            for(var i= 0,len=ary.length;i<len;i++){
                if(ary[i]<pivot[0]){
                    left.push(ary[i]);
                }else{
                    right.push(ary[i])
                }
            }
            return quickSort(left).concat(pivot,quickSort(right));
        }
        var newAry=quickSort(ary);
        console.log(newAry);//[2, 6, 11, 21, 31, 33, 37, 45, 78]


##### 常见操作数组的

----------

# 数组去重；

-  **第一种方法**：每一次拿出数组中的当前项和后面的所有项进行比较，如果相同的话，删除即可；

        var ary=[1,2,34,56,6,7,45,3,2,2,12,4,9,8,6,7,4];
        function deleteRepeat(ary){
            for(var i= 0,len=ary.length-1;i<len;i++){//比较length-1次；
                var temp=ary[i];
                for(var j=i+1;j<ary.length;j++){
                    if(temp==ary[j]){
                        ary.splice(j,1);
                        j--;//删除以后需要把j重置下，避免数组塌陷；
                    }
                }
            }
            return ary;
        }
        var newAry=deleteRepeat(ary);
        console.log(newAry);

> 这种处理方法，处理少量数据的时候没有问题的，但是做很多数组的时候，性能就是一个很大的问题了，双重循环毕竟还是有优化的空间的，通常用第二种方法；

**第二种方法**：利用对象的属性名和属性值不能重复的原理，把数组中每一项的值当作对象的属性名属性值进行储存，在每一次储存之前进行判断，如果对象中已经存在这一项，我们就删除数组中这项，不存在我们就把这一项储存到我们的新的对象中，（注意对象在这里只是一个临时储存的作用），在处理完成后最好置为null；养成好习惯 ；

        var ary=[1,2,34,56,6,7,45,3,2,2,12,4,9,8,6,7,4];
        function deleteRepeat(ary){
            var obj={};
            for(var i= 0,len=ary.length;i<len;i++){
                var temp=ary[i];
                if(obj[temp]==temp&&temp!=undefined){
                    ary.splice(i,1);
                    i--;
                    continue;
                }
                obj[temp]=temp;
            }
            obj=null;
            return ary;
        }
        var newAry=deleteRepeat(ary);
        console.log(newAry);

# 从一个长度10万的数组中，随机取出100条数据（取出的数据不能重复）;

原理：随机获取100个索引，每一次获取的时候，都把对应的项获取，为了避免数组中的项重复，每获取一个就把原有数组中的这一项删除；

为了方便掩饰从20个里取5个随机数；

第一种比较耗性能的写法；

        var ary=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        function selectOption(ary,optionNumber){
            var targetAry=[];
            if(!optionNumber){
                console.log("请指定需要删选的数量!");
            }
            for(var i=0;i<optionNumber;i++){
                var ran=Math.round(Math.random()*(ary.length-1));//获取0-数组最大索引的一个随机数；
                targetAry.push(ary[ran]);//按照获取的随机索引，把对应的值取出来，放到新书组中；
                ary.splice(ran,1);//数组中实现删除的时候比较耗性能，为了牵扯到数组长度的改变，数组被删除的项，后面所有数据都前进一位；
            }
            return targetAry;
        }
        var newAry=selectOption(ary,2);
        console.log(newAry);

> 确定在代码后面已经说明，这种的比较耗性能；

        var ary=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        function selectOption(ary,optionNumber){
            var targetAry=[];
            if(!optionNumber){
                console.log("请指定需要删选的数量!");
            }
            for(var i=0;i<optionNumber;i++){
                var ran=Math.round(Math.random()*(ary.length-1));//获取0-数组最大索引的一个随机数；
                targetAry.push(ary[ran]);//按照获取的随机索引，把对应的值取出来，放到新书组中；
                ary[ran]=ary[ary.length-1];//把数组最后一项放到当前要删除索引的这一项；
                ary.length=ary.length-1;//删除最后一项；
            }
            return targetAry;
        }
        var newAry=selectOption(ary,10);
        console.log(newAry);

> 这种的写法，是操作数组的常用处理方式；借助数组length可修改的性能；



