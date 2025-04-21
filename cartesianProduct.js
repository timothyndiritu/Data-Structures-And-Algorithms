// //my solution
// function cartesianProduct(arr1, arr2) {

//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]]);
//     }
//   }
//   return result;
// }

// console.log(cartesianProduct([1,2],[3,4,5]))


//instructors solution is the exact same as mine

function cartesianProduct(arr1, arr2) {
  const result = []

  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      result.push([arr1[i],arr2[j]])
    }
  }
  return result
}

const arr1 = [1, 2]
const arr2 = [3, 4]

console.log(arr1, arr2)

//Big O time complexity is O(mn) because arr1 and arr2 can be of different lengths,so it is dependant on both arrays lenghts inputs

//if they were equal, then it would be O(n^2)