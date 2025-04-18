//instructors solution
function insertionSort(arr) {
  //we assume the first item is already sorted
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    //we loop through the sorted part, starting from the last element and compare to see if its larger than number to insert
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      //if the number at position j is larger than number to insert, push the number to the right
      arr[j + 1] = arr[j];
      j --;
    }
    //if the number is not bigger then number to insert, place number to insert to the  right of it
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);

//Big 0 - O(n^2)