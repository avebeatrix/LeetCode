// Source : https://leetcode.com/problems/reverse-integer/
// Author : avebeatrix
// Date   : 2021-11-22
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let limit = 2**31; 
    let num = Math.abs(x).toString().split('').reverse().join('');
    num = x < 0 ? -num : +num;
    if (num > limit-1 || num < -limit) return 0;
    return num;
};