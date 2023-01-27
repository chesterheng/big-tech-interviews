// https://leetcode.com/problems/count-complete-tree-nodes/

var countNodesBFS = function (root) {
  if (!root) return 0;

  let result = 0;
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();
    result++;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return result;
};

var depthFirstSearch = function (node, currentLevel, result) {
  if (!node) return;

  // pre-order traversal: node, left, right
  result.push(node.val);

  if (node.left) {
    depthFirstSearch(node.left, currentLevel + 1, result);
  }

  if (node.right) {
    depthFirstSearch(node.right, currentLevel + 1, result);
  }
};

var countNodesDFS = function (root) {
  const result = [];
  depthFirstSearch(root, 0, result);
  return result.length;
};

var getTreeHeight = function (root) {
  let height = 0;
  while (root.left) {
    height++;
    root = root.left;
  }
  return height;
};

var nodeExists = function (idxToFind, height, node) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;
  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }
  return node !== null;
};

var countNodes = function (root) {
  if (!root) return 0;

  // time complexity: O(logN)
  const height = getTreeHeight(root);
  if (height === 0) return 1;

  const upperCount = Math.pow(2, height) - 1;

  let left = 0,
    right = upperCount;
  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 1;
};

module.exports = { countNodesBFS, countNodesDFS, countNodes };
