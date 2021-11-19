// Source : https://leetcode.com/problems/number-of-1-bits/
// Author : avebeatrix
// Date   : 2021-11-19
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
    return n.toString(2).split('1').length - 1
};