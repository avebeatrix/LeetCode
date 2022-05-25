// Source : https://leetcode.com/problems/russian-doll-envelopes/
// Author : avebeatrix
// Date   : 2022-05-25
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {    
    let N = envelopes.length;   
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    })   
    let dp = [];
    for (let i = 0; i < N; i++) {
        let height = envelopes[i][1], left = 0, right = dp.length   
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length;    
};