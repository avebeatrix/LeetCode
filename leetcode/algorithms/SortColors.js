// Source : https://leetcode.com/problems/sort-colors/
// Author : avebeatrix
// Date   : 2021-12-09
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let L = nums.length - 1;
    if (L === 0) return;
    if (L === 1) {
        if (nums[0] > nums[1]) {
            [nums[0], nums[1]] = [nums[1], nums[0]];
        }
        return;
    }
    let p1 = 0;
    let p2 = L;
    let p3 = L;

    while (p1 <= p2 && p2 <= p3) {
        if (nums[p1] === 2) {
            [nums[p1], nums[p3]] = [nums[p3], nums[p1]];
            p3--;
        } else if (nums[p1] === 1) {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            p2--;
        }
        if (nums[p1] === 0) {
            p1++;
        }
        if (p3 < p2) {
            p2--;
        }
    }
};
let nums = [2, 0, 1];
sortColors(nums);