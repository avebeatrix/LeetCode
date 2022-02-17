// Source : https://leetcode.com/problems/combination-sum/
// Author : avebeatrix
// Date   : 2022-02-17
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    let getPath = (arr, t) => {

        for (let candidate of sorted) {
            if (candidate < arr[arr.length - 1]) {
                continue;
            }
            let new_arr = Array.from(arr);
            let new_t = t - candidate;
            arr.push(candidate);

            if (new_t > 0) {
                getPath(new_arr, new_t);
            } else if (new_t === 0) {
                result.push(new_arr);
            }
        }
    }
    let sorted = candidates.sort((a, b) => a - b);
    getPath([], target);
    return result;
};