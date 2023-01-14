// https://leetcode.com/problems/valid-palindrome-ii

var validPalindrome = function(s) {
  let start = 0, end = s.length - 1;
  while(start < end) {
    if(s[start] !== s[end]) {
      return validSubPalindrome(s, start+1, end) || validSubPalindrome(s, start, end-1);
    }
    start++;
    end--;
  }
  return true;
};

var validSubPalindrome = function(s, start, end) {
  while(start < end) {
    if(s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

module.exports = validPalindrome;