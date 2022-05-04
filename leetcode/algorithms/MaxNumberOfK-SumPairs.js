// Source : https://leetcode.com/problems/max-number-of-k-sum-pairs/
// Author : avebeatrix
// Date   : 2022-05-04
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    let map = new Map();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    })
    let result = 0;
    [...map.entries()].forEach(val => {
        if (map.has(val[0]) && map.has(k - val[0])) { 
            if (k - val[0] === val[0]) {
                result += Math.floor(map.get(val[0]) / 2);
            } else {
                result += Math.min(map.get(val[0]), map.get(k - val[0]));
            }      
            
            map.set(val[0], 0);
            map.set(k - val[0], 0);
        }
    })
    return result;
};
