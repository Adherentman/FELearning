function choicesort(arr){
  let len = arr.length, min, temp;
  for(let i = 0; i < len; i++){
    min = i;
    for(let j = i + 1; j < len; j++){
      if(arr[j] < arr[min]) min = j;
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr
}

console.log(choicesort([2,1,3,6]))