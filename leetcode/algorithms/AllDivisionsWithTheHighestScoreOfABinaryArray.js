// Source : https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/
// Author : avebeatrix
// Date   : 2022-01-30
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function (nums) {
    let l = nums.length;

    let zeros = [0];
    let ones = Array(l + 1).fill(0);

    let max = 0;

    for (let i = 0; i < l; i++) {
        zeros[i + 1] = zeros[i] + Number(!nums[i]);
        ones[l - i - 1] = ones[l - i] + Number(nums[l - i - 1]);
    }

    for (let i = 0; i <= l; i++) {
        max = Math.max(max, zeros[i] + ones[i]);
    }

    let res = [];
    for (let i = 0; i <= l; i++) {
        if (zeros[i] + ones[i] === max) {
            res.push(i);
        }
    }
    return res;
};