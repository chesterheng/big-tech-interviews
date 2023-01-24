// Challenge 1
// Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
function countdown(n) {
  if(n === 0) return;

  console.log(n);
  countdown(n - 1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
// Write a recursive function sum that calculates the sum of an array of integers.
function sum(array) {
  if(array.length === 0)  return 0;
  
  return array[0] + sum(array.slice(1));
}


// uncomment these to check your work
//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
// Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
function palindrome(string) {
  const processedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // console.log(processedString)
  const left = 0, right = processedString.length - 1;
  const leftChar = processedString[left], rightChar = processedString[right]
  
  if(left === right) { return true }
  else if(left === right - 1) { return leftChar === rightChar}
  
  return leftChar === rightChar && palindrome(processedString.slice(left + 1, right));
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false
// console.log(palindrome("abba")); //-> true
// console.log(palindrome("abca")); //-> false

// Challenge 4
// Write a recursive function isPrime that determines if a number is prime and returns true if it is.
function isPrime(num, i = 2) {
  if(num < 2) return false;
  else if(i > Math.sqrt(num)) return true;
  else if(num % i === 0) return false;
  
  return isPrime(num, i + 1);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
// Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
// const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
// const arr = ["first","second","third"];
// pathFinder(obj,arr);   //-> "finish"
function pathFinder(obj, arr) {
  if(arr.length === 1) return obj[arr[0]]
  
  return pathFinder(obj[arr[0]], arr.slice(1))
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
// Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
function flattenRecursively(arr) {
  let flatArr = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flatArr = [...flatArr, ...flattenRecursively(arr[i])];
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
// Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.

// simple linear search algorithm
// function findInOrderedSet(arr, target) {
//   if(arr.length === 1) return arr[0] === target
  
//   return arr[0] === target || findInOrderedSet(arr.slice(1), target);
// }

// binary search algorithm
function findInOrderedSet(arr, target) {
  const midIndex = Math.floor(arr.length / 2);
  if(arr[midIndex] === target) return true;
  
  if(target < arr[midIndex]) {
    return findInOrderedSet(arr.slice(0, midIndex), target)
  } else {
    return findInOrderedSet(arr.slice(midIndex + 1), target)
  }
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
// There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.
function countWaysToReachNthStair(n) {
  if(n <= 1) return 1;
  
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(3)) //-> 3 ((1, 1, 1), (1, 2), (2, 1))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (1, 2, 1),(2, 1, 1), (2, 2))
// console.log(countWaysToReachNthStair(5)) //-> 8 ((1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 1, 2, 1), (1, 2, 1, 1), (2, 1, 1, 1), (1, 2, 2), (2, 1, 2), (2, 2, 1))


//Challenge 9
// Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
// Input:[1, 2, 3]
// Output:[
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
function getPermutations(nums) {
  const result = [];
  if(nums.length === 0 ) return [[]];
  
  for(let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const permutations = getPermutations(remaining);
    for(let j = 0; j < permutations.length; j++) {
      result.push([current, ...permutations[j]]);
    }
  }
  return result;
}

// console.log(getPermutations([])) //-> [[]]
// console.log(getPermutations([1])) //-> [[1]]
// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// console.log(getPermutations([1, 2, 3, 4]))


//Challenge 10
// Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
function getRangeBetween(x, y) {
  if(x === y || x + 1 === y) return [];
  
  if(x + 1 === y - 1)  return [x + 1];
  else return [x + 1, ...getRangeBetween(x + 1, y - 1), y - 1] 
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
