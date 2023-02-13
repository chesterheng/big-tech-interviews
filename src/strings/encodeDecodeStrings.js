// https://www.lintcode.com/problem/659/

var encode = function (strs) {
  let result = "";
  for (let str of strs) {
    result += str.length + "#" + str;
  }
  return result;
};

var decode = function (str) {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const length = Number(str.slice(i, j));
    result.push(str.slice(j + 1, j + length + 1));

    i = j + length + 1;
  }
  return result;
};

module.exports = { encode, decode };
