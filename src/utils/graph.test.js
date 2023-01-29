const {
  traversalBFSAL,
  traversalDFSAL,
  traversalBFSAM,
  traversalDFSAM,
} = require("./graph");

test("graph", () => {
  const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
  ];

  const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
  ];

  expect(traversalBFSAL(adjacencyList)).toEqual([0, 1, 3, 2, 4, 5, 8, 6, 7]);
  expect(traversalDFSAL(0, adjacencyList)).toEqual([0, 1, 3, 2, 8, 4, 6, 7, 5]);

  expect(traversalBFSAM(adjacencyMatrix)).toEqual([0, 1, 3, 2, 4, 5, 8, 6, 7]);
  expect(traversalDFSAM(0, adjacencyMatrix)).toEqual([
    0, 1, 3, 2, 8, 4, 6, 7, 5,
  ]);
});
