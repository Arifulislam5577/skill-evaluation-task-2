function leftRotate(arr, number) {
  let newArr = [];
  for (let i = number; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < number; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 4));
