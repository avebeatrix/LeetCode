// Source : https://leetcode.com/problems/concatenation-of-array/
// Author : avebeatrix
// Date   : 2021-12-30
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    return [...nums, ...nums];
};