
//my solution
function factorial(n) {
  let factorial = 1;
  for (let i = 1; i < n + 1; i++){
    factorial = factorial * i;
  }
  return factorial
}


console.log(factorial(0)) // 1
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120