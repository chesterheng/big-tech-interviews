const { TreeNode } = require("../utils/binary-tree");
const levelOrder = require("./levelOrder");

test("levelOrder", () => {
  let root = new TreeNode(3);
  root.insert([9, 20, null, null, 15, 7]);
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);

  root = new TreeNode(1);
  root.insert([null, null]);
  expect(levelOrder(root)).toEqual([[1]]);

  root = null;
  expect(levelOrder(root)).toEqual([]);
});
