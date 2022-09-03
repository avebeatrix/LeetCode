// Source : https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/submissions/
// Author : avebeatrix
// Date   : 2022-09-03
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let result = 0;
    let lp = 0;
    let rp = 0;
    let N = nums.length;
    let counterOnes = 0;
    let counterZeroes = 0;
    while (rp < N) {
        nums[rp] ? counterOnes++ : counterZeroes++;
        while (counterZeroes > 1) {            
            nums[lp] ? counterOnes-- : counterZeroes--;
            lp++;
        }
        result = Math.max(counterOnes + counterZeroes - 1, result);
        rp++;
    }
    return Math.max(counterOnes + counterZeroes - 1, result);
};
console.log(longestSubarray([0,0,0,0,1]));