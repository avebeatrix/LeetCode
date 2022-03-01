// Source : https://leetcode.com/problems/counting-bits/
// Author : avebeatrix
// Date   : 2022-03-01
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = [];
    for (let i = 0; i <= n; i++) {        
        res.push(i.toString(2).split('').reduce((acc, val) => acc += val === '1' ? 1 : 0, 0));
    }
    return res;
};
console.log(countBits(2));