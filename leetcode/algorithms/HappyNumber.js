// Source : https://leetcode.com/problems/happy-number/
// Author : avebeatrix
// Date   : 2021-12-11
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {    
    let arr = n.toString().split('').map(val => parseInt(val));
    let base = arr.reduce((acc, val) => acc + val * val, 0);
    if (base === 1) return true;
    let transformations = new Set([base]);
    let new_base = base;
    do {
        arr = new_base.toString().split('').map(val => parseInt(val));
        new_base = arr.reduce((acc, val) => acc + val * val, 0);
        if (transformations.has(new_base)) {
            return false;
        }
        transformations.add(new_base);
    } while (new_base !== 1)
    return true;
};