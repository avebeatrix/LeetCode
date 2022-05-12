// Source : https://leetcode.com/problems/permutations-ii/
// Author : avebeatrix
// Date   : 2022-05-12
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let map = new Map();
    nums.forEach(val => {
        map.set(val, (map.get(val) ?? 0) + 1);        
    })

    let getPerms = (map, arr) => {
        [...map.keys()].forEach((key) => {           
            let m = new Map(map);
            let a = [...arr];
            m.set(key, m.get(key) - 1);
            if (!m.get(key)){
                m.delete(key);
            }        
            a.push(key);
            if (m.size) {
                getPerms(new Map(m),  a);
            } else {
                result.push(a);
            }
        })
    }
    let result = [];
    getPerms(map, []);
    
    return result;
};