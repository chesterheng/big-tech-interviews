const { wallsAndGates, GATE, INF, WALL } = require("./wallsAndGates");

test("wallsAndGates", () => {
  let grid = [
    [INF, WALL, GATE, INF],
    [INF, INF, INF, WALL],
    [INF, WALL, INF, WALL],
    [GATE, WALL, INF, INF],
  ];
  wallsAndGates(grid);
  expect(grid).toEqual([
    [3, WALL, GATE, 1],
    [2, 2, 1, WALL],
    [1, WALL, 2, WALL],
    [GATE, WALL, 3, 4],
  ]);

  grid = [
    [GATE, WALL],
    [INF, INF],
  ];
  wallsAndGates(grid);
  expect(grid).toEqual([
    [GATE, WALL],
    [1, 2],
  ]);
});
