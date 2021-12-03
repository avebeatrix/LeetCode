// Source : https://leetcode.com/problems/rotate-image/
// Author : avebeatrix
// Date   : 2021-12-03
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let L = matrix.length;
    let limit = L - 1;
    for (let i = 0; i < Math.floor(L / 2); i++) {        
        for (let j = i; j < limit - i; j++) {           
            [matrix[i][j], matrix[limit - j][i]] = [matrix[limit - j][i], matrix[i][j]];
            [matrix[limit - j][i], matrix[limit - i][limit - j]] = [matrix[limit - i][limit - j], matrix[limit - j][i]];
            [matrix[limit - i][limit - j], matrix[j][limit - i]] = [matrix[j][limit - i], matrix[limit - i][limit - j]];          
        }
    }
};