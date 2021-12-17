// Source : https://leetcode.com/problems/group-anagrams/
// Author : avebeatrix
// Date   : 2021-12-17
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
var groupAnagrams = function (strs) {
    let map = new Map();
    strs.forEach(str => {
        let sorted_str = str.split('').sort().join('');
        if (map.has(sorted_str)) {
            map.get(sorted_str).push(str);
        } else {
            map.set(sorted_str, [str]);
        }
    })
    return [...map.values()];
};