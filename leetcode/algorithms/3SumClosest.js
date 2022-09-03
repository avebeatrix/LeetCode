// Source : https://leetcode.com/problems/3sum-closest/
// Author : avebeatrix
// Date   : 2022-09-03
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let diff = Infinity;
    const N = nums.length - 1;

    for (let i = 0; i < N; i++) {
        let j = i + 1;
        let k = N;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (Math.abs(diff) > Math.abs(target - sum)) {
                diff = target - sum;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return target - diff;
};
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));