// Source : https://leetcode.com/problems/move-zeroes/
// Author : avebeatrix
// Date   : 2021-12-02
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let pointer_zero = 0;
    let L = nums.length;
    for(let i = 0; i < L; i++) {
        if (nums[i]!==0){
            nums[pointer_zero] = nums[i];
            pointer_zero++;
        }
    }
    for(let i = pointer_zero; i < L; i++){
        nums[i] = 0;
    }
};