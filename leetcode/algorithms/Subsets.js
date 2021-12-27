// Source : https://leetcode.com/problems/subsets/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        result.push([nums[i]]);
        let limit = result.length - 1;
        for(let j = 0; j < limit; j++) {                   
            result.push([...result[j], nums[i]]);
        }
    }
    result.push([]);
    return result;
};