// Source : https://leetcode.com/problems/contiguous-array/
// Author : avebeatrix
// Date   : 2022-02-04
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let diffMap = new Map();
    diffMap.set(0, [-1]);
    let l = nums.length;
    let res = 0;
    let balance = 0;
    for (let i = 0; i < l; i++) {
        if (nums[i]) {
            balance++;
        } else {
            balance--;
        }
        if (!diffMap.has(balance)) {
            diffMap.set(balance, []);
        }
        diffMap.get(balance).push(i);
    }
    diffMap.forEach((arr, key) => {
        if (!key) {
            res = Math.max(res, arr[arr.length - 1] + 1);
        } else if (arr.length > 1) {
            res = Math.max(res, arr[arr.length - 1] - arr[0]);
        }
    })
    return res;
};