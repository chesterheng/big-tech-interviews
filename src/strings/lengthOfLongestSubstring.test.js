const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring("abcbdaac")).toBe(4);
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
