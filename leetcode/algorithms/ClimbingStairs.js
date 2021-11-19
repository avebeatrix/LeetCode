// Source : https://leetcode.com/problems/climbing-stairs/
// Author : avebeatrix
// Date   : 2021-11-19

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return n >= 2 ? b : a;
};