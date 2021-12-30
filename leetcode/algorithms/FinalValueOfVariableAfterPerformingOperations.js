// Source : https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
// Author : avebeatrix
// Date   : 2021-12-30
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0;
    operations.forEach(val => {
        if (val.indexOf('-') != -1) {
            x--;
        } else {
            x++;
        }
    })
    return x;
};