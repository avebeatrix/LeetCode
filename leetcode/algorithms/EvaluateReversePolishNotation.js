// Source : https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Author : avebeatrix
// Date   : 2021-12-16
/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];  
    let getAB = () => {
        return [stack.pop(), stack.pop()].reverse();
    } 
    let a;
    let b;
    tokens.forEach(val => {       
        switch (val) {
            case '+':
                [a, b] = getAB();
                stack.push(a+b);         
                break;
            case '-':
                [a, b] = getAB();
                stack.push(a-b);  
                break;
            case '*':
                [a, b] = getAB();
                stack.push(a*b);  
                break;
            case '/':
                [a, b] = getAB();
                stack.push(Math.trunc(a/b));  
                break;
            default:
                stack.push(parseInt(val));   
                break;
        }       
    })
    return stack.pop();
};