// https://leetcode.com/problems/valid-anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hashMapS = {},
    hashMapT = {};
  for (let i = 0; i < s.length; i++) {
    hashMapS[s[i]] = (hashMapS[s[i]] || 0) + 1;
    hashMapT[t[i]] = (hashMapT[t[i]] || 0) + 1;
  }

  for (let key in hashMapS) {
    if (hashMapS[key] !== hashMapT[key]) return false;
  }
  return true;
};

module.exports = isAnagram;
