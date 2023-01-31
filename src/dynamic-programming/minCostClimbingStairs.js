// https://leetcode.com/problems/min-cost-climbing-stairs/

// 1. recursive solution from recurrence relation
// recurrence relation
// minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
// minCost(0) = cost[0];
// minCost(1) = cost[1];

// top down recursive
var minCostClimbingStairsRecursive = function (cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

const minCost = (i, cost) => {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
};

// 2. memorize redundant recursive call
var minCostClimbingStairsMemorizeRecursive = function (cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(
    minCostMemorize(n - 1, cost, dp),
    minCostMemorize(n - 2, cost, dp)
  );
};

const minCostMemorize = (i, cost, dp) => {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  if (dp[i] !== undefined) return dp[i];
  dp[i] =
    cost[i] +
    Math.min(
      minCostMemorize(i - 1, cost, dp),
      minCostMemorize(i - 2, cost, dp)
    );
  return dp[i];
};

// 3. Bottom up iterative
var minCostClimbingStairsIterative = function (cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[n];

  const dp = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = cost[i];
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};

// 4. Bottom up iterative optimized
var minCostClimbingStairsIterativeOptimized = function (cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[n];

  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
};

module.exports = {
  minCostClimbingStairsRecursive,
  minCostClimbingStairsMemorizeRecursive,
  minCostClimbingStairsIterative,
  minCostClimbingStairsIterativeOptimized,
};
