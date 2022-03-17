// Source : https://leetcode.com/problems/score-of-parentheses/
// Author : avebeatrix
// Date   : 2022-03-17
/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
     let stack = [];
    for(let char of s) {        
        if (char === '(') {
            stack.push('(');
        } else {
            if (stack[stack.length - 1] === '(') {
                stack.pop();                
                let sum = 1;
                while (stack.length && stack[stack.length - 1] !== '(') {
                    sum+=stack.pop();
                }
                stack.push(sum);
            } else {
                let old_sum = stack.pop();
                stack.pop();
                stack.push(old_sum*2);

                let sum = 0;
                while (stack.length && stack[stack.length - 1] !== '(') {
                    sum+=stack.pop();
                }
                stack.push(sum);            
            }
        }
    }
    return stack[0] || 0;
};