// Source : https://leetcode.com/problems/remove-element/
// Author : avebeatrix
// Date   : 2021-12-11
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;
    nums.forEach((num, i) => {
        if (num !== val) {
            nums[k] = nums[i];
            k++;
        }
    })
    return k;
};