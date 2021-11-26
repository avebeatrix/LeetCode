// Source : https://leetcode.com/problems/power-of-three/
// Author : avebeatrix
// Date   : 2021-11-26
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {   
    if (n < 1) return false; 
    let x = Math.log(n)/Math.log(3);        
    if (n===1 || Math.pow(3, Math.round(x)) === n) return true;
    return false; 
};