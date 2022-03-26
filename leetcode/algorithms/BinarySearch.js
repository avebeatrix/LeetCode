// Source : https://leetcode.com/problems/binary-search/
// Author : avebeatrix
// Date   : 2022-03-26
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0;
    let r = nums.length;    
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] >= target) {
            r = m;         
        } else {           
            l = m + 1;    
        }
    }
    if (nums[r] !== target) return -1;
    return r;   
};