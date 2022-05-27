// Source : https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// Author : avebeatrix
// Date   : 2022-05-27
/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
     if (!num) return 0;
    return num.toString(2).split('').reduce((acc, val) => acc += val === '0' ? 1 : 2, 0) - 1;
};