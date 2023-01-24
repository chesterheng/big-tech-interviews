// https://leetcode.com/problems/kth-largest-element-in-an-array/

const { quickSort, quickSelect } = require('../utils/recursion');

var findKthLargest = function(nums, k) {
  const n = nums.length;
  const indexToFind = n - k;
  return quickSelect(nums, 0, n - 1, indexToFind);
};

// var findKthLargest = function(nums, k) {
//   const n = nums.length;
//   quickSort(nums, 0, n - 1);
//   return nums.at(-k);
// };

// var findKthLargest = function(nums, k) {
//   const ascending = (a, b) => a - b;
//   const sortedNums = nums.sort(ascending);
//   return sortedNums.at(-k);
// };

module.exports = findKthLargest;
