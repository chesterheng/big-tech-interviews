const {
  networkDelayTimeDA,
  networkDelayTimeBFA,
} = require("./networkDelayTime");

test("networkDelayTime", () => {
  // dijkstra's algorithm
  expect(networkDelayTimeDA([[1, 2, 1]], 2, 1)).toBe(1);
  expect(networkDelayTimeDA([[1, 2, 1]], 2, 2)).toBe(-1);
  expect(networkDelayTimeDA([[2, 3, 4]], 3, 2)).toBe(-1);
  expect(
    networkDelayTimeDA(
      [
        [1, 2, 8],
        [3, 1, 3],
      ],
      3,
      1
    )
  ).toBe(-1);
  expect(
    networkDelayTimeDA(
      [
        [1, 2, 9],
        [1, 4, 2],
        [2, 5, 1],
        [4, 2, 4],
        [4, 5, 6],
        [3, 2, 3],
        [5, 3, 7],
        [3, 1, 5],
      ],
      5,
      1
    )
  ).toBe(14);
  expect(
    networkDelayTimeDA(
      [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
      ],
      4,
      2
    )
  ).toBe(2);

  // bellman-ford algorithm
  expect(networkDelayTimeBFA([[1, 2, 1]], 2, 1)).toBe(1);
  expect(networkDelayTimeBFA([[1, 2, 1]], 2, 2)).toBe(-1);
  expect(networkDelayTimeBFA([[2, 3, 4]], 3, 2)).toBe(-1);
  expect(
    networkDelayTimeBFA(
      [
        [1, 2, 8],
        [3, 1, 3],
      ],
      3,
      1
    )
  ).toBe(-1);
  expect(
    networkDelayTimeBFA(
      [
        [1, 2, 9],
        [1, 4, 2],
        [2, 5, 1],
        [4, 2, 4],
        [4, 5, 6],
        [3, 2, 3],
        [5, 3, 7],
        [3, 1, 5],
      ],
      5,
      1
    )
  ).toBe(14);
  expect(
    networkDelayTimeBFA(
      [
        [1, 2, 9],
        [3, 2, 3],
        [5, 3, 7],
        [3, 1, 5],
        [2, 5, -3],
        [4, 5, 6],
        [1, 4, 2],
        [4, 2, -4],
      ],
      5,
      1
    )
  ).toBe(2);
  expect(
    networkDelayTimeBFA(
      [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
      ],
      4,
      2
    )
  ).toBe(2);
});
