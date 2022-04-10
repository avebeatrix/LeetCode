// Source : https://leetcode.com/problems/baseball-game/
// Author : avebeatrix
// Date   : 2022-04-10
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let stack = [];
    ops.forEach(val => {
        switch (val) {
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            case 'D':
                stack.push(stack[stack.length - 1] * 2);
                break;
            case 'C':
                stack.pop();
                break;
            default:
                stack.push(parseInt(val));
                break;
        }
    })
    return stack.reduce((acc, val) => acc += val);
};