// https://leetcode.com/problems/container-with-most-water/
// 

var maxArea = function(height) {
  let maxValue = 0, leftPointer = 0, rightPointer = height.length-1;
  
  while(leftPointer < rightPointer){
    const leftHeight=height[leftPointer];
    const rightHeight=height[rightPointer];
    const minHeight = Math.min(leftHeight, rightHeight)
    const width = rightPointer - leftPointer;
    const area =  minHeight * width;
    maxValue = Math.max(area, maxValue)
    if(leftHeight < rightHeight){
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return maxValue;
};

module.exports = maxArea