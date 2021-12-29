// Source : https://leetcode.com/problems/add-binary/
// Author : avebeatrix
// Date   : 2021-12-29
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let max_len = Math.max(a.length, b.length);
    let lenA = a.length;
    let lenB = b.length;
    let result = '';
    let add = 0;
    let is_not_null = false;
    for (let i = 0; i < max_len; i++) {
        let A = parseInt(a[lenA - i - 1] ?? 0);
        let B = parseInt(b[lenB - i - 1] ?? 0);  
        
        is_not_null = is_not_null || A || B;

        result = ((A + B + add) % 2).toString() + result;

        add = (A + B + add) > 1 ? 1 : 0;        
    }
    return is_not_null && add ? '1' + result : result;
};
let d = addBinary("11", "1");
let k;