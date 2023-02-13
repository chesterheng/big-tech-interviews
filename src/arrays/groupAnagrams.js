// https://leetcode.com/problems/group-anagrams

var groupAnagrams = function (strs) {
  const hashMap = {};

  for (let str of strs) {
    const count = Array(26).fill(0);
    for (let chr of str) {
      count[chr.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.toString();
    if (key in hashMap) hashMap[key].push(str);
    else hashMap[key] = [str];
  }
  return Object.values(hashMap);
};

module.exports = groupAnagrams;
