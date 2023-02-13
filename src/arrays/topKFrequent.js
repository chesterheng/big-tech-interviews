// https://leetcode.com/problems/top-k-frequent-elements

var topKFrequent = function (nums, k) {
  const hashMap = {};
  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  const sortedByFrequent = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(sortedByFrequent[i][0]));
  }
  return result;
};

// var topKFrequent = function (nums, k) {
//   const hashMap = {};
//   for (let num of nums) {
//     hashMap[num] = (hashMap[num] || 0) + 1;
//   }

//   const frequents = Array(nums.length + 1)
//     .fill(0)
//     .map(() => []);
//   for ([key, value] of Object.entries(hashMap)) {
//     frequents[value].push(key);
//   }

//   const result = [];
//   for (let i = frequents.length - 1; i > 0; i--) {
//     for (let frequent of frequents[i]) {
//       result.push(frequent);
//     }
//     if (result.length === k) break;
//   }
//   return result;
// };

module.exports = topKFrequent;
