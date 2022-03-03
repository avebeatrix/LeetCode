// Source : https://leetcode.com/problems/arithmetic-slices/
// Author : avebeatrix
// Date   : 2022-03-03
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let result = 0;
    let l = nums.length;
    if (l < 3) return result;
    let diff = nums[1] - nums[0];
    let cur_l = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === diff) {
            cur_l++;
        } else {
            if (cur_l >= 3) {
                for (let j = cur_l - 2; j > 0; j--) {
                    result += j;
                }
            }
            cur_l = 2;
            diff = nums[i] - nums[i - 1];
        }
    }
    if (cur_l >= 3) {
        for (let j = cur_l - 2; j > 0; j--) {
            result += j;
        }
    }
    return result;
};