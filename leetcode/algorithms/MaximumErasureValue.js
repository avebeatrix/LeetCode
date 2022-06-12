// Source : https://leetcode.com/problems/maximum-erasure-value/
// Author : avebeatrix
// Date   : 2022-06-12
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    let prefix_sum = [];
    nums.forEach((num, i) => {
        prefix_sum[i] = (prefix_sum[i - 1] || 0) + num;
    })
    let map = new Map();
    let result = 0;
    let cur = 0;
    let cur_l = 0;
    nums.forEach((num, i) => {
       if (map.has(num)) {
            cur_l = Math.max(cur_l, map.get(num));
            cur = prefix_sum[i] -  prefix_sum[cur_l];           
       } else {
            cur += num;                      
       }
       map.set(num, i);
       result = Math.max(result, cur);
    })
    return result;
};