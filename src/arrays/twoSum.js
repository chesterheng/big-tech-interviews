// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
  const hashMap = {};
  for(let i=0; i<nums.length; i++){
    const currentValue = nums[i];
    if(currentValue in hashMap){
      return [hashMap[currentValue], i] 
    } else {
      const numberToFind = target - nums[i];
      hashMap[numberToFind] = i
    }
  }
  return null
};

module.exports = twoSum;