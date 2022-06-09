// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Author : avebeatrix
// Date   : 2022-06-09
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let N = numbers.length;    
    let lBinSearch = (l, r) => {
        let t = target - numbers[l - 1];
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (numbers[m] < t) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }    
    for (let i = 0; i < N; i++) {
        let candidate = lBinSearch(i + 1, N - 1);
        if (numbers[candidate] + numbers[i] === target) {
            return [i + 1, candidate + 1];
        }
    }
};