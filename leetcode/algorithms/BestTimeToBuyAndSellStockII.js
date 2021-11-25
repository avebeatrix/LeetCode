// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author : avebeatrix
// Date   : 2021-11-25
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result = 0;
    let min = Infinity;
    let max = -1;
    for (let price of prices) {
        if (price < max) {
            result += max - min;
            min = price;
            max = -1;
        } else if (price < min) {
            min = price;
        } else if (price > min) {
            max = Math.max(max, price);
        }
    }
    if (max > -1) {
        result += max - min;
    }
    return result;
};