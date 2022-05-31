// Source : https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
// Author : avebeatrix
// Date   : 2022-05-31
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let N = s.length;
    if (N < k) return false;
    let set = new Set();

    let l = 0;
    let r = k;
    while (r <= N) {
        let window = s.slice(l, r);
        set.add(window);
        l++;
        r++;
    }
    if (set.size < 2 ** k) return false;
    return true;
};
console.log(hasAllCodes("00110", 2));