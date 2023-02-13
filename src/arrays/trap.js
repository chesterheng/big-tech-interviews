// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
  let leftPointer = 0, rightPointer = height.length-1;
  let maxLeft = 0, maxRight = 0;
  let total = 0;
  
  while(leftPointer < rightPointer) {
    const leftHeight = height[leftPointer];
    const rightHeight = height[rightPointer];
    if(leftHeight <= rightHeight) {
      if(leftHeight > maxLeft) {
        maxLeft = leftHeight;
      } else {
        total += maxLeft - leftHeight;
      }
      leftPointer++;
    } else {
      if(rightHeight > maxRight) {
        maxRight = rightHeight;
      } else {
        total += maxRight - rightHeight;
      }
      rightPointer--;
    }
  }
  return total;
};

module.exports = trap;
