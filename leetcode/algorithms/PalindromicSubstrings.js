// Source : https://leetcode.com/problems/palindromic-substrings/
// Author : avebeatrix
// Date   : 2022-05-22
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let N = s.length;
    let dp = Array(N).fill(1);
    let new_dp = Array(N).fill(0);
    new_dp[0] = 2;

    let reversed_s = s.split('').reverse().join('');

    for (let i = 1; i < N; i++) {
        
        for (let j = 1; j < N; j++) {
            if (i >= j) {
                let part = s.slice(i - j, i + 1);
                let reversed_part = reversed_s.slice(N - i - 1, N - i + j);
                if (part === reversed_part) {
                    new_dp[j] = new_dp[j - 1] + 1;
                    continue;
                }
            }
            new_dp[j] = new_dp[j - 1];          
        }
        
        dp = new_dp;
        new_dp = Array(N).fill(0);
        new_dp[0] = dp[N - 1] + 1;
    }
    return dp[N - 1];
};