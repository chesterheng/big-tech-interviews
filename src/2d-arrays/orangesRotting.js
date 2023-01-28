// https://leetcode.com/problems/rotting-oranges/

const { directions } = require("../utils/2d-array");
const EMPTY = 0;
const FRESH = 1;
const ROTTEN = 2;

// BFS
var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;

  const queue = [];
  let freshOranges = 0;
  // sequential search
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === ROTTEN) {
        queue.push([row, col]);
      } else if (grid[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  // BFS
  let minutes = 0;
  let currentQueueSize = queue.length;
  while (queue.length) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const currentRow = currentOrange[0];
    const currentCol = currentOrange[1];

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = currentRow + currentDir[0];
      const nextCol = currentCol + currentDir[1];

      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length
      ) {
        continue;
      }

      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = ROTTEN;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  if (freshOranges !== 0) {
    return -1;
  }

  return minutes;
};

module.exports = { orangesRotting, EMPTY, FRESH, ROTTEN };
