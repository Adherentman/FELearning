/**
 * 
 * @param {array} 传入一个需要排序的数组 
 */
function quicksort(arr){
  if (arr.length <= 1) { return arr; }
  let pivotIndex = arr.length / 2 >> 0;
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([pivot], quicksort(right));
}