// Source : https://leetcode.com/problems/house-robber/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let L = nums.length;
    let result1 = nums[0] ?? 0;
    if (nums.length < 2) return result1;
    let a = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < L; i++) {
        a[i] = Math.max(a[i - 1], a[i - 2] + nums[i]);
    }

    return a[L - 1];
};