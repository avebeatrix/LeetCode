// Source : https://leetcode.com/problems/remove-duplicate-letters/
// Author : avebeatrix
// Date   : 2022-03-18
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let set = new Set();
    let result = [];
    
    s.split('').forEach((char, i) => {
        if (!set.has(char)) {    
            while (result.length) {
                let previous_char = result[result.length - 1];
                if (previous_char.charCodeAt(0) > char.charCodeAt(0) && s.slice(i).indexOf(previous_char) !== -1) {
                    result.pop();                
                    set.delete(previous_char);                
                } else {
                    break;
                }
            }                     
            result.push(char);
            set.add(char);
        }          
    })
  
    return result.join('');
};