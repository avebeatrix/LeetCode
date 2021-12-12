// Source : https://leetcode.com/problems/set-matrix-zeroes/
// Author : avebeatrix
// Date   : 2021-12-12
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let product;
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        product = 1;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== null) {
                product *= matrix[i][j];
            }
        }
        if (product === 0) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] !== 0) {
                    matrix[i][j] = null;
                }
            }
        }
    }
    for (let j = 0; j < n; j++) {
        product = 1;
        for (let i = 0; i < m; i++) {
            if (matrix[i][j] !== null) {
                product *= matrix[i][j];
            }
        }
        if (product === 0) {
            for (let i = 0; i < m; i++) {
                if (matrix[i][j] !== 0) {
                    matrix[i][j] = null;
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
};