// Source : https://leetcode.com/problems/delete-operation-for-two-strings/
// Author : avebeatrix
// Date   : 2022-06-14
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array[word2.length + 1];
    for (let i = 0; i <= word1.length; i++) {
        let temp = Array(word2.length + 1);
        for (let j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0)
                temp[j] = i + j;
            else if (word1[i - 1] == word2[j - 1])
                temp[j] = dp[j - 1];
            else
                temp[j] = 1 + Math.min(dp[j], temp[j - 1]);
        }
        dp = temp;
    }
    return dp[word2.length];
};