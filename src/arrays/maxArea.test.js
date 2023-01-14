const maxArea = require('./maxArea');

test('Input: height = [1,8,6,2,5,4,8,3,7]', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});

test('Input: height = [1,1]', () => {
  expect(maxArea([1,1])).toBe(1);
});
