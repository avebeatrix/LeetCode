// Source : https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Author : avebeatrix
// Date   : 2022-02-02
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let l = s.length;
    let indicies = [];
    if (l < p.length) return indicies;
    let map = new Map();
    for (let char of p) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let tmp_map = new Map();
    let start = 0;
    for (let i = 0; i < l; i++) {        
        if (!map.has(s[i])) {
            tmp_map = new Map();
            start = i + 1;
            continue;
        }
        tmp_map.set(s[i], (tmp_map.get(s[i]) || 0) + 1);
       
        while (tmp_map.get(s[i]) > map.get(s[i])) {  
            tmp_map.set(s[start], tmp_map.get(s[start]) - 1);   
            if (tmp_map.get(s[start]) === 0) {
                tmp_map.delete(s[start]);                
            }        
            start++;            
        }
        
        if (tmp_map.size === map.size) {
            let is_equal = true;
            tmp_map.forEach((val, key) => {
                if (val !== map.get(key)) {
                    is_equal = false;
                }
            })
            if (is_equal) {
                indicies.push(start);
                tmp_map.set(s[start], tmp_map.get(s[start]) - 1);
                if (tmp_map.get(s[start]) === 0) {
                    tmp_map.delete(s[start]);                
                }    
                start++;           
            }
        }
    }
    return indicies;
};
