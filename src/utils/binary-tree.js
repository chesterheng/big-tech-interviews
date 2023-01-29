class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

var breathFirstSearch = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode.val);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return result;
};

var depthFirstSearch = function (root, result = []) {
  if (!root) return;

  // pre-order traversal: node, left, right
  const currentNodeValue = root.val;
  result.push(currentNodeValue);

  depthFirstSearch(root.left, result);
  depthFirstSearch(root.right, result);

  return result;
};

module.exports = { TreeNode, breathFirstSearch, depthFirstSearch };
