// https://leetcode.com/problems/longest-substring-without-repeating-characters
// update start pointer if necessary
// calculate window size
// update hash map
// update end pointer

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0, hashMap = {}, windowStart = 0;
  for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];
    if(currentChar in hashMap && hashMap[currentChar] >= windowStart ) {
      windowStart = hashMap[currentChar] + 1;
    }
    hashMap[currentChar] = windowEnd;
    const windowSize = windowEnd - windowStart + 1;
    // const currentWindow = s.slice(windowStart, windowEnd + 1);
    maxLength = Math.max(maxLength, windowSize);
  }
  return maxLength;
};

module.exports = lengthOfLongestSubstring;
