const { traversalDFS, traversalBFS } = require("./2d-array");

test("2d-array", () => {
  const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];

  expect(traversalDFS(testMatrix)).toEqual([
    1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16,
  ]);
  expect(traversalBFS(testMatrix)).toEqual([
    1, 2, 6, 3, 7, 11, 4, 8, 12, 16, 5, 9, 13, 17, 10, 14, 18, 15, 19, 20,
  ]);
});
