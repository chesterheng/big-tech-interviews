const { canFinishBFS, canFinishTSwithAL, canFinishTS } = require("./canFinish");

test("canFinish", () => {
  // naive BFS
  expect(canFinishBFS(0, [])).toBe(true);
  expect(canFinishBFS(2, [[1, 0]])).toBe(true);
  expect(
    canFinishBFS(2, [
      [1, 0],
      [0, 1],
    ])
  ).toBe(false);
  expect(
    canFinishBFS(6, [
      [1, 0],
      [2, 1],
      [2, 5],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(true);
  expect(
    canFinishBFS(6, [
      [1, 0],
      [2, 1],
      [5, 2],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(false);

  // Topological Sort with adjacency list
  expect(canFinishTSwithAL(0, [])).toBe(true);
  expect(canFinishTSwithAL(2, [[1, 0]])).toBe(true);
  expect(
    canFinishTSwithAL(2, [
      [1, 0],
      [0, 1],
    ])
  ).toBe(false);
  expect(
    canFinishTSwithAL(6, [
      [1, 0],
      [2, 1],
      [2, 5],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(true);
  expect(
    canFinishTSwithAL(6, [
      [1, 0],
      [2, 1],
      [5, 2],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(false);

  // Topological Sort without adjacency list
  expect(canFinishTS(0, [])).toBe(true);
  expect(canFinishTS(2, [[1, 0]])).toBe(true);
  expect(
    canFinishTS(2, [
      [1, 0],
      [0, 1],
    ])
  ).toBe(false);
  expect(
    canFinishTS(6, [
      [1, 0],
      [2, 1],
      [2, 5],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(true);
  expect(
    canFinishTS(6, [
      [1, 0],
      [2, 1],
      [5, 2],
      [0, 3],
      [4, 3],
      [3, 5],
      [4, 5],
    ])
  ).toBe(false);
});
