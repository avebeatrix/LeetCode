// Source : https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/
// Author : avebeatrix
// Date   : 2022-03-22
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    let res = '';
    let rest = k;
    let add_code = 'a'.charCodeAt(0) - 1;
    for (let i = 1; i <= n; i++) {
        let mod = 26 * (n - i);
        if (rest <= mod) {
            res += 'a';
            rest--;
        } else {
            mod = i===n ? rest : (rest % mod || 26);          
            res += String.fromCharCode(add_code + mod);
            rest -= mod;
        }
    }
    return res;
};