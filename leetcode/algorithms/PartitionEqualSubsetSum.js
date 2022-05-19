// Source : https://leetcode.com/problems/partition-equal-subset-sum/
// Author : avebeatrix
// Date   : 2022-05-19
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let N = nums.length;
    if (N === 1) return false;
    let sum = nums.reduce((acc, val) => acc += val, 0);
    if (sum % 2 !== 0) return false;
    let X = sum / 2 + 1;
    let dp = Array(N + 1).fill(0).map((val, key) => Array(X).fill(false));
    dp[0][0] = true;
    for (let i = 1; i < N + 1; i++) {
        for (let j = 0; j < X; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i][j];
            }
        }
    }
    return dp[N][X - 1];
};
let d = canPartition([1,5,11,5]);
