// Source : https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// Author : avebeatrix
// Date   : 2022-05-19
/* time is no good */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let M = matrix.length;
    let N = matrix[0].length;
    let steps = Array(M).fill(0).map(val => Array(N).fill(1));
  
    const DIRS = [[0, -1], [0, 1], [-1, 0], [1, 0]];  

    let queue = [];
    let new_queue = [];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {   
            queue.push([i, j, 1]); 
        }
    }
    let visited = new Set();
    while (queue.length) {
        let [i, j, long] = queue.pop();
         
        DIRS.forEach(offsets => {
            let [row_offset, col_offset] = offsets;
            let new_row = i + row_offset;
            let new_col = j + col_offset;
            if (new_row >=0 && new_row < M && new_col >=0 && new_col < N){
                if (matrix[new_row][new_col] > matrix[i][j]) {
                    let old_value = steps[i][j];
                    steps[new_row][new_col] = Math.max(steps[new_row][new_col], long + 1);  
                    if (old_value !== steps[new_row][new_col] && !visited.has(new_row * N + new_col)) {
                        new_queue.push([new_row, new_col, steps[new_row][new_col]]);  
                        visited.add(new_row * N + new_col);
                    }                     
                }
            }
        })                              
        if (!queue.length) {
            queue = new_queue;
            new_queue = [];
            visited = new Set();
        }
    }    

    let longest = Math.max(...steps.flat());
    return longest;
};