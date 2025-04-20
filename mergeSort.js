// //my solution

// function mergeSort(arr) {
//   let left = [];
//   let right = [];

//   const halfPoint = Math.floor(arr.length / 2);

//   for (let i = 0; i < arr.length; i++) {
//     if (i < halfPoint) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   if (left.length > 1) {
//     left = mergeSort(left);
//   }
//   if (right.length > 1) {
//     right = mergeSort(right);
//   }

//   let temp = [];
//   let continueLoop = true;

//   while (continueLoop) {
//     if (left.length < 1) {
//       if (right.length > 0) {
//         temp.push(right[0]);
//         right.unshift();
//         continueLoop = false;
//       }
//       continueLoop = false;
//     }
//     if (right.length < 1) {
//       if (left.length > 0) {
//         temp.push(left[0]);
//         left.unshift();
//         continueLoop = false;
//       }
//       continueLoop = false;
//     }

//     if (left[0] < right[0]) {
//       console.log("temp",left[0])

//       temp.push(left[0]);
//       left.unshift();
//     } else {
//       temp.push(right[0]);
//       right.unshift();
//     }
//     continueLoop = false;
//   }


  
//   return temp;
// }

// //mergeSort array into left and right
// //if the sub array has more than one item, keep mergeSortting
// //if it only contains one item, return the item
// //compare the first item of left array and right array
// //set the lesser one into the temp array, and delete it from the source
// //keep going until both arrays are empty
// //if both arrays are empty, return the sorted array

// const arr = [-6, 20, 8, -2, 4];
// mergeSort(arr);


//instructors solution
