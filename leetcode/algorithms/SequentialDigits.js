// Source : https://leetcode.com/problems/sequential-digits/
// Author : avebeatrix
// Date   : 2022-01-23
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let min_l = String(low).length;
    let max_l = String(high).length;
    let arr = [];
    let digits = '0123456789';
    for (let i = min_l; i <= max_l; i++) {
        for (let j = 1; j <= 10 - i; j++) {
            let candidate = Number(digits.slice(j, j + i));
            if (candidate > high) return arr;
            if (candidate >= low){
                arr.push(Number(digits.slice(j, j + i)));
            }            
        }
    }    
    return arr;
};