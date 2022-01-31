// Source : https://leetcode.com/problems/richest-customer-wealth/
// Author : avebeatrix
// Date   : 2022-01-31
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach(account => {
        max = Math.max(max, account.reduce((acc, val) => acc += val, 0))
    })
    return max;
};