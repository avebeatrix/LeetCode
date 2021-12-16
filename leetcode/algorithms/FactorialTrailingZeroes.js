// Source : https://leetcode.com/problems/factorial-trailing-zeroes/
// Author : avebeatrix
// Date   : 2021-12-16
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let result = 0;
    let t = Math.floor(n / 5);
    result = t;
    while (t >= 5) {
        result += Math.floor(t / 5);
        t = Math.floor(t / 5);
    }

    return result;
};