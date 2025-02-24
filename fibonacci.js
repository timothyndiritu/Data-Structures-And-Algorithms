//given the number 'n' find the first 'n' numbers of the fibonacci sequence
//in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones
//fibonacci(2) = [0,1]
//fibonnacci(3) = [0,1,1]
//fibonacci(7) = [0,1,1,2,3,5,8]

//my solution
// function fibonacci(n) {
//   let answer = [0, 1, 1]
//   if (n > 3) {
//     for (let i = 3; i < n; i++){
//       answer[i] = answer[(i - 1)] + answer[(i - 2)];
//     }

//   } else if (n == 2) {
//     answer =[0,1]
//   } else {
//     return 'not viable'
//   }
//   return answer;
// }

// console.log('my sequence', fibonacci(4));

//instructor solution
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

//Big O is O(n)