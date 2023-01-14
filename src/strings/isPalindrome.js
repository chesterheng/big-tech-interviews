// https://leetcode.com/problems/valid-palindrome/

// [\w] = [a-zA-Z0-9_]
// [\W] = [^a-zA-Z0-9_]
// [\W_] = [^a-zA-Z0-9]

var isPalindrome = function(s) {
  // const newS = s.toLowerCase().replace(/[\W_]/g, "");
  const newS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reverseS = [...newS].reverse().join("");
  return newS === reverseS;
};

module.exports = isPalindrome;
