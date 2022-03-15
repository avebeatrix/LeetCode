// Source : https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// Author : avebeatrix
// Date   : 2022-03-15
/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    let stack = [];
    let balance = 0;   
    let result = '';    
    let i = 0;
    for (let char of s) {
        if (char === ')' && balance < 1) {
            continue;
        }
        if (char === ')'){
            balance--;           
        }
        if (char === '('){
            balance++;
            stack.push(i);
        } 
        result += char;
        i++;
    }
  
    let index = result.length - 1;
    while (balance) {                
        index = stack.pop();
        if (result[index] === '(') {
            balance--;
        }
    }   
    
    return result.slice(0, index) + result.slice(index).replace(/\(/g,'');
};