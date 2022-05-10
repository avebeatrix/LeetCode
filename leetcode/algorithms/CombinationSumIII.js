// Source : https://leetcode.com/problems/combination-sum-iii/
// Author : avebeatrix
// Date   : 2022-05-10
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    let result = [];
    let step = (n, k, arr, last) => {
        for(let i = last + 1; i <= 9; i++) {
            let arr_copy = [...arr];
            let candidate = n - i;
            let new_k = k - 1;
            if (candidate === 0 && new_k === 0) {
                arr_copy.push(i);
                result.push(arr_copy);
                return;
            }
            if (candidate > 0 && new_k) {
                arr_copy.push(i);
                step(candidate, new_k, arr_copy, i);              
            }
        }
    }
    step(n, k, [], 0);
    return result;
};