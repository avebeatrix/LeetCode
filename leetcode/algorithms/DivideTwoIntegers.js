// Source : https://leetcode.com/problems/divide-two-integers/
// Author : avebeatrix
// Date   : 2022-05-30
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {     

    let sign = dividend >= 0 && divisor >= 0 || dividend < 0 && divisor < 0 ? true : false;    

    let result = 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (dividend < divisor) return 0;

    let dividend_str = dividend.toString(2);
    let divisor_str = divisor.toString(2);

    let N = divisor_str.length;
    let M = dividend_str.length;
 
    let right = N;

    let cur = parseInt(dividend_str.slice(0, right), 2);
    if (cur < divisor) {
        right++;        
        cur = parseInt(cur.toString(2) + dividend_str[right - 1], 2);
    } 
    
    while (right <= M) {               
        let diff = cur - divisor;
        result = result << 1;
        if (cur >= divisor) {                 
            result |= 1;
            cur = diff; 
        }
        if (result < 0) return sign ? 2 ** 31 - 1 : (-2) ** 31;
              
        right++;
        cur = parseInt(cur.toString(2) + dividend_str[right - 1], 2);
    }
    result *= (sign ? 1 : -1);
    if (result > 2 ** 31 - 1) return 2 ** 31 - 1;
    return result;
};