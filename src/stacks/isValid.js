// https://leetcode.com/problems/valid-parentheses

var isValid = function(s) {
  const left = [ '(', '{', '['];
  const right = { ')': '(', '}': '{', ']':'[' };
  const stack = [];
  for(let i=0; i< s.length; i++) {
    const currentChar = s[i];
    if(left.includes(currentChar)) {
      stack.push(currentChar)
    } else if(right[currentChar] && right[currentChar] === stack[stack.length-1]) {
      stack.pop()
    } else {
      return false
    }
  }
  return !stack.length
};

module.exports = isValid;

// var isValid = function(s) {
//   if(s.length === 0) return true;
  
//   const stack = [];
  
//   for(let i = 0; i < s.length; i++)  {
//     if(parens[s[i]]) {
//       stack.push(s[i]);
//     } else {
//       const leftBracket = stack.pop();
//       const correctBracket = parens[leftBracket];
//       if(s[i] !== correctBracket) return false
//     }
//   }
  
//   return stack.length === 0;
// };
