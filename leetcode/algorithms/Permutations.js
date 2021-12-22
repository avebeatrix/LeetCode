// Source : https://leetcode.com/problems/permutations/
// Author : avebeatrix
// Date   : 2021-12-22
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {   
    let len = nums.length;
    let result = [[nums[0]]];
    for (let i = 1; i < len; i++) {
        let new_arr = [];
        result.forEach(arr => {
            for (let j = 0; j <= arr.length; j++) {
                new_arr.push([...arr]);
                new_arr[new_arr.length - 1].splice(j, 0, nums[i]);
            }
        })
        result = new_arr;
    }
    return result;
};