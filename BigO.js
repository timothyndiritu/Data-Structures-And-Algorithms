//Big O represents the number of times  a line executes as a function of input size

//if n = 4
function summation(n) {
  let sum = 0; //executes once
  for (let i = 1; i <= n; i++){
    sum += i; //executes four times
  }
  return sum //executes once
}

//for loop is a repetition of statement 7

//Count is therefore n + 2

//can be summerized as n(since when n is a big number, plus 4 becomes minute)

//Therefore big O is O(n) -linear

function summation2(n) {
  return (n * n(n +1))/2
}

//time complexity is O(1) -> constant

for (i = 1; i <= n; i++){
  for (j = 1; j <= i; j++){
  
  }
}

//two nested loops, time complexity is quadratic O(n^2)
//if count is 3(n^2) +5n +1 it is dropped to n^2 quadratic

for (i = 1; i <= n; i++){
  for (j = 1; j <= i; j++){
    for (k = 1; k <= j; k++){

    }
    
  }
}
//three nested loops, complexity is cubic O(n^3)



//input size reduces every itteration, big O is logarithmic