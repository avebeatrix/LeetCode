// Source : https://leetcode.com/problems/complement-of-base-10-integer/
// Author : avebeatrix
// Date   : 2022-01-04
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {   
    return parseInt(n.toString(2).split('').map(val => (parseInt(val) + 1) % 2).join(''), 2);
};
