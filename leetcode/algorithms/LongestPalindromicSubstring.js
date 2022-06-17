// Source : https://leetcode.com/problems/longest-palindromic-substring/
// Author : avebeatrix
// Date   : 2022-06-16
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let sOdd = palindrome(s, i, i);
        let sEven = palindrome(s, i, i + 1);
        result = result.length > sOdd.length ? result : sOdd;
        result = result.length > sEven.length ? result : sEven;
    }
    return result;
};

function palindrome(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}