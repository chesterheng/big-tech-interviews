// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function(s, t) {
  while(s.includes('#')) s = s.replace(/[a-z]?#/, '');
  while(t.includes('#')) t = t.replace(/[a-z]?#/, '');
  return s === t;
};

module.exports = backspaceCompare;
