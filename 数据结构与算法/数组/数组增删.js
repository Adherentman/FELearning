var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/**
 * push和pop可以用数组来模拟栈
 */
numbers.push(11);
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

numbers.push(12,13);
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

numbers.pop(13);
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

/**
 * 数值插入数组首位
 */
for(var i = numbers.length; i >= 0; i--){
    return numbers[i] = numbers[i-1];
}

numbers[0] = -1;
//[-1	0	1	2	3	4	5	6	7	8	9	10	11	12]

numbers.unshift(-2);
//[ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

/**
 * 要删除数组里最靠后的元素可以用pop
 * 删除数组首位的一个元素可以用以下代码
 */

 for(var i = 0 ; i < numbers.length; i++){
     return numbers[i] = numbers[i+1];
 }
 
 //删除首位还可用shift
 numbers.shift();
 //[ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

 /**
  * 通过splice可以指定位置/索引，就可以删除相应位置和数量的元素
  * 第一个参数为开始位置，第二个参数为元素的数量
  * array.splice(start) 
  * array.splice(start, deleteCount) 
  * array.splice(start, deleteCount, item1, item2, ...)
  */
 numbers.splice(5,3);
 //[ -1, 0, 1, 2, 3, 7, 8, 9, 10, 11, 12 ]

 numbers.splice(5, 0, 4, 5, 6);
 //[ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]