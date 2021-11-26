// Source : https://leetcode.com/problems/reverse-bits/
// Author : avebeatrix
// Date   : 2021-11-26
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {    
    let s = n.toString(2).split('');
    s = [...new Array(32-s.length).fill(0), ...s];            
    return parseInt(s.reverse().join(''), 2);
};