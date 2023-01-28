// https://www.lintcode.com/problem/663/

const { directions } = require("../utils/2d-array");
const INF = 2147483647;
const WALL = -1;
const GATE = 0;

const dfs = (grid, row, col, count) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    (count && count >= grid[row][col])
  )
    return;

  grid[row][col] = count;

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
};

const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0);
    }
  }
};

module.exports = { wallsAndGates, GATE, INF, WALL };
