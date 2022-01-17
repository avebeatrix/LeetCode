// Source : https://leetcode.com/problems/word-pattern/
// Author : avebeatrix
// Date   : 2022-01-17
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let s_arr = s.split(' ');
    if (s_arr.length != pattern.length) return false;
    let map = new Map();
    let map2 = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (map2.has(s_arr[i]) && pattern[i] !== map2.get(s_arr[i])) return false;
        if (!map.has(pattern[i])) {
            map.set(pattern[i], s_arr[i]);
            map2.set(s_arr[i], pattern[i]);            
        } else {
            if (s_arr[i] !== map.get(pattern[i])) return false;
        }
    }
    return true;
};