// Source : https://leetcode.com/problems/length-of-last-word/
// Author : avebeatrix
// Date   : 2021-12-29
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.trim().split(' ').filter(val => val.trim() != '');
    return arr[arr.length - 1].length;
};