//Fibonacci Sequence
// function fib(i) {
//   if (i <= 1) return i;
//   return fib(i - 1) + fib(i - 2);
// }
// //example input
// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13

//************************************* */

//Factorial of a Number with recursive
function recursiveFactorial(n) {
    if (n === 0) {
      return 1
    }
    return n * recursiveFactorial(n - 1)
  }
  
  console.log(recursiveFactorial(0)) // 1
  console.log(recursiveFactorial(1)) // 1
  console.log(recursiveFactorial(5)) // 120
  
  //************************************* */

    //Factorial of a Number with iterative
    function iterativeFactorial(n) {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i
        }
        return result
        }
        console.log(iterativeFactorial(0)) // 1
        console.log(iterativeFactorial(1)) // 1
        console.log(iterativeFactorial(5)) // 120