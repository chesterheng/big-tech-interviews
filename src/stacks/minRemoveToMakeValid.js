// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

var minRemoveToMakeValid = function(s) {
  const result = s.split('');
  const parentheses = ['(', ')'];
  const stack = [];

  for(let i=0; i < result.length; i++) {
    const currentChar = result[i]
    if(currentChar === parentheses[0]) { 
      stack.push(i)
    } else if(currentChar === parentheses[1] && stack.length) {
      stack.pop()
    } else if(currentChar === parentheses[1]) {
      result[i] = ''
    }
  }
  
  while(stack.length) {
    const curIdx = stack.pop();
    result[curIdx] = '';
  }
  
  return result.join('')
};

module.exports = minRemoveToMakeValid;
