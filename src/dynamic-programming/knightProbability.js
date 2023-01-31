// https://leetcode.com/problems/knight-probability-in-chessboard/

// 1. recursive solution from recurrence relation
// base cases

// outside chessboard
// r < 0 || r >= n, c < 0 || c >= n
// probability(r, c, k) = 0

// no move
// 0 <= r < n, 0 <= c < n, k = 0
// probability(r, c, k) = 1

// recurrence relation
// 0 <= r < n, 0 <= c < n, k > 1
// probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

var knightProbabilityRecursive = function (n, k, row, column) {
  if (row < 0 || row >= n || column < 0 || column >= n) return 0;

  if (k === 0) return 1;

  let totalProbability = 0;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const x = direction[0];
    const y = direction[1];
    probability = knightProbabilityRecursive(n, k - 1, row + y, column + x) / 8;
    totalProbability += probability;
  }

  return totalProbability;
};

// 2. memorize redundant recursive call
var knightProbabilityMemorizeRecursive = function (n, k, row, column) {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
  return recurse(n, k, row, column, dp);
};

var recurse = function (n, k, row, column, dp) {
  if (row < 0 || row >= n || column < 0 || column >= n) return 0;

  if (k === 0) return 1;

  if (dp[k][row][column] !== undefined) return dp[k][row][column];

  let totalProbability = 0;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const x = direction[0];
    const y = direction[1];
    probability = recurse(n, k - 1, row + x, column + y, dp) / 8;
    totalProbability += probability;
  }

  dp[k][row][column] = totalProbability;
  return dp[k][row][column];
};

// 3. bottom up tabulation
var knightProbabilityIterative = function (n, k, row, column) {
  if (n === 0) return 0;

  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));

  dp[0][row][column] = 1;
  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (let i = 0; i < directions.length; i++) {
          const dir = directions[i];
          const prevRow = row + dir[0];
          const prevCol = col + dir[1];
          if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
            dp[step][row][col] =
              dp[step][row][col] + dp[step - 1][prevRow][prevCol] / 8;
          }
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += dp[k][i][j];
    }
  }

  return res;
};

// 4. bottom up optimization
var knightProbabilityIterativeOptimized = function (n, k, row, column) {
  if (n === 0) return 0;

  let prevDP = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let nextDP = new Array(n).fill(0).map(() => new Array(n).fill(0));

  prevDP[row][column] = 1;
  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (let i = 0; i < directions.length; i++) {
          const currentDirection = directions[i];
          const prevRow = row + currentDirection[0];
          const prevCol = col + currentDirection[1];
          if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
            nextDP[row][col] = nextDP[row][col] + prevDP[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDP = nextDP;
    nextDP = new Array(n).fill(0).map(() => new Array(n).fill(0));
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += prevDP[i][j];
    }
  }

  return res;
};

module.exports = {
  knightProbabilityRecursive,
  knightProbabilityMemorizeRecursive,
  knightProbabilityIterative,
  knightProbabilityIterativeOptimized,
};
