// Source : https://leetcode.com/problems/sequential-digits/
// Author : avebeatrix
// Date   : 2022-01-23
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let min_l = low.toString().split('').length;
    let max_l = high.toString().split('').length;
    let arr = [];
    let digits = [...Array(10).keys()];
    for (let i = min_l; i <= max_l; i++) {
        for (let j = 1; j <= 10 - i; j++) {
            let candidate = Number(digits.slice(j, j + i).join(''));
            if (candidate <= high && candidate >= low){
                arr.push(Number(digits.slice(j, j + i).join('')));
            }            
        }
    }
    arr.sort((a, b) => a - b);
    return arr;
};