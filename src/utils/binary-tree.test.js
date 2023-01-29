const {
  TreeNode,
  breathFirstSearch,
  depthFirstSearch,
} = require("./binary-tree");

test("binary-tree", () => {
  let root = new TreeNode(1);
  root.insert([2, 3, null, 5, null, 4]);
  expect(root).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 5, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: { val: 4, left: null, right: null },
    },
  });

  expect(breathFirstSearch(root)).toEqual([1, 2, 3, 5, 4]);
  expect(depthFirstSearch(root)).toEqual([1, 2, 5, 3, 4]);
});
