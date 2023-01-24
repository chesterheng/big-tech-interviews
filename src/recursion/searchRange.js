const { binarySearch } = require('../utils/recursion');

var searchRange = function(nums, target) {
  if(nums.length < 1) return [-1, -1];
  
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if(firstPos === -1)  return [-1, -1];
  
  let endPos = firstPos, startPos = firstPos, temp1, temp2;
  
  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};

module.exports = searchRange;
