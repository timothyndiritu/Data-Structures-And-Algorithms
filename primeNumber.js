//my solution

// function isPrime(n) {
//   for (let i = 2; i < n; i++){
//     if (n % i == 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(5)) //true
// console.log(isPrime(4)) //false


//instructors solution

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++){
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) //true
console.log(isPrime(4)) ///false

//Big O is O(n)



//for maths enthusiasts ...
//integers larger than the square root do not need to be checked, because whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of n

//n = 24, a = 4, b= 6
//the squareroot of 24 is 4.89
//4 is less than 4.89

//thus we can have more optimized code

function isPrimeForMathsEnthusiasts(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrimeForMathsEnthusiasts(1)) // false
console.log(isPrimeForMathsEnthusiasts(5)) //true
console.log(isPrimeForMathsEnthusiasts(4)) ///false

//lets check Big O of this
// if n is 100, we check till 10 (for loop runs till 10)
//if n is 10,000 we check till 100 (for loop runs till 100)
//as n increases, the number of times the for loop is executed increases, but not in the same proportion
//thus time complexity/ Big O is O(sqrt(n))
