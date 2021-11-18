// Source : https://leetcode.com/problems/reverse-string/
// Author : avebeatrix
// Date   : 2021-11-18

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let L = Math.floor(s.length / 2);
    for (let i = 0; i < L; i++) {
        let char = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = char;
    }
};