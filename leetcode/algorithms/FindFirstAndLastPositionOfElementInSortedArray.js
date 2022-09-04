// Source : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Author : avebeatrix
// Date   : 2022-09-04
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    const N = nums.length - 1;
    const lBinSearch = (l, r) => {        
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] < target) {
                l = m + 1;      
            } else {                
                r = m;     
            }
        }
        return l;
    }
    const rBinSearch = (l, r) => {        
        while (l < r) {
            let m = Math.floor((l + r + 1) / 2);
            if (nums[m] === target) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    }
    let l = lBinSearch(0, N);
    if (nums[l] === target) {
        let r = rBinSearch(l, N);
        return [l, Math.max(l, r)];
    } else {
        return [-1, -1];
    }
};