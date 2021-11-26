// Source : https://leetcode.com/problems/maximum-subarray/
// Author : avebeatrix
// Date   : 2021-11-26
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + sum;        
        max = Math.max(sum, max, nums[i]);
        if (sum < 0) sum = 0;
    }
    return max;
};
maxSubArray([5,4,-1,7,8]);