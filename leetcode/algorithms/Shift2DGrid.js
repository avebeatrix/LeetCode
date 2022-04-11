// Source : https://leetcode.com/problems/shift-2d-grid/
// Author : avebeatrix
// Date   : 2022-04-11
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let n = grid.length;
    let m = grid[0].length;
    k = k % (n * m);
    let tmp_arr = grid.flat();
    tmp_arr = [...tmp_arr.slice(tmp_arr.length - k), ...tmp_arr.slice(0, tmp_arr.length - k)];
    return Array(n).fill(0).map((val, i) => tmp_arr.slice(i * m, i * m + m));
};