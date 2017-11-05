function compact(array) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
/** 
 * 给index赋值-1,数组索引
 * 如果数组的长度为null，那么就赋值为0，否则赋值数组长度。
 * resIndex作为新数组的索引
 * 创建一个存放数组的变量。
*/

while (++index < length) {
    var value = array[index];
    if(value) {
        result[resIndex++] = value;
    }
  }
    return result;
};
/**
 * 当index递增后的结果小于数组长度的时候就一直循环，
 * 如果是真值，就将他传入到结果数组里中，并且让新数组长度 + 1，
 * 最后返回结果数组。
 */


 compact([1, false, 2, '', 3]);
 //[1, 2, 3]