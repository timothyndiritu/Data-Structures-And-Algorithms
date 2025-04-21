// //my solution
// function waysToClimb(stairs) {
//   const steps = [1, 2];
//   if (stairs < 3) {
//     return stairs;
//   }

//   for (let i = 3; i <= stairs; i++) {
//     steps[i - 1] = steps[i - 2] + steps[i - 3];
//   }

//   return steps[stairs-1];
// }

// console.log(waysToClimb(4));

//instructors solution

function climbStaircase(n) {
  //maximum steps you can jump is only two, thus the number of ways, is the sum of the number of ways of the previous 2 steps :(n -1)  and (n-2)
  //the math thus follows the fibbonacci sequence
  // in the first two steps, there is only one way(1) to climb and two ways to climb(2)

  const noOfWays = [1, 2];
  //we start the loop at 2 because the first two elements are already populated, and index of the array starts at 0
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  //we return n-1 because arrays start at index 0
  return noOfWays[n - 1];
}

console.log(climbStaircase(1));
console.log(climbStaircase(2));
console.log(climbStaircase(3));
console.log(climbStaircase(4));
console.log(climbStaircase(5));
