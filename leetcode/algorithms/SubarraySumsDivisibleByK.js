// Source : https://leetcode.com/problems/subarray-sums-divisible-by-k/
// Author : avebeatrix
// Date   : 2022-09-04
// hard math - not understandable, to do: understand
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let freq = new Array(k).fill(0);
    freq[0] = 1;

    let sum = 0;

    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        sum = sum + nums[i]

        var remainder = sum % k

        if (remainder < 0) remainder += k;


        count += freq[remainder];

        freq[remainder]++;
    }
    return count;
};
