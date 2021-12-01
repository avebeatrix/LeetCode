// Source : https://leetcode.com/problems/single-number/
// Author : avebeatrix
// Date   : 2021-12-01
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let l = nums.length;
    for (let i = 1; i < l; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            if (count === 1) {
                return nums[i - 1];
            }
            count = 1;
        }
    }
    return nums[l - 1];
};
let d = singleNumber([1]);
let k;