// Source : https://leetcode.com/problems/search-insert-position/
// Author : avebeatrix
// Date   : 2021-12-11
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        m = Math.floor((l + r + 1) / 2);
        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    if (nums[l] === target) {
        return l;
    } else if (nums[l] > target ){
        return 0;
    }
    return l + 1;
};