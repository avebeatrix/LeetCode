// Source : https://leetcode.com/problems/find-peak-element/
// Author : avebeatrix
// Date   : 2021-12-27
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let middle = Math.floor((r + l) / 2);
        if (nums[middle] > nums[middle + 1]) {
            r = middle;
        } else {
            l = middle + 1;
        }       
    }  
    return l; 
};