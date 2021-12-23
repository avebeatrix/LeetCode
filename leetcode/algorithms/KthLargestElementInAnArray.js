// Source : https://leetcode.com/problems/kth-largest-element-in-an-array/
// Author : avebeatrix
// Date   : 2021-12-23
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    let len = nums.length;
    let goal = len - k;

    let lomutoPartition = (arr, lo, hi) => {
        let pivot = arr[hi];
        let i = lo;
        for (let j = lo; j < hi; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i = i + 1;
            }
        }
        [arr[i], arr[hi]] = [arr[hi], arr[i]];
        return i
    }

    let partitionIndex = lomutoPartition(nums, 0, len - 1);
    while (partitionIndex !== goal) {
        if (partitionIndex < goal) {
            partitionIndex = lomutoPartition(nums, partitionIndex + 1, len - 1);
        } else {
            partitionIndex = lomutoPartition(nums, 0, partitionIndex - 1);
        }
    }
    return nums[partitionIndex];
};