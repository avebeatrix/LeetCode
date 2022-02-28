// Source : https://leetcode.com/problems/summary-ranges/
// Author : avebeatrix
// Date   : 2022-02-28
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = [];
    if (!nums.length) {
        return result;
    }
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            if (nums[i - 1] === current) {
                result.push(current.toString());
            } else {
                result.push(current + '->' + nums[i - 1]);
            }
            current = nums[i];
        }
    }
    if (nums[nums.length - 1] === current) {
        result.push(current.toString());
    } else {
        result.push(current + '->' + nums[nums.length - 1]);
    }
    return result;
};