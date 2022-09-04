// Source : https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
// Author : avebeatrix
// Date   : 2022-09-04
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const N = nums.length;
    if (N === 1 && nums[0] === target) {
        return 0;
    }

    const checkPivot = (m) => nums[m] >= nums[0];
    const checkMin = (m) => nums[m] < target
    const lBinSearch = (l, r, check) => {
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (check(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
    let result = -1;
    if (nums[N - 1] > nums[0]) {
        result = lBinSearch(0, N - 1, checkMin);        
    } else {
        let pivot = lBinSearch(1, N - 1, checkPivot);         
        if (target >= nums[0]) {        
            result = lBinSearch(0, pivot - 1, checkMin);        
        } else {
            result = lBinSearch(pivot, N - 1, checkMin);
        }        
    }
    if (nums[result] === target) {
        return result;
    }
    return -1;
};