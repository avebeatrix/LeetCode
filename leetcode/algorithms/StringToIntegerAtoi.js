// Source : https://leetcode.com/problems/string-to-integer-atoi/
// Author : avebeatrix
// Date   : 2021-11-29
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let sign = 1;
    if (s[0] === '-') {
        sign = -1;
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (i===0 && (s[i] === '+' || s[i] === '-')) continue;
        if (charCode >= 48 && charCode <= 57) {
            result = result*10 + parseInt(s[i]);
        }else{
            break;
        }
    }
    result = result*sign;    
    result = Math.min(2**31-1, result);
    result = Math.max(-(2**31), result);

    return result;
};
let a = myAtoi("-91283472332");
let b;