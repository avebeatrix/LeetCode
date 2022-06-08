// Source : https://leetcode.com/problems/remove-palindromic-subsequences/
// Author : avebeatrix
// Date   : 2022-06-08
/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
     if (s.split('').reverse().join('') === s) return 1;
     return 2;   
};