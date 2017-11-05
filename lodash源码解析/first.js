/**
 * 
 * @param {Array} 数组
 * @return {*} 返回数组的一个数值。
 * 传入一个数组，去判断数组是否有长度， 有就取数组第0项，没有就返回undefined。
 */
function first(array) {
    return (array && array.length) ? array[0] : undefined;
};

first([]);
// => undefined

first([1, 2, 3]);
//=> 1