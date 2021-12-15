// Source : https://leetcode.com/problems/unique-paths/
// Author : avebeatrix
// Date   : 2021-12-15
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {    
    let res = new Array(n).fill(1);
    for(let i = 2; i <= m; i++) {
        for(let j = 2; j <=n ; j++ ) {
            res[j-1] += res[j-2];
        }
    }
    
    return res[n-1];
};