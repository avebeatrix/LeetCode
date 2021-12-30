// Source : https://leetcode.com/problems/build-array-from-permutation/
// Author : avebeatrix
// Date   : 2021-12-30
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
 */
var buildArray = function (nums) {
    let n = nums.length;
    nums.forEach((num, index) => {
        nums[index] = nums[index] + (nums[nums[index]] % n) * n;
    })
    nums.forEach((num, index) => {
        nums[index] = Math.floor(nums[index]/n);
    })
    return nums; 
};