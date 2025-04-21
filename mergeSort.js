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
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  //split the array in half if it has more than 2 elements
  const midPoint = Math.floor(arr.length/2)
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  //return the merge of the left and right
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
  //create a variable to store the merged result
  const result = []
  //run a loop when there are still items in both arrays
  while (left.length && right.length) {
    //check if the first element in left array is smaller than the one in the right array. If it is, push it to the result array
    //we use shift because it removes the first element,and returns the element removed
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      //if it is not, push the right one
      result.push(right.shift())
    }
  }

  //when the loop is complete, we spread the remainig elements in new array to be returned
  //the order is important because we sort from left to right

  return [...result,...left,...right]
}

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));


//Big O is O(n log n)
//we divide the input by half
//but also loop through all the content