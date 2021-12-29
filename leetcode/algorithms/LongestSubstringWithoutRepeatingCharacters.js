// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : avebeatrix
// Date   : 2021-12-26
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    if (!len) return 0;

    let result = 0;
    let left = right = 0;
    let map = new Map();

    while (right < len) {
        map.set(s[right], (map.get(s[right]) ?? 0) + 1);
        while (map.get(s[right]) > 1) {            
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        result = Math.max(result, right - left + 1);
        right++;      
    }

    return result;
};