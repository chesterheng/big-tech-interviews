// https://leetcode.com/problems/validate-binary-search-tree/

var depthFirstSearch = function (node, min, max) {
  const currentNodeValue = node.val;

  // pre-order traversal: node, left, right
  if (currentNodeValue <= min || currentNodeValue >= max) {
    return false;
  }

  if (node.left) {
    if (depthFirstSearch(node.left, min, currentNodeValue) === false) {
      return false;
    }
  }

  if (node.right) {
    if (depthFirstSearch(node.right, currentNodeValue, max) === false) {
      return false;
    }
  }
  return true;
};

var isValidBST = function (root) {
  if (!root) return true;
  return depthFirstSearch(root, -Infinity, Infinity);
};

module.exports = isValidBST;
