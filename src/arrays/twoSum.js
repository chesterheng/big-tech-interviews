// https://leetcode.com/problems/two-sum/
// use hash map to instantly check for difference value, 
// map will add index of last occurrence of a num, don’t use same element twice;

var twoSum = function(nums, target) {
  const hashMap = {}

  for(let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    if(numberToFind in hashMap) {
      return [hashMap[numberToFind], i]
    } else {
      hashMap[nums[i]] = i;
    }
  }
};

// var twoSum = function(nums, target) {
//   const hashMap = {};

//   for(let i = 0; i < nums.length; i++){
//     const currentValue = nums[i];
//     if(currentValue in hashMap){
//       return [hashMap[currentValue], i] 
//     } else {
//       const numberToFind = target - nums[i];
//       hashMap[numberToFind] = i
//     }
//   }
//   return null
// };

module.exports = twoSum;