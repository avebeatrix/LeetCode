// Source : https://leetcode.com/problems/valid-mountain-array/
// Author : avebeatrix
// Date   : 2022-01-25
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;

    let max_i = 0;
    let stop_find_high = false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false;
        if (!stop_find_high && arr[i] > arr[i - 1]) {
            max_i = i;
        } else {
            stop_find_high = true;
            if (arr[i] >= arr[i - 1]) {
                return false;
            }
        }
    }
    if (max_i && max_i < arr.length - 1) return true;
    return false;
};