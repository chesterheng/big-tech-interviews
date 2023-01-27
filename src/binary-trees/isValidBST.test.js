const { TreeNode } = require("../utils/binary-tree");
const isValidBST = require("./isValidBST");

test("isValidBST", () => {
  let root = new TreeNode(2);
  root.insert([1, 3]);
  expect(isValidBST(root)).toBe(true);

  root = new TreeNode(5);
  root.insert([1, 4, null, null, 3, 6]);
  expect(isValidBST(root)).toBe(false);

  root = new TreeNode(2);
  root.insert([2, 2]);
  expect(isValidBST(root)).toBe(false);

  root = new TreeNode(5);
  root.insert([4, 6, null, null, 3, 7]);
  expect(isValidBST(root)).toBe(false);
});
