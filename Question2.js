function MaximumPathSum(matrix) {
    const n = matrix.length; //row
    const m = matrix[0].length; //column 

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
           
            let down = matrix[i - 1][j]; 
            let diagonalLeft = j > 0 ? matrix[i - 1][j - 1] : 0; 
            let diagonalRight = j < m - 1 ? matrix[i - 1][j + 1] : 0; 

            matrix[i][j] += Math.max(down, diagonalLeft, diagonalRight);
        }
    }

    return Math.max(...matrix[n - 1]);
}
const matrix = [
    [12, 22, 5, 0, 20, 18],
    [0, 2, 5, 25, 18, 17],
    [12, 10, 5, 4, 2, 1],
    [3, 8, 2, 20, 10, 8]
];
console.log(matrix);

console.log(MaximumPathSum(matrix)); 
