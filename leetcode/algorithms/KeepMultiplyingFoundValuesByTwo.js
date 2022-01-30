// Source : https://leetcode.com/problems/keep-multiplying-found-values-by-two/
// Author : avebeatrix
// Date   : 2022-01-30
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    let set = new Set(nums);
    let res = original;
    while (set.has(res)) {
        res = res * 2;
    }
    return res;
};