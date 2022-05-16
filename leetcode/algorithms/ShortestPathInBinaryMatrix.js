// Source : https://leetcode.com/problems/shortest-path-in-binary-matrix/
// Author : avebeatrix
// Date   : 2022-05-16
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let N = grid.length;
    if (grid[0][0] || grid[N - 1][N - 1]) return -1;
    if (!grid[0][0] && N === 1) return 1;
    let queue = [[0, 0, 1]];
    let new_queue = [];    
    let unvisited = new Set();
    unvisited.add(0);
    const DIRECTIONS = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    while (queue.length) {
        let [row, col, len] = queue.pop();
        for (let [row_offset, col_offset] of DIRECTIONS){    
            let new_row = row + row_offset;
            let new_col = col + col_offset;       
            if (new_row < 0 || new_row > N - 1) continue;
            if (new_col < 0 || new_col > N - 1) continue;
            if (grid[new_row][new_col]) continue;
            let flat_index = (new_row) * N + new_col;
            if (unvisited.has(flat_index)) continue;
            if (flat_index === N * N - 1) return len + 1;
            new_queue.push([new_row, new_col, len + 1]);
            unvisited.add(flat_index);
        }
        if (!queue.length) {
            queue = new_queue;
            new_queue = [];
        }
    }
    return -1;
};