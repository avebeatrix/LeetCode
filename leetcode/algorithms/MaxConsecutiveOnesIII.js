// Source : https://leetcode.com/problems/max-consecutive-ones-iii/
// Author : avebeatrix
// Date   : 2022-07-31
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//sliding window
var longestOnes = function (nums, k) {
    let left = 0, right = 0;

    while (right < nums.length) {
        if (nums[right] === 0) k--;
        if (k < 0) {
            if (nums[left] === 0) k++;
            left++;
        }
        right++;
    }
    return right - left;
};