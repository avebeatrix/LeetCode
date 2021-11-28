// Source : https://leetcode.com/problems/valid-palindrome/
// Author : avebeatrix
// Date   : 2021-11-28
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {    
    s = s.replace(/[^0-9a-z]/gi, '', "").toLowerCase();   
    return s.split('').reverse().join('') === s;
};
let d = isPalindrome("A man, a plan, a canal: Panama");
let t;