# Recursion

## Challenge 1
Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

## Challenge 2
Write a recursive function sum that calculates the sum of an array of integers.

## Challenge 3
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

## Challenge 4
Write a recursive function isPrime that determines if a number is prime and returns true if it is.

## Challenge 5
Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"

## Challenge 6
Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

## Challenge 7
Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.

## Challenge 8
There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.

## Challenge 9
Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

## Challenge 10
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
