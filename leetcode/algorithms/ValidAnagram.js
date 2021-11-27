// Source : https://leetcode.com/problems/valid-anagram/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    if (s.length!==t.length) return false;
    for(let char of s){
        sMap.set(char, (sMap.get(char) ?? 0)+1);
    }
    for(let char of t){
        tMap.set(char, (tMap.get(char) ?? 0)+1);
    }
    let falsy = false;
    tMap.forEach((count, key)=>{
        if(sMap.get(key)!==count){
            falsy = true;
        }
    })
    if (falsy) return false;
    return true;
};