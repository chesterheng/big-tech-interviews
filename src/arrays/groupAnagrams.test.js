const groupAnagrams = require("./groupAnagrams");

test("groupAnagrams", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
