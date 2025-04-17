//my solution terribly failed, because i couldn't stop the while loop

//instructors solution

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2); // if the mid point is a decimal, return the lower full number

    //check if the midIndex number is the target
    if (target === arr[midIndex]) {
      return midIndex;
    }
    //discard the right half if the target is less than our midIndex
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    }
    //discard the left side if the target is more than our midIndex
    if (target > arr[midIndex]) {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4 -> index of
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
