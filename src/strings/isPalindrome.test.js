const isPalindrome = require('./isPalindrome');

test('isPalindrome', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome(" ")).toBe(true);
  expect(isPalindrome("ab_a")).toBe(true);
});
