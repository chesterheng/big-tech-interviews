const { TreeNode } = require("../utils/binary-tree");
const maxDepth = require("./maxDepth");

test("maxDepth", () => {
  let root = new TreeNode(3);
  root.insert([9, 20, null, null, 15, 7]);
  expect(maxDepth(root, 0)).toBe(3);

  root = new TreeNode(1);
  root.insert([null, 2]);
  expect(maxDepth(root, 0)).toBe(2);
});
