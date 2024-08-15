const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalSub(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i] - matrix[i][matrix.length - 1 - i];
  }

  return sum;
}

console.log(diagonalSub(matrix));
