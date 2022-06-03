// Source : https://leetcode.com/problems/range-sum-query-2d-immutable/
// Author : avebeatrix
// Date   : 2022-06-03
/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {        
    N = matrix.length;
    M = matrix[0].length;
    this.prefix_sum = Array(N).fill(0).map(val => Array(M).fill(0));   
    for (let i = 0; i < N; i++) {     
        let sum = 0;   
        for (let j = 0; j < M; j++) {    
            this.prefix_sum[i][j] = (this.prefix_sum[i - 1]?.[j] || 0) + matrix[i][j] + sum;                        
            sum += matrix[i][j];
        }
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = this.prefix_sum[row2][col2] - 
                (this.prefix_sum[row2]?.[col1 - 1] || 0) - 
                (this.prefix_sum[(row1 - 1)]?.[col2] || 0) +
                (this.prefix_sum[(row1 - 1)]?.[col1 - 1] || 0);
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let obj = new NumMatrix([[-1,-2,-9,6],[8,-9,-3,-6],[2,9,-7,-6]]);
let d1 = obj.sumRegion(1,3,2,3);

let d;

