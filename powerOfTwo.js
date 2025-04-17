//my solution

// function isPowerOfTwo(n) {
//   for (let i = 0; i <= Math.sqrt(n); i++) {
//     if ((Math.pow(2,i)) === n) {
//       return true;
//     }
//   }
//   return false
// }

// console.log()
// console.log(isPowerOfTwo(1)); //true 2^0
// console.log(isPowerOfTwo(2)); //true 2^1
// console.log(isPowerOfTwo(5)); //false

//instructor solution
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(5)) //false


//Big O of the algorithm
// in the while loop, the number of iterations increases by half every execution, because while loop divides it by 2
// thus Big O is O(logn)


//optimized version for computer science enthusiast

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)) //true
console.log(isPowerOfTwoBitWise(2)) //true
console.log(isPowerOfTwoBitWise(5)) //false
//what is the logic?
//all even numbers except for one, have one bit and all end in zeros
/*examples : 1 -> 1
             2 -> 10
             4 -> 100
             8 -> 1000
*/
//the numbers just before the even numbers are the complete oposite, they have all bits everywhere except for where the even number has it
/* examples : 3 -> 01
              4 -> 011
              7 -> 0111
*/

// therefore, in bit operations(which is just stucking two bits together), the bits cancel out eg, if 0 meets with 1, it returns 1, but if 1 meets with 1, it returns one
/*example
    1 - 0001       2 - 0010    3 - 0100   4 - 1000
    0 - 0000       1 - 0001    2 - 0010   3 - 0100
    --------       ---------   --------   --------
    0 - 0000       0 - 0000    0 - 0000   0 - 0000
  */

// & operator is 1, if both numbers in line are one, otherwise it is 0


//Here Big O is constant O(1)