// https://leetcode.com/problems/contains-duplicate/submissions/896336784/
// hashset to get unique values in array, to check for duplicates easily

var containsDuplicate = function (nums) {
  const hashSet = [];
  for (let num of nums) {
    if (hashSet.includes(num)) return true;

    hashSet.push(num);
  }

  return false;
};

module.exports = containsDuplicate;
