// Source : https://leetcode.com/problems/sqrtx/
// Author : avebeatrix
// Date   : 2022-01-31
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0;
    let r = Math.floor((x + 1) / 2);
    while (l < r) {
        let m = Math.floor((l + r + 1) / 2);
        if (m * m > x) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    return l;
};