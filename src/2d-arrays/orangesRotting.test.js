const { orangesRotting, EMPTY, FRESH, ROTTEN } = require("./orangesRotting");

test("orangesRotting", () => {
  let grid = [
    [ROTTEN, FRESH, FRESH],
    [FRESH, FRESH, EMPTY],
    [EMPTY, FRESH, FRESH],
  ];
  expect(orangesRotting(grid)).toBe(4);

  grid = [
    [ROTTEN, FRESH, FRESH],
    [EMPTY, FRESH, FRESH],
    [FRESH, EMPTY, FRESH],
  ];
  expect(orangesRotting(grid)).toBe(-1);

  grid = [[EMPTY, ROTTEN]];
  expect(orangesRotting(grid)).toBe(0);
});
