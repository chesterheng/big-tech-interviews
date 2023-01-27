// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root, currentDepth = 0) {
  if (!root) {
    return currentDepth;
  }

  // increase count by 1 for current node
  currentDepth++;

  return Math.max(
    maxDepth(root.left, currentDepth),
    maxDepth(root.right, currentDepth)
  );
};

module.exports = maxDepth;
