// https://leetcode.com/problems/binary-tree-right-side-view/description/

var rightSideViewBFS = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0,
      currentNode;

    while (count < length) {
      currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      count++;
    }
    result.push(currentNode.val);
  }
  return result;
};

var depthFirstSearch = function (node, currentLevel, result) {
  if (!node) return;

  // pre-order traversal: node, right, left
  if (currentLevel === result.length) {
    result.push(node.val);
  }

  if (node.right) {
    depthFirstSearch(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    depthFirstSearch(node.left, currentLevel + 1, result);
  }
};

var rightSideViewDFS = function (root) {
  const result = [];
  depthFirstSearch(root, 0, result);
  return result;
};

module.exports = { rightSideViewBFS, rightSideViewDFS };
