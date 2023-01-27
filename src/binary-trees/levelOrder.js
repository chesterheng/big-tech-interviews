// https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);

      // breath first search
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
};

module.exports = levelOrder;
