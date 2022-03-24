// Source : https://leetcode.com/problems/broken-calculator/
// Author : avebeatrix
// Date   : 2022-03-23
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
    let res = 0;
    let cur = target;
    while (cur > startValue) {       
        if (cur % 2 === 0) {
            cur /= 2;
            res++;
        } else {
            cur = (cur + 1) / 2;
            res += 2;
        }       
    }  
    res += startValue - cur;         
    return res;
};