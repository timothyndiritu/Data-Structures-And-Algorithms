// //my solution

// function quickSort(arr) {
//   //pick a pivot(the last element);
//   let pivot = arr[arr.length - 1];

//   //loop through every number in the array, except the pivot
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     //if a number is larger, place it in a new array, called right array
//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       //if it is smaller, put it in another array called left array;
//       left.push(arr[i]);
//     }
//   }
//   //if left array is larger than 1 element, do a quick sort
//   if (left.length > 1) {
//     quickSort(left);
//   }
//   //if right array is larger than one element, do a quick sort
//   if (right.length > 1) {
//     quickSort(right);
//   }
//   //concatenate the result

//   return left.concat([pivot], right);
// }

// const arr = [-6, 20, 8, -2, 4];

// console.log(quickSort(arr));

//instructors solution
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [-6, 20, 8, -2, 4];
// console.log(quickSort(arr));

//with space constraints
//just chat GPT this...explaining is kind of hard
//think about it this way
//if the number is less than the pivot,send it further to the left
//you do this by using j, swapping i and j ends up bringing the bigger numbers closer to the pivot
// this is because elements at index j are usually bigger numbers, while those at i are smaller
//so swapping them brings the larger numbers to the right
//once you are at the end, you'll swap j with wherever your pivot is...as i said,j ends up being the biggest number
//youll find out that numbers to the right of the pivot will already be sorted

function quickSortSpaceConstraints(
  arr,
  startIndex = 0,
  stopIndex = arr.length - 1
) {
  if (startIndex < stopIndex) {
    let lastPivotPosition = partition(arr, startIndex, stopIndex);
    quickSortSpaceConstraints(arr, startIndex, lastPivotPosition - 1);
    quickSortSpaceConstraints(arr, lastPivotPosition + 1, stopIndex);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let j = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  [arr[j], arr[right]] = [arr[right], arr[j]];

  return j;
}
const arr = [ -2, 4, 8, 20,-6];
quickSortSpaceConstraints(arr);
console.log(arr)
