// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : avebeatrix
// Date   : 2021-12-03
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result_len = 0;
    let sorted = [...strs].sort();
    if (sorted.includes('')){
        return '';
    }

    loop:    
    for(let i = 0; i < 200; i++) {
        let prev = sorted[0][i];
        for(let j = 0; j < sorted.length; j++) {
            if (sorted[j][i]!==prev){
                break loop;
            }
        }
        result_len++;
    }
    if (!result_len) return '';
    return sorted[0].substr(0, result_len);
};

let d = longestCommonPrefix(["flower","flow","a"]);
let k;