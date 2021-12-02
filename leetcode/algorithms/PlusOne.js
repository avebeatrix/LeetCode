// Source : https://leetcode.com/problems/plus-one/
// Author : avebeatrix
// Date   : 2021-12-02
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let L = digits.length - 1;
    let result = [digits[L] === 9 ? 0 : digits[L] + 1];
    let plus = digits[L] === 9 ? 1 : 0;
    for (let i = L - 1; i >= 0; i--) {
        result.push(digits[i] + plus);
        if (result[L - i] === 10) {
            result[L - i] = 0;
        } else {
            plus = 0;
        }
    }
    if ((result[L] === 0) && plus) {
        result[L] = 0;
        result.push(1);
    }
    return result.reverse();
};