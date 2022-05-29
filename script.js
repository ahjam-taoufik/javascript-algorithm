//solution
function fib(i) {
    if (i <= 1)
   return i;
  return fib(i - 1) + fib(i - 2);
  }
  
  //example input
  console.log(fib(0)) // 0
  console.log(fib(1)) // 1
  console.log(fib(2)) // 1
  console.log(fib(3)) // 2
  console.log(fib(4)) // 3
  console.log(fib(5)) // 5
  console.log(fib(6)) // 8
  console.log(fib(7)) // 13
 
  