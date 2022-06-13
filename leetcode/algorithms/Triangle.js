// Source : https://leetcode.com/problems/triangle/
// Author : avebeatrix
// Date   : 2022-06-13
/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    let dp = Array(triangle.length).fill(0);
    
    triangle.forEach((row, i) => {
        let cur_dp = [];
        row.forEach((val, j) => {
            cur_dp[j] = Math.min((dp[j] ?? Infinity), (dp[j - 1] ?? Infinity)) + val;
        })
        dp = cur_dp;
    })
    return Math.min(...dp);
};
console.log(minimumTotal([[-1],[-2,-3]]));