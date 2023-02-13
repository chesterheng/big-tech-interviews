// https://leetcode.com/problems/longest-consecutive-sequence

var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;
  let length = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      length = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};

module.exports = longestConsecutive;
