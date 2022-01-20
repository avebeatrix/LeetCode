// Source : https://leetcode.com/problems/koko-eating-bananas/
// Author : avebeatrix
// Date   : 2022-01-20
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        let hours = piles.reduce((acc, val) => acc += Math.ceil(val / m), 0);
        if (hours <= h) {
            r = m;                        
        } else {
            l = m + 1;
        }
    }
    return l;
};