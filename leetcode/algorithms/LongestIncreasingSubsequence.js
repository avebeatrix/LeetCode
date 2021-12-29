// Source : https://leetcode.com/problems/longest-increasing-subsequence/
// Author : avebeatrix
// Date   : 2021-12-29
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let len = nums.length;    
    
    let lowerBound = (l, r, k) => {
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] === k) return m;
            if (arr[m] > k) {
                r = m - 1;
            } else { 
                l = m + 1;
            }
        } 
        return l;       
    }

    let arr = [nums[0]];
    let last = 0;
    
    for (let i = 1; i < len; i++) {
        let j = lowerBound(0, last, nums[i]);
        arr[j] = nums[i];
        if (last < j) last = j;
    }
    return last + 1;
};