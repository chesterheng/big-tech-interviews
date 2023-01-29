const numOfMinutes = require("./numOfMinutes");

test("numOfMinutes", () => {
  expect(numOfMinutes(1, 0, [-1], [0])).toBe(0);
  expect(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])).toBe(1);
  expect(
    numOfMinutes(8, 4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0])
  ).toBe(13);
  expect(
    numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1])
  ).toBe(21);
});
