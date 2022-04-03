// Source : https://leetcode.com/problems/next-permutation/
// Author : avebeatrix
// Date   : 2022-04-03
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    let index = -1;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            let nextMin = Infinity;
            let nextMinIndex = i;
            for (let j = len - 1; j >= index + 1; j--) {
                if (nums[j] > nums[i] && nums[j] < nextMin) {
                    nextMin = nums[j];
                    nextMinIndex = j;
                }
            }
            nums[i] = nums[i] + nums[nextMinIndex];
            nums[nextMinIndex] = nums[i] - nums[nextMinIndex];
            nums[i] = nums[i] - nums[nextMinIndex];
            break;
        }
    }

    let qsort = (l, r) => {
        if (l >= r) return;
        let pivot = l;
        for (let i = l + 1; i <= r; i++) {
            if (nums[i] <= nums[pivot]) {
                nums[i] = nums[i] + nums[pivot];
                nums[pivot] = nums[i] - nums[pivot];
                nums[i] = nums[i] - nums[pivot];
                pivot = i;
            }
        }
              
        qsort(l, pivot - 1);
        qsort(pivot + 1, r);
    }
    qsort(index + 1, len - 1);   
};