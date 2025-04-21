// //move the entire stack to the last rod
// //move only one disk at a time
// //no disk may be placed on a disk that is smaller

// //my solution
// function towerOfHanoi(n) {
//   //the number of disks corresponds to size, so the larger the number, the larger the size
//   const rodA = [];
//   const rodB = [];
//   const rodC = [];

//   for (let i = 1; i <= n; i++) {
//     rodA.push(i);
//   }

//   let elementToMove = 1;
//   let impossibleCount = 0;

//   while (rodC.length < n + 1 && impossibleCount < 700) {
//     console.log("A",rodA,"B",rodB,"C",rodC)

//     if (elementToMove === 1) {
//       if (rodC.length < 1) {
//         rodC.push(rodA.shift())
//       } else {
//         if (rodC[rodC.length - 1] > rodA[0]) {
//           rodC.push(rodA.shift())
//         } else {
//           if (rodB.length < 1) {
//             rodB.push(rodA.shift())
//           } else {
//             if (rodB[rodB.length - 1] > rodA[0]) {
//               rodB.push(rodA.shift())
//             } else {
//               elementToMove++;
//               impossibleCount++;
//             }
//           }
//         }
//       }
//     }

//     if (elementToMove === 2) {
//       if (rodC.length < 1) {
//         rodC.push(rodB.shift())
//       } else {

//         if (rodC[rodC.length - 1] > rodB[0]) {
//           rodC.push(rodB.shift())
//         } else {
//           if (rodA.length < 1) {
//             rodA.push(rodB.shift())
//           } else {
//             if (rodA[rodA.length - 1] > rodA[0]) {
//               rodA.push(rodB.shift())
//             } else {
//               elementToMove++;
//               impossibleCount++;
//             }
//           }
//         }
//       }
//     }

//     if (elementToMove === 3) {
//       if (rodB.length < 1) {
//         rodB.push(rodC.shift())
//       } else {
//         if (rodA[rodB.length - 1] > rodC[0]) {
//           rodB.push(rodC.shift())
//         } else {
//           if (rodB.length < 1) {
//             rodA.push(rodC.shift())
//           } else {
//             if (rodB[rodB.length - 1] > rodA[0]) {
//               rodA.push(rodC.shift())
//             } else {
//               elementToMove = 1;
//               impossibleCount++;
//             }
//           }
//         }
//       }
//     }
//   }

//   if (impossibleCount > 3) {
//     console.log("error sorting")
//     return -1
//   }

//   //if elements to move is A
//   //if C is empty push the first to C
//   //if C is occupied, check if the last item in C is smaller than the one to move
//   //if it is smaller,check if B is empty
//   //if B is empty, push there
//   //if B is occupied, check if the last item in B is smaller than the one to move
//   //if it is smaller, change element to move to be the one in B and raise impossible count to one
//   //if impossible count hits 3, return -1

//   //if element to move is in B
//   //check if C is empty push the first to C
//   //if C is occupied, check if the last item in C is smaller than the one to move
//    //if it is smaller,check if A is empty
//   //if A is empty, push there
//   //if A is occupied, check if the last item in A is smaller than the one to move
//   //if it is smaller, change element to move to be the one in C and raise impossible count to one
//   //if impossible count hits 3, return -1

//    //if element to move is in C
//   //check if A is empty push the first to A
//   //if A is occupied, check if the last item in A is smaller than the one to move
//    //if it is smaller,check if B is empty
//   //if B is empty, push there
//   //if B is occupied, check if the last item in B is smaller than the one to move
//   //if it is smaller, change element to move to be the one in A and raise impossible count to one
//   //if impossible count hits 3, return -1
// }

// console.log(towerOfHanoi(5));

//understanding tower of hanoi
// function towerOfHanoi(n, start, end) {
//   //base case
//   if (n === 1) {
//     console.log(start, "->", end);
//   } else {
//     //solve f(n) called in f(n-1)
//     const otherRod = 6 - (start + end);
//     towerOfHanoi(n - 1, start, otherRod);
//     console.log(start, "->", end);
//     towerOfHanoi(n - 1, otherRod, end);
//   }
// }

// towerOfHanoi(4, 1, 3);

//how to work on recursive problems
//design a function,f(n), and write the code for f(1) -- this is called the base case
//assume f(n-1) recursive call,works - this is called the recursive leap of faith
//show how f(n) works using f(n-1)

//instructors solution
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    //move first disk to the last rod
    console.log(`Move ${n} from ${fromRod} to ${toRod}`);
  } else {
    //move all other disk to the second rod
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    //move last disk to the last rod
    console.log(`Move ${n} from ${fromRod} to ${toRod}`);
    //move all other disks to the end rod
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
  }
}

towerOfHanoi(4, "A", "C", "B");

//Big O is O(2^n)
