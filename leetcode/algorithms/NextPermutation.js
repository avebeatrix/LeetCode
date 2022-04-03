// Source : https://leetcode.com/problems/next-permutation/
// Author : avebeatrix
// Date   : 2022-04-03
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    let index = -1;

    let swap = (i, j) => {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
    }
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            let nextMin = Infinity;
            let nextMinIndex = i;
            for (let j = len - 1; j >= index + 1; j--) {
                if (nums[j] > nums[i] && nums[j] < nextMin) {
                    nextMin = nums[j];
                    nextMinIndex = j;
                }
            }
            swap(i, nextMinIndex);
            break;
        }
    }
    let i = index + 1;
    let j = len - 1;
    while (i < j) {
        swap(i, j);
        i++;
        j--;
    }
};