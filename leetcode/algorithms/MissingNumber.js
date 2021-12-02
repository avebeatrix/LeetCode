// Source : https://leetcode.com/problems/missing-number/
// Author : avebeatrix
// Date   : 2021-12-02
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {        
    return nums.length/2 * (nums.length+1) - nums.reduce((acc, val)=> acc+val);
};