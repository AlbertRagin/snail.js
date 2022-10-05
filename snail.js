snail = function(array) {
  if (!array || array.length && !array[0].length) {
    return [];
  }
  
  const start = 0, nbCols = array[0].length, nbRows = array.length;
  return parse(array, start, nbCols, 0, nbRows);
}

function parse(array, start, nbCols, row, nbRows) {
  const results = [];
  for (let i = start; i < start + nbCols; i ++) {
    results.push(array[row][i])
  }
  if (nbCols == 1) return results;
  
  for (let i = row + 1; i < row + nbRows; i ++) {
    results.push(array[i][start + nbCols - 1])
  }
  for (let i = nbCols + start - 2; i >= start; i --) {
    results.push(array[row + nbRows - 1][i])
  }
  for (let i = nbRows + row - 2; i > row; i --) {
    results.push(array[i][start])
  }
  if (row === Math.floor(array.length / 2) + 1) return results;
  
  return results.concat(parse(array, start + 1, nbCols - 2, row + 1, nbRows - 2))
}
