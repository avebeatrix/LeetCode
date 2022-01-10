// Source : https://leetcode.com/problems/powx-n/
// Author : avebeatrix
// Date   : 2022-01-10
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (n === 0) return 1;

    let pow = (x, n) => {
        if (n === 1) return x;
        let result = x;

        let half = Math.floor(n / 2);  
        let temp = pow(x, half);   
        if (n % 2 === 0) {       
            result = temp * temp;
        } else {
            result = x * temp * temp;
        }
        return result
    }
    result = pow(x, Math.abs(n));
    if (n < 0) result = 1 / result;
    return result;
};
