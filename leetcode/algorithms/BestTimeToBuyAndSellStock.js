// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : avebeatrix
// Date   : 2021-11-24
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let max = min;
    let max_diff = 0;
    for (let i = 1; i < prices.length; i++) {        
        if (prices[i] < min) {
            min = prices[i];
            max = min;
        }else{
            max = Math.max(max, prices[i]);
            max_diff = Math.max(max - min, max_diff);
        }        
    }
    return max_diff;
};