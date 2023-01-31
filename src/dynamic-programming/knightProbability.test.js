const {
  knightProbabilityRecursive,
  knightProbabilityMemorizeRecursive,
  knightProbabilityIterative,
  knightProbabilityIterativeOptimized,
} = require("./knightProbability");

test("knightProbability", () => {
  // 1.Top down recursion
  expect(knightProbabilityRecursive(0, 2, 1, 2)).toBe(0);
  expect(knightProbabilityRecursive(1, 0, 0, 0)).toBe(1);
  expect(knightProbabilityRecursive(2, 3, 1, 1)).toBe(0);
  expect(knightProbabilityRecursive(2, 0, 1, 1)).toBe(1);
  expect(knightProbabilityRecursive(3, 2, 0, 0)).toBe(0.0625);
  expect(knightProbabilityRecursive(6, 2, 2, 2)).toBe(0.53125);

  // 2.Memorize redundant recursive call
  expect(knightProbabilityMemorizeRecursive(0, 2, 1, 2)).toBe(0);
  expect(knightProbabilityMemorizeRecursive(1, 0, 0, 0)).toBe(1);
  expect(knightProbabilityMemorizeRecursive(2, 3, 1, 1)).toBe(0);
  expect(knightProbabilityMemorizeRecursive(2, 0, 1, 1)).toBe(1);
  expect(knightProbabilityMemorizeRecursive(3, 2, 0, 0)).toBe(0.0625);
  expect(knightProbabilityMemorizeRecursive(6, 2, 2, 2)).toBe(0.53125);

  // 3.Bottom up iterative
  expect(knightProbabilityIterative(0, 2, 1, 2)).toBe(0);
  expect(knightProbabilityIterative(1, 0, 0, 0)).toBe(1);
  expect(knightProbabilityIterative(2, 3, 1, 1)).toBe(0);
  expect(knightProbabilityIterative(2, 0, 1, 1)).toBe(1);
  expect(knightProbabilityIterative(3, 2, 0, 0)).toBe(0.0625);
  expect(knightProbabilityIterative(6, 2, 2, 2)).toBe(0.53125);

  // 4.Bottom up iterative optimized
  expect(knightProbabilityIterativeOptimized(0, 2, 1, 2)).toBe(0);
  expect(knightProbabilityIterativeOptimized(1, 0, 0, 0)).toBe(1);
  expect(knightProbabilityIterativeOptimized(2, 3, 1, 1)).toBe(0);
  expect(knightProbabilityIterativeOptimized(2, 0, 1, 1)).toBe(1);
  expect(knightProbabilityIterativeOptimized(3, 2, 0, 0)).toBe(0.0625);
  expect(knightProbabilityIterativeOptimized(6, 2, 2, 2)).toBe(0.53125);
});
