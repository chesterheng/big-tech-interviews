// Normal recusrion space: O(n)
function recFactorial(x) {
  if(x === 1)  
    return 1;
  
  return x * recFactorial(x - 1);
}

// Tail recusrion space: O(1)
// Check if compiler implement tail recursion
function tailFactorial(x, totalSoFar = 1) {
  if(x === 0)  
    return totalSoFar;
  
  return tailFactorial(x - 1, totalSoFar * x);
}