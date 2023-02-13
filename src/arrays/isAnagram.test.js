const isAnagram = require("./isAnagram");

test("isAnagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
});
