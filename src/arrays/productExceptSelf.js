// https://leetcode.com/problems/product-of-array-except-self
// make two passes, first in-order, second in-reverse, to compute products

var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
};

module.exports = productExceptSelf;
