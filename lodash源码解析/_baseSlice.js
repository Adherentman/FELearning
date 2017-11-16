function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
/**
 * 非常的简单，这就是一个实现slice()的函数.
 * 首先让数组索引为-1，
 * 之后length为我们传入的数组长度
 */
    if(start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if(end < 0){
        end += length;
    }
    /**
     * 接下来我们去判断 start<0 和 end<0 的情况，去实现相应的赋值
     */
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    
    /**
     * 这里 length 的值是判断出来的。
     * >>> 这就是让数值变成一个32位无符号的整数。
     */

    var result = Array(length);
    while (++index < length ) {
        result[index] = array[index + start];
    }
    /**
     * 我们需要去创建一个新数组，然后一直去用 while 做判断并且给 result 附上最后的数组
     */
    return result;
    //返回即可 result！
}


// 用以下数据去调试这个函数[1, 2, 3, 4]   0 2 
// length = 4,
// 然后我们start既不小于0，end也不小于0.所以
// length = 2.
// start = 0

// result 是一个 length为2 的新数组
// ++index最多就是： 0, 1
// 最后得到的是数组[1, 2]