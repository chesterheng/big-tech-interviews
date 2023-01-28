// https://leetcode.com/problems/number-of-islands/

const { directions } = require("../utils/2d-array");

const dfs = function (matrix, row, col) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length)
    return;

  if (matrix[row][col] === "1") {
    matrix[row][col] = "0";

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      dfs(matrix, row + currentDir[0], col + currentDir[1]);
    }
  }
};

var numIslandsDFS = function (grid) {
  if (!grid.length) return 0;

  let islandCount = 0;

  // sequential search
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        // DFS traversal and flip all adjacent lands to "0"
        dfs(grid, row, col);
      }
    }
  }
  return islandCount;
};

var numIslandsBFS = function (grid) {
  if (grid.length === 0) return 0;
  let islandCount = 0;

  // sequential search
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        grid[row][col] = "0";
        const queue = [[row, col]];

        // BFS traversal and flip all adjacent lands to "0"
        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

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

            if (grid[nextRow][nextCol] === "1") {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = "0";
            }
          }
        }
      }
    }
  }
  return islandCount;
};

module.exports = { numIslandsDFS, numIslandsBFS };
