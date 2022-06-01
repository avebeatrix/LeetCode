// Source : https://leetcode.com/problems/running-sum-of-1d-array/
// Author : avebeatrix
// Date   : 2022-06-01
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let result = [];
    nums.forEach((val) => result.push((result[result.length - 1] || 0) + val));
    return result;
};