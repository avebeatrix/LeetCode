// Source : https://leetcode.com/problems/search-a-2d-matrix/
// Author : avebeatrix
// Date   : 2022-03-30
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {   
     let checkRow = (m) => {
        if (matrix[m][matrix[m].length - 1] < target && matrix[m][0] < target) {
            return true;
        }
        return false;
     } 
     let checkCell = (m) => {
        if (matrix[rowIndex][m] < target) {
            return true;
        }
        return false;
     } 
    let binSearchL = (l, r, check) => {
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (check(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
    let rowIndex = binSearchL(0, matrix.length - 1, checkRow);
    let colIndex = binSearchL(0, matrix[rowIndex].length - 1, checkCell);
    if (matrix[rowIndex][colIndex] === target) return true;
    return false;
};