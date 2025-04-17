//my solution

// function recursiveBinary(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   let midIdex = search(leftIndex, rightIndex);

//   while (leftIndex <= rightIndex) {
//     if (midIdex < 0) {
//       return midIdex;
//     }
//     if (target === arr[midIdex]) {
//       return leftIndex;
//     }
//     if (target < arr[midIdex]) {
//       rightIndex = midIdex - 1;
//       midIdex = search(leftIndex, rightIndex);
//     }
//     if (target > arr[midIdex]) {
//       leftIndex = midIdex + 1;
//       midIdex = search(leftIndex, rightIndex);
//     }
//   }

//   function search(leftIndex, rightIndex) {
//     let midIdex = Math.floor((leftIndex + rightIndex) / 2);
//     if (midIdex) {
//       return midIdex;
//     }

//     return -1;
//   }

//   return -1;
// }

//instructors solution

function recursiveBinary(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIdex = Math.floor((leftIndex + rightIndex) / 2);
  
  if (target === arr[midIdex]) {
    return midIdex;
  }

  if (target < arr[midIdex]) {
    return search(arr, target, leftIndex, midIdex - 1);
  } else {
    return search(arr, target, midIdex  + 1, rightIndex);
  }
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 10)); // 4 -> index of
console.log(recursiveBinary([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20)); // -1
