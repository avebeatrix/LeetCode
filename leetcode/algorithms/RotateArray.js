// Source : https://leetcode.com/problems/rotate-array/
// Author : avebeatrix
// Date   : 2021-11-27
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let l = nums.length;
    k = k % l;
    if (l === 1 || k === 0) return;

    let count = 0;
    for (let start = 0; count < l; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start != current);
    }
};