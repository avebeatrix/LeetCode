// Source : https://leetcode.com/problems/pascals-triangle/
// Author : avebeatrix
// Date   : 2021-11-28
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]];
    if (numRows > 1) {
        res.push([1, 1]);
    }
    for (let i = 2; i < numRows; i++) {
        let tmp = [1];
        for (let j = 1; j < i ; j++) {
            tmp.push(res[res.length - 1][j - 1] + res[res.length - 1][j]);
        }
        tmp.push(1);
        res.push(tmp);
    }
    return res;
};
generate(5);