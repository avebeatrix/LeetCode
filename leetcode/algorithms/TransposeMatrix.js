// Source : https://leetcode.com/problems/transpose-matrix/
// Author : avebeatrix
// Date   : 2022-06-02
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let transposed = Array(matrix[0].length).fill(0).map(val => Array(matrix.length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};