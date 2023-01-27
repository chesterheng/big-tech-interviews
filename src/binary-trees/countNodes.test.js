const { TreeNode } = require("../utils/binary-tree");
const { countNodesBFS, countNodesDFS, countNodes } = require("./countNodes");

test("countNodes", () => {
  let root = new TreeNode(1);
  root.insert([2, 3, 4, 5, 6]);
  expect(countNodesBFS(root)).toBe(6);
  expect(countNodesDFS(root)).toBe(6);
  expect(countNodes(root)).toBe(6);

  root = null;
  expect(countNodesBFS(root)).toBe(0);
  expect(countNodesDFS(root)).toBe(0);
  expect(countNodes(root)).toBe(0);

  root = new TreeNode(1);
  expect(countNodesBFS(root)).toBe(1);
  expect(countNodesDFS(root)).toBe(1);
  expect(countNodes(root)).toBe(1);
});
