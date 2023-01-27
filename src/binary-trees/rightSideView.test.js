const { TreeNode } = require("../utils/binary-tree");
const { rightSideViewBFS, rightSideViewDFS } = require("./rightSideView");

test("rightSideView", () => {
  let root = new TreeNode(1);
  root.insert([2, 3, null, 5, null, 4]);
  expect(rightSideViewBFS(root)).toEqual([1, 3, 4]);
  expect(rightSideViewDFS(root)).toEqual([1, 3, 4]);

  root = new TreeNode(1);
  root.insert([null, 3]);
  expect(rightSideViewBFS(root)).toEqual([1, 3]);
  expect(rightSideViewDFS(root)).toEqual([1, 3]);

  root = null;
  expect(rightSideViewBFS(root)).toEqual([]);
  expect(rightSideViewDFS(root)).toEqual([]);
});
