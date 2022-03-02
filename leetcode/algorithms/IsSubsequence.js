// Source : https://leetcode.com/problems/is-subsequence/
// Author : avebeatrix
// Date   : 2022-03-02
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let s_pointer = 0;
    let t_pointer = 0;
    while (s_pointer < s.length) {
        if (s[s_pointer] === t[t_pointer]) {
            s_pointer++;
        }
        t_pointer++;   
        if (t_pointer > t.length - 1 && s_pointer < s.length) return false;    
    }
    return true;
};