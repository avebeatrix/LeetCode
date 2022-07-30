// Source : https://leetcode.com/problems/subarray-sum-equals-k/
// Author : avebeatrix
// Date   : 2022-07-30
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let prefixSum = [];
    let sum = 0;
    let result = 0;
    let map = new Map();
    nums.forEach((num, i) => {
        sum += num;
        prefixSum.push(sum);
        if (sum === k) {
            result++;
        }
        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    })
    return result;
};