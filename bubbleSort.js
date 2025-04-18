//my solution

// function bubbleSort(arr) {
//   //loop through array
//   //check the items adjuscent to each other... if one is larger, swap
//   //check if any swap occurred, if it did, loop through again

//   let swapOccurred = true;
//   while (swapOccurred === true) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i + 1] < arr[i]) {
//         let savedLeftValue = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = savedLeftValue;
//         swapOccurred = true;
//       } else {
//         swapOccurred = false;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([-6, 20, 8, -2, 4]));

// instructors solution

function bubbleSort(nums) {
  let swapped;
  //use a do while, because we want to run this code at least once before we check for the condition
  do {
    swapped = false;
    //we check until the second last element, because this loop compares the now item,to the next, and if we checked for the last, it will be comparing to an object outside the array
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped === true);

  //we wont return anything, because were sorting within the array
}

const arr = [8, 20, - 2, 4, -6];
bubbleSort(arr);
console.log(arr);

//Big O is = O(n ^ 2)
