// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board) {
  const hashMapRows = Array(9)
    .fill(0)
    .map(() => Array(9).fill(false));
  const hashMapCols = Array(9)
    .fill(0)
    .map(() => Array(9).fill(false));
  const hashMapSquares = Array(9)
    .fill(0)
    .map(() => Array(9).fill(false));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const digit = board[row][col];
      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (digit === ".") continue;

      if (
        hashMapRows[row][digit - 1] ||
        hashMapCols[col][digit - 1] ||
        hashMapSquares[boxIndex][digit - 1]
      )
        return false;

      hashMapRows[row][digit - 1] = true;
      hashMapCols[col][digit - 1] = true;
      hashMapSquares[boxIndex][digit - 1] = true;
    }
  }
  return true;
};

module.exports = isValidSudoku;
