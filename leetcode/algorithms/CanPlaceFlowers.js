// Source : https://leetcode.com/problems/can-place-flowers/
// Author : avebeatrix
// Date   : 2022-01-18
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let counter = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
            flowerbed[i] = 1;
            counter++;
        }
    }
    if (counter < n) return false;
    return true;
};