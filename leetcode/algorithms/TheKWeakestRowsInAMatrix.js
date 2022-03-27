// Source : https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
// Author : avebeatrix
// Date   : 2022-03-27
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let arr = [];
    mat.forEach((row, i) => {
        arr.push([row.reduce((acc, val) => acc+=val, 0), i]);
    })   
    return arr.sort((a, b) => a[0] - b[0]).slice(0, k).map(val => val[1]);
};